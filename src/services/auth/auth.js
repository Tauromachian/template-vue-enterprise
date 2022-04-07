import axios from 'axios'
import {
  AGENT,
  SERVER_DIR,
  CLIENT_ID,
  CLIENT_SECRET,
  APPLICATION,
} from '../../../utils/constants'
import qs from 'query-string'

function auth() {
  return 'Basic ' + btoa(CLIENT_ID + ':' + CLIENT_SECRET)
}

function requestDataAuth() {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Authorization: auth(),
    },
    httpsAgent: {
      AGENT,
    },
  }
}

// Auth loggin
export async function login(data) {
  const url = `${SERVER_DIR}/oauth2/token`
  const response = await axios.post(url, qs.stringify(data), requestDataAuth())
  return response
}

// Auth register
export async function register(data) {
  const url = `${SERVER_DIR}/api/register`
  data.application = APPLICATION
  data = qs.stringify(data)
  const response = await axios.post(url, data, requestDataAuth())
  return response
}
