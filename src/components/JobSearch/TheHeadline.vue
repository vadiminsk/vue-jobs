<template>
  <section class="mb-16">
    <h1 class="mb-14 text-8xl font-bold tracking-tighter">
      <span :class="actionClasses">{{ action }}</span>
      <br>
      for everyone
    </h1>
    <h2 class="text-3xl font-light">Find your next job at Bobo Corp</h2>
  </section>
</template>

<script>
import nextElementList from '@/utils/nextElementList'
export default {
  name: "TheHeadline",
  data() {
    return {
      action: 'Build',
      interval: null
    }
  },
  created() {
    this.changeTitle()
  },
  beforeUnmount() {
    cleatInterval(this.interval)
  },
  computed:{
    actionClasses() {
      return {
        [this.action.toLowerCase()]: true
      }
    }
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"]
        this.action = nextElementList(actions,this.action)
      }, 3000);
    }
  }
}
</script>

<style scoped>
.build {
  color: blue;
}

.create {
  color: green;
}

.design {
  color: orange;
}

.code {
  color: red;
}
</style>