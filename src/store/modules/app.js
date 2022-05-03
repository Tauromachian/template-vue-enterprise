import SecureLS from 'secure-ls'
const ls = new SecureLS()

export const state = {
  drawer: null,
  role: 'super_admin',
  entity: null,
  entities: [],
  coins: [],
  provinces: [],
  municipalities: [],
  loading: false,
  accessToken: ls.get('accessToken') ? ls.get('accessToken') : null,
  idToken: ls.get('idToken') ? ls.get('idToken') : null,
  refreshToken: ls.get('refreshToken') ? ls.get('refreshToken') : null,
}

export const mutations = {
  setImage: (state, image) => (state.image = image),
  setRole: (state, role) => (state.role = role),
  setEntity: (state, entity) => (state.entity = entity),
  setProvinces: (state, provinces) => (state.provinces = provinces),
  setMunicipalities: (state, municipalities) =>
    (state.municipalities = municipalities),
  setCoins: (state, coins) => {
    state.coins = coins
  },
  setEntities: (state, entities) => (state.entities = entities),
  toggleDrawer: (state) => (state.drawer = !state.drawer),
  setLoading: (state, loading) => (state.loading = loading),
  setAccessToken(state, data) {
    state.accessToken = data
  },
  clearAccessToken(state) {
    state.accessToken = null
  },
  setIdToken(state, data) {
    state.idToken = data
  },

  clearIdToken(state) {
    state.idToken = null
  },
  setRefreshToken(state, data) {
    state.refreshToken = data
  },
  clearRefreshToken(state) {
    state.refreshToken = null
  },
}

export const actions = {
  setTokens({ commit }, tokens) {
    const encodedAccessToken = btoa(tokens.accessToken)
    const encodedIdToken = btoa(tokens.idToken)
    const encodedRefreshToken = btoa(tokens.refreshToken)
    // Set tokens in store
    commit('setAccessToken', encodedAccessToken)
    commit('setIdToken', encodedIdToken)
    commit('setRefreshToken', encodedRefreshToken)
    // Set tokens in cookies

    ls.set('accessToken', encodedAccessToken)
    ls.set('idToken', encodedIdToken)
    ls.set('refreshToken', encodedRefreshToken)

    document.cookie = `accessToken=${encodedAccessToken}`
    document.cookie = `idToken=${encodedIdToken}`
    document.cookie = `refreshToken=${encodedRefreshToken}`
  },
}
