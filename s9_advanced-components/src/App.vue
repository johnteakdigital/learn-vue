<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
              <button @click="selectedComponent= 'app-quote'">Quote</button>
              <button @click="selectedComponent= 'app-author'">Author</button>
              <button @click="selectedComponent= 'app-new'">New</button>
              <keep-alive>
                <component :is="selectedComponent">
                  {{ selectedComponent }}
                  <p>Default content</p>
                </component>
              </keep-alive>
              <!-- <app-quote>
                <h4 slot="title">My Quote</h4>
                <em slot="quote">{{quote}}</em>
              </app-quote> -->
            </div>
        </div>
    </div>
</template>

<script>
import Quote from './components/Quote.vue'
import Author from './components/Author.vue'
import New from './components/New.vue'

export default {
  data() {
    return {
      quote: 'A dream deferred... or something',
      selectedComponent: 'app-quote'
    }
  },
  components: {
    'app-quote': Quote,
    'app-author': Author,
    'app-new': New
  }
}
</script>

<style scoped>
</style>
