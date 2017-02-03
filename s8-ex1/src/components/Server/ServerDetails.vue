<template>
    <div class="col-xs-12 col-sm-6">
      <h4 v-if="!server">Please select a server</h4>
      <template v-else>
        <h4>Server Id: {{server.id}}</h4>
        <h5>Status: {{server.status}}</h5>
        <button @click="resetStatus(server)" v-if="server.status!='normal'">Manual Reset</button>
      </template>
    </div>
</template>

<script>
import { serverEvent } from '../../main'

export default {
  data() {
    return { server: null }
  },
  methods: {
    resetStatus() {
      this.server.status = 'normal'
    }
  },
  created() {
    serverEvent.$on('serverCheck', (server) => {
      this.server = server
    })
  }
}
</script>

<style>

</style>
