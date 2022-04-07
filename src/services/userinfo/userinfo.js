import axios from 'axios'
import {
  AGENT,
  BIENESTAR_DIR, BIENESTAR_DIR_2,
  NO_AVATAR,
  REGISTER_DIR,
} from '@/utils/constants'
import store from '@/store'
import { requestData } from '../requestHeadersHelper'

export async function getRole () {
  const role = await axios.get(BIENESTAR_DIR + 'rol', requestData())
  return role
}

export async function setProfileInfo () {
  const profileInfo = new Promise((resolve, reject) => {
    getProfileInfo((err, ok) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
  await profileInfo
  const avatar = new Promise((resolve, reject) => {
    getAvatar((err, ok) => {
      if (err) {
        return reject(err)
      }
      resolve()
    })
  })
  await avatar
}

export function getProfileInfo (cb) {
  axios
    .get(BIENESTAR_DIR_2 + 'perfil', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + atob(store.getters.accessToken),
        hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
      },
      httpsAgent: {
        AGENT,
      },
    })
    .then(function (response) {
      store.commit('setUser', response.data)
      cb(null, response.data)
    })
    .catch(function (error) {
      cb(error)
    })
}

export function updateAvatar (updateAvatar, cb) {
  axios
    .post(
      BIENESTAR_DIR + 'avatar',
      {
        avatar: updateAvatar,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + atob(store.getters.accessToken),
          hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
        },
        httpsAgent: {
          AGENT,
        },
      },
    )
    .then(function (response) {
      console.log(response)
      store.commit('setAvatar', updateAvatar)
      cb(null, response.data.success)
    })
    .catch(function (error) {
      console.log(error)
      cb(error)
    })
}

export function getAvatar (cb) {
  axios
    .get(BIENESTAR_DIR_2 + 'avatar', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: 'Bearer ' + atob(store.getters.accessToken),
        hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
      },
      httpsAgent: {
        AGENT,
      },
    })
    .then(function (response) {
      if (response.data.avatar === '') {
        store.commit('setAvatar', NO_AVATAR)
        cb(null, { success: 'noavatar' })
      } else {
        store.commit('setAvatar', response.data.avatar)
        store.commit('user/setProfilePicture', response.data.avatar)
        cb(null, { success: 'avatar' })
      }
    })
    .catch(function (error) {
      cb(error)
    })
}

export function updateProfileInfo (user, cb) {
  axios
    .post(
      BIENESTAR_DIR + 'perfil',
      {
        username: user.username,
        lastname: user.lastname,
        name: user.name,
        province: user.province,
        mail: user.mail,
        dni: user.dni,
        gender: user.gender,
        mobile: user.mobile,
        phone: user.phone,
        dateOfBirth: user.dateOfBirth,
        municipality: user.municipality,
        url: user.url,
        company: user.company,
        postalcode: user.postalcode,
        country: user.country,
        address: user.address,
        bio: user.bio,
        ocupation: user.ocupation,
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + atob(store.getters.accessToken),
          hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
        },
        httpsAgent: {
          AGENT,
        },
      },
    )
    .then(function (response) {
      console.log(response)
      cb()
    })
    .catch(function (error) {
      cb(error)
    })
}

export function updatePass (pass, cb) {
  axios
    .post(
      BIENESTAR_DIR + 'pass',
      {
        password: btoa(pass.new),
        old_password: btoa(pass.old),
        confirm_password: btoa(pass.newRep),
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          Authorization: 'Bearer ' + atob(store.getters.accessToken),
          hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
        },
        httpsAgent: {
          AGENT,
        },
      },
    )
    .then(function (response) {
      console.log(response)
      cb(null, response.data)
    })
    .catch(function (error) {
      cb(error)
    })
}

export function registerUser (user, cb) {
  axios
    .post(
      REGISTER_DIR,
      {
        uid: user.email,
        username: user.email,
        mail: user.email,
        name: user.name,
        lastname: user.lastname,
        password: user.password,
        dni: user.dni,
      },
      {
        httpsAgent: {
          AGENT,
        },
      },
    )
    .then(function (response) {
      console.log(response)
      cb(null, response.data)
    })
    .catch(error => {
      cb(error)
    })
}
