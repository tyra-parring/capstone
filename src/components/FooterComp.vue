<template>
  <div class="footer-container">
            &copy; Tyra Parring {{ date() }}
  </div>
</template>

<script>
export default {
    data() {
        return {}
    },
    methods: {
        date() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style>

</style>