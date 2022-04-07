// Automatically loads and bootstraps files
// in the "./src/components/base" folder.

// Imports
import Vue from 'vue'
import upperFirst from 'lodash/upperFirst'
import camelCase from 'lodash/camelCase'

const baseComponents = require.context('@/components/base', true, /\.vue$/)
const appComponent = require.context('@/components/app', true, /\.vue$/)

for (const file of baseComponents.keys()) {
  const componentConfig = baseComponents(file)
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(name))

  Vue.component(
    `Base${componentName}`,
    componentConfig.default || componentConfig
  )
}

for (const file of appComponent.keys()) {
  const componentConfig = appComponent(file)
  const name = file
    .replace(/index.js/, '')
    .replace(/^\.\//, '')
    .replace(/\.\w+$/, '')
  const componentName = upperFirst(camelCase(name))

  Vue.component(
    `App${componentName}`,
    componentConfig.default || componentConfig
  )
}
