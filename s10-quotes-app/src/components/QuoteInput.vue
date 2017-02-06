<template>
  <div class="quoteInput">
    <h5>Quote</h5>
    <input type="text" @keydown.enter="addQuote(newQuote)" v-model="newQuote" class="form-control">
    <button @click="addQuote(newQuote)" class="btn btn-primary">Add Quote</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newQuote: '',
      info: ''
    }
  },
  props: {
    'quotes': Array
  },
  methods: {
    addQuote(newQuote) {
      this.$emit('quoteAdded', newQuote.trim())
      this.newQuote = ''
    },
    updateInfo(info) {
      this.$emit('infoUpdate', info)
    }
  }
}
</script>

<style></style>
