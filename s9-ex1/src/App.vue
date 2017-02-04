<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="cmp = 'app-blue'">Load Blue Template</button>
                <button class="btn btn-success" @click="cmp = 'app-green'">Load Green Template</button>
                <button class="btn btn-danger" @click="cmp = 'app-red'">Load Red Template</button>
                <hr>
                <!-- <app-blue><p>component: {{cmp}}</p></app-blue> -->
                <component :is="cmp">
                  <p>component: {{cmp}}</p>
                </component>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
      data() {
        return {
          cmp: 'app-blue'
        }
      },
      components: {
          appBlue: Blue,
          appGreen: Green,
          appRed: Red
      }
    }
</script>

<style>
</style>
