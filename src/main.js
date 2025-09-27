import './main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// console.log(import.meta.env.VITE_SUPABASE_URL)
// console.log(import.meta.env.VITE_SUPABASE_API_KEY)

// database password: sharifabdullaev