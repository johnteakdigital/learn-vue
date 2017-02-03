<template>
    <div class="col-xs-12 col-sm-6">
        <ul class="list-group">
          <template v-for="server in servers">
            <li @click="checkStatus(server)" class="list-group-item">
                Server #{{ server.id }}
            </li>
          </template>
        </ul>
    </div>
</template>

<script>
import { serverEvent } from '../../main'

export default {
  props: ['servers'],
  methods: {
    checkStatus(server){
      serverEvent.checkStatus(server)
    }
  }
}
</script>

<style scoped>
.list-group-item:hover { cursor: pointer }
</style>
