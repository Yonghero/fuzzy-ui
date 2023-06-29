import { createApp } from 'vue'
import './style.css'
import './tailwind.css'
import App from './App.vue'

import { YHButton } from '../../packages/components/button'
import { YHButtonGroup } from '../../packages/components/button-group'

console.log('YHButtonGroup: ', YHButtonGroup);


createApp(App).use(YHButton).use(YHButtonGroup).mount('#app')
