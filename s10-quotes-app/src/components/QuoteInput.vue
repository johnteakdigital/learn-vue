<template>
  <div class="quoteInput">
    <h5>Quote</h5>
    <textarea v-model="newQuote" class="form-control"></textarea>
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
      this.$emit('quoteAdded', newQuote)
      this.newQuote = ''
    },
    updateInfo(info) {
      this.$emit('infoUpdate', info)
    }
  }
}
</script>

<style></style>
