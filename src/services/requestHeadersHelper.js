import { AGENT } from '../utils/constants'
import store from '../store'
import { APPLICATION } from '@/utils/constants'

export function requestData(filters, app = false) {
  return {
    params: filters,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      Authorization: 'Bearer ' + atob(store.getters.accessToken),
      hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
      app: app ? 'admin-ticket' : '',
    },
    httpsAgent: {
      AGENT,
    },
  }
}

export function requestDataAnonymousUser() {
  return {
    headers: {
      'Content-Type': 'application/json',
    },
    httpsAgent: {
      AGENT,
    },
  }
}

export function requestDataSVG() {
  return {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/image',
      Authorization: 'Bearer ' + atob(store.getters.accessToken),
      hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
    },
    httpsAgent: {
      AGENT,
    },
  }
}

export function requestDataFormUrlEncoded() {
  return {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      Accept: 'application/json',
      Authorization: 'Bearer ' + atob(store.getters.accessToken),
      hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
    },
    httpsAgent: {
      AGENT,
    },
  }
}

export function requestDataMultipartForm() {
  return {
    headers: {
      'Content-Type': 'multipart/form-data',
      Accept: 'application/json',
      Authorization: 'Bearer ' + atob(store.getters.accessToken),
      hashed: btoa('Bearer ' + atob(store.getters.accessToken)),
    },
    httpsAgent: {
      AGENT,
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
    httpsAgent: {
      AGENT,
    },
  }
}
