import axios from 'axios'
import { SERVER_DIR, REGISTER_DIR } from '@/utils/constants'
// import store from '@/store'
import { requestData } from '../requestHeadersHelper'

export async function getRole() {
  const role = await axios.get(SERVER_DIR + 'rol', requestData())
  return role
}

export async function setProfileInfo() {
  // const profileResponse = await axios.get(SERVER_DIR + 'perfil', requestData())
  // store.commit('user/setUser', profileResponse.data)
  // const avatarResponse = await axios.get(SERVER_DIR + 'avatar', requestData())
  // store.commit('user/setAvatar', avatarResponse.data.avatar)
  // store.commit('user/setProfilePicture', avatarResponse.data.avatar)
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
