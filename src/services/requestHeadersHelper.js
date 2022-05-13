import store from '../store'
import { APPLICATION, CLIENT_ID, CLIENT_SECRET } from '@/utils/constants'

export function auth() {
  return 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
}

export function requestData(filters, app = true) {
  return {
    params: filters,
    headers: {
      'Content-Type': 'application/json',
      'Sec-Fetch-Mode': 'no-cors',
      Accept: 'application/json',
      Authorization: 'Bearer ' + atob(store.state.app.accessToken),
      hashed: btoa('Bearer ' + atob(store.state.app.accessToken)),
      app: app ? process.env.VUE_APP_APPLICATION : '',
    },
  }
}

export function requestDataAuth() {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: auth(),
      app: process.env.VUE_APP_APPLICATION,
    },
  }
}

export function requestDataAnonymousUser() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
  }
}

export function requestDataSVG() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/image',
      Authorization: 'Bearer ' + atob(store.state.app.accessToken),
      hashed: btoa('Bearer ' + atob(store.state.app.accessToken)),
    },
  }
}

export function requestDataFormUrlEncoded() {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: 'Bearer ' + atob(store.state.app.accessToken),
      hashed: btoa('Bearer ' + atob(store.state.app.accessToken)),
    },
  }
}

export function requestDataMultipartForm() {
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: 'Bearer ' + atob(store.state.app.accessToken),
      hashed: btoa('Bearer ' + atob(store.state.app.accessToken)),
    },
  }
}

export function requestDataWithApp() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      App: APPLICATION,
    },
  }
}
