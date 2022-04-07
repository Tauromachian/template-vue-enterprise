// https://vuex.vuejs.org/en/modules.html

const requireContext = require.context('.', false, /.*\.js$/)

const modules = requireContext
  .keys()
  .map((file) => {
    console.log(file)
    if (file.name === 'index.js') return
    return [file.replace(/(^.\/)|(\.js$)/g, ''), requireContext(file)]
  })
  .reduce((modules, [name, module]) => {
    if (module.namespaced === undefined) {
      module.namespaced = true
    }

    return { ...modules, [name]: module }
  }, {})

export default modules
