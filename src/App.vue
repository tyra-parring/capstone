<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <NavbarComp/>
    <router-view/>
  <FooterComp/>
</template>

<script>
import {NavbarComp} from './components/NavbarComp.vue'
import {FooterComp} from './components/FooterComp.vue'

export default({
  components: {
    NavbarComp: NavbarComp,
    FooterComp: FooterComp,
  }
})
</script>


<style>

</style>
