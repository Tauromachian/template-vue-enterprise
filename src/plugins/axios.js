import Vue from 'vue'
import store from '../store/index'
import router from '../router/index'
import { SERVER_DIR, CLIENT_ID, CLIENT_SECRET } from '../utils/constants'
import queryString from 'query-string'

// Lib imports
import axios from 'axios'

Vue.prototype.$http = axios

const maxRetries = 1
let retryNumber = maxRetries

function auth () {
  return 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
}

function requestDataFormUrlEncoded () {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: auth(),
    },
  }
}

axios.interceptors.response.use(

  (response) => {
    return response
  },
  (error) => {
    const originalRequest = error.config
    if (error.response.status === 429) {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(axios(originalRequest))
        }, 4000)
      })
    }

    if (error.response.status === 401 && retryNumber) {
      if (!retryNumber) {
        retryNumber = maxRetries
        store.dispatch('setStatus', false)
        store.dispatch('destroyTokens')
        router.push({ name: 'Home' })
        return
      }

      retryNumber--
      originalRequest._retry = true
      const data = queryString.stringify({
        grant_type: 'refresh_token',
        refresh_token: atob(store.state.refreshToken),
      })
      return axios
        .post(
          `${SERVER_DIR}/oauth2/token`,
          data,
          requestDataFormUrlEncoded(),
        )
        .then((res) => {
          if (res.status === 201 || res.status === 200) {
            // 1) put token to LocalStorage
            store.dispatch('setTokens', { accessToken: res.data.access_token, idToken: res.data.id_token, refreshToken: res.data.refresh_token })
            store.dispatch('setStatus', true)

            // 2) set new auth headers to the petition
            originalRequest.headers.hashed = btoa('Bearer ' + res.data.access_token)
            originalRequest.headers.Authorization = 'Bearer ' + res.data.access_token

            retryNumber = maxRetries

            // 3) return originalRequest object with Axios.
            return axios(originalRequest)
          }
        }).catch(() => {
          store.dispatch('logout')
          // router.push({ name: 'Home' })
          router.push({ name: 'Home' })
        })
    }

    // return Error object with Promise
    return Promise.reject(error)
  },
)
