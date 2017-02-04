<template>
  <div>
    <slot name="title"></slot>
    <hr>
    <slot></slot>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  div {
    border: 1px solid #ccc;
    box-shadow: 1px 1px 2px #444;
    padding: 30px;
    margin: 30px auto;
  }
</style>
