import { createApp, App as AppInstance } from 'vue'
import {  Router } from 'vue-router'
import App from './App.vue'
import route from './router'

let app: AppInstance | null = null
let router: Router | null = null
function mount () {
  router = route

  app = createApp(App)
  app.use(router)
  app.mount('#vite-app')

  console.log('微应用child-vite渲染了')
}




mount()

