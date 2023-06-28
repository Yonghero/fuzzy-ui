import { createApp } from 'vue'
import './style.css'
import './tailwind.css'
import App from './App.vue'

import { YHButton } from '../../packages/components'
console.log('YHButton: ', YHButton);


createApp(App).use(YHButton).mount('#app')
