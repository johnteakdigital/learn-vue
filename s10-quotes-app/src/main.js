import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: {
    deleteQuote() {
      this.$emit('quoteDeleted')
    }
  }
})

new Vue({
  el: '#app',
  render: h => h(App)
})
