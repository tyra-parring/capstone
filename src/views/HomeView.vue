<template>
  <div>
    <NavbarComp/>
      <h1>HI</h1>

    <FooterComp/>
  </div>
</template>

<script>
import {NavbarComp} from '@/components/NavbarComp.vue'
import {FooterComp} from '@/components/FooterComp.vue'

export default {
  name: 'HomeView',
  components: {
    NavbarComp,
    FooterComp
  }
}
</script>
