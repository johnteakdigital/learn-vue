<template>
  <div>
    <p>Server Status: {{status}}</p>
    <hr>
    <button @click="changeStatus" type="button">Change Status</button>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      status: 'Critical'
    }
  },
  methods: {
    changeStatus() {
      this.status = 'Normal'
    }
  }
}

</script>
