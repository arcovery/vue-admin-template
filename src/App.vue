<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'App',
  mounted() {
    this.getAPI()
  },
  methods: {
    async getAPI () {
      const res = await axios('http://geek.itheima.net/v1_0/channels')
      console.log(res)
    }
  }
}
</script>
