import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { apolloPlugin } from './plugins/apollo'

const app = createApp(App)
app.use(apolloPlugin)

app.mount('#app')
