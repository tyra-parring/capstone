<template>
  <div>
        <footer>
            &copy; Tyra Parring {{ date() }}
        </footer>
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