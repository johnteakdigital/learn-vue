<template>
  <div class="quoteRepo">
    <div class="row container">
      <div v-for="(quote, index) in quotes" @click="deleteQuote(index)" class="panel panel-default col-md-3">
        <div class="panel-body">
          {{quote}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['quotes'],
  methods: {
    deleteQuote(index) {
      this.$emit('quoteDeleted', index);
    }
  }
}
</script>

<style></style>
