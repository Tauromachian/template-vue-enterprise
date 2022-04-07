export const state = {
  theme: 'light',
  themes: {
    light: {
      primary: '#42a5f6',
      secondary: '#050b1f',
      accent: '#204165',
    },
    dark: {
      primary: '#000000',
      secondary: '#14213d',
      accent: '#e5e5e5',
    },
  },
  drawer: null,
  color: 'white',
  title: 'IPF',
  iconColor: 'blue',
  role: 'super_admin',
  entity: null,
  isScreenSmall: false,
  entities: [],
  coins: [],
  provinces: [],
  municipalities: [],
  loading: false,
  from: '',
  preReservateData: [],
  serviceDetails: null,
}

export const mutations = {
  setDrawer: (state, drawer) => (state.drawer = drawer),
  setTheme: (state, theme) => {
    state.theme = theme
    localStorage.setItem('theme', theme)
  },
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
  setColor: (state, color) => (state.color = color),
  toggleDrawer: (state) => (state.drawer = !state.drawer),
  setTitle: (state, title) => (state.title = title),
  setIconColor: (state, iconColor) => (state.iconColor = iconColor),
  setIsScreenSmall: (state, isScreenSmall) => {
    state.isScreenSmall = isScreenSmall
  },
  setLoading: (state, loading) => (state.loading = loading),
  setFrom: (state, from) => (state.from = from),
  setPreReservateData: (state, preReservateData) =>
    (state.preReservateData = preReservateData),
  setServiceDetails: (state, serviceDetails) =>
    (state.serviceDetails = serviceDetails),
}
