<template>
  <div>
    <SpinnerComp v-if="showSpinner"/>
    <div v-else>
      <NavbarComp/>
        <router-view/>
      <FooterComp/>
    </div>
  </div>
</template>

<script>
import {NavbarComp} from './components/NavbarComp.vue'
import {FooterComp} from './components/FooterComp.vue'
import {SpinnerComp} from './components/SpinnerComp.vue'

export default{
  components: {
    NavbarComp,
    FooterComp,
    SpinnerComp,
  },
  // data() {
  //   return {
  //     isLoading: false
  //   }
  // },
  // beforeRouteEnter(to, from, next) {
  //   this.isLoading = true
  //   next()
  // },
  // beforeRouteUpdate(to, from, next) {
  //   this.isLoading = true
  //   next()
  // },
  // beforeRouteLeave(to, from, next) {
  //   this.isLoading = false
  //   next()
  // },
  data() {
    return {
      showSpinner: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.showSpinner = false
    }, 2000)
  },
  watch: {
    $route() {
      window.scrollTo(0, 0);
    }
  }
}
</script>


<style>

</style>
