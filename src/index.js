
import Sendcode from './components/sendcode'

import { version } from '../package.json'

const components = [
  Sendcode
]

const install = Vue => {
  components.forEach(Component => {
    Vue.component(Component.name, Component)
  })
};

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export {
  install,
  version,
  Sendcode
}

export default {
  install,
  version
}