import Vue from 'vue'
import App from './App.vue'

export const serverEvent = new Vue({
  methods: {
    checkStatus(server) {
      this.$emit('serverCheck', server)
      console.log('checking server:', server.id)
    },
    resetStatus(id) {
      this.$emit('serverReset', server)
      console.log('reseting server:', server)
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
