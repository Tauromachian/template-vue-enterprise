import axios from 'axios'
import {
  SERVER_DIR,
  REGISTER_DIR,
  HOST_DIR,
  APPLICATION,
} from '../../utils/constants'
import qs from 'query-string'
import { requestData, requestDataAuth } from '../requestHeadersHelper'

// Auth loggin
export async function login(data) {
  const url = `${HOST_DIR}/oauth2/token`
  const response = await axios.post(url, qs.stringify(data), requestDataAuth())
  return response
}

// Auth register
export async function register(data) {
  const url = `${SERVER_DIR}api/register`
  data.application = APPLICATION
  data = qs.stringify(data)
  const response = await axios.post(url, data, requestDataAuth())
  return response
}

export async function getUserInfo() {
  const url = `${SERVER_DIR}user/info`
  const response = await axios.get(url, requestData())
  return response
}

export function registerUser(user, cb) {
  axios
    .post(REGISTER_DIR, {
      uid: user.email,
      username: user.email,
      mail: user.email,
      name: user.name,
      lastname: user.lastname,
      password: user.password,
      dni: user.dni,
    })
    .then(function (response) {
      cb(null, response.data)
    })
    .catch((error) => {
      cb(error)
    })
}
