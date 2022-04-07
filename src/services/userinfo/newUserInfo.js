import axios from 'axios'
import { AGENT, BIENESTAR_DIR, NO_AVATAR } from '@/utils/constants'
import store from '@/store'

export function getNewAvatar () {
  return axios
    .get(BIENESTAR_DIR + 'avatar', {
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
      } else {
        store.commit('setAvatar', response.data.avatar)
        store.commit('user/setProfilePicture', response.data.avatar)
      }
    })
}

export function getNewProfileInfo () {
 return axios
    .get(BIENESTAR_DIR + 'perfil', {
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
    })
}

export function getNewProvinces () {
 return axios.get(BIENESTAR_DIR + 'provincias', {
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
}

export function getNewMunicipalities (provID) {
  return axios.get(BIENESTAR_DIR + 'municipios/' + provID, {
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
}

export function getNewOcupations () {
  // TODO: check this address
 return axios.get(BIENESTAR_DIR + 'ocupations', {
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
}

export function updateNewAvatar (updateAvatar) {
  return axios
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
      store.commit('setAvatar', updateAvatar)
    })
}

export function updateNewProfileInfo (data) {
  return axios
    .post(
      BIENESTAR_DIR + 'perfil',
      {
        ...data,
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
}

export function updateNewPass (pass) {
 return axios
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
    // .then(function (response) {
    //   console.log(response)
    //   cb(null, response.data)
    // })
    // .catch(function (error) {
    //   cb(error)
    // })
}
