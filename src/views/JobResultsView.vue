<template>
  <h1 class="text-6xl font-bold">Job Results page</h1>
  <button @click="goToHome">Go to Home</button>
</template>

<script>
export default {
  name: 'JobResultsView',
  methods: {
    goToHome() {
        this.$router.push('/')
    }
  }
}
</script>