import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import NavbarComp from './components/NavbarComp.vue'
import FooterComp from './components/FooterComp.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.js'
import '../styles.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUser, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import Toast from 'vue3-toastify';
import 'vue3-toastify/dist/index.css'

library.add(faUser, faShoppingCart)

createApp(App).use(store)
.use(router).component('NavbarComp', NavbarComp)
.component('FooterComp', FooterComp)
.component('font-awesome-icon', FontAwesomeIcon)
.use(Toast, {
    position: 'top-right',
    timeout: 3000,
  })
.mount('#app')


