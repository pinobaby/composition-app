import './assets/main.css'
import { createApp } from 'vue'
import { VueQueryPlugin } from '@tanstack/vue-query'

import App from './App.vue'
import router from './router'
import store from './store/store'

store.startLoadingPokemons()

const app = createApp(App)

VueQueryPlugin.install(app, {
  queryClientConfig: {
    defaultOptions: {
      queries: {
        gcTime: 1000 * 120,
        refetchOnReconnect: 'always'
      }
    }
  }
})

app.use(router)

app.mount('#app')
