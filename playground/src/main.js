import { createApp } from 'vue'
import FuzzyUI from '@hitotek/fuzzy-ui/components'

import './tailwind.css'
import './style.scss'
import ClickOutside from '@hitotek/fuzzy-ui-utils/directives/click-outside/index'
import App from './App.vue'

const app = createApp(App)
app.directive('click-outside', ClickOutside)
app.use(FuzzyUI).mount('#app')
