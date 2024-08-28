<template>
  <div class="footer-container">
            &copy; Tyra Parring {{ currentYear }}
  </div>
</template>

<script>
export default {
    name: 'FooterComp',
  computed: {
    currentYear() {
      return new Date().getFullYear();
    }
  }
}
</script>

<style>

</style>