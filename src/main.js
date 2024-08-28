import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'

createApp(App).use(store).use(router).component('NavbarComp', NavbarComp)
.component('FooterComp', FooterComp).mount('#app')
