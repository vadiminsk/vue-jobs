<template>
  <section>
    <h1><span :class="actionClasses">{{ action }}</span><br> for everyone</h1>
    <h2>Find your next job at Bobo Corp</h2>
  </section>
</template>

<script>
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
        build: this.action === 'Build',
        create: this.action === 'Create',
        design: this.action === 'Design',
        code: this.action === 'Code'
      }
    }
  },
  methods: {
    changeTitle() {
      this.interval = setInterval(() => {
        const actions = ["Build", "Create", "Design", "Code"]
        const currentActionIndex = actions.indexOf(this.action)
        const nextActionIndex = (currentActionIndex + 1) % actions.length
        const nextAction = actions[nextActionIndex]
        this.action = nextAction
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