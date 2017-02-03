<template>
    <div class="container">
        <app-header></app-header>
        <hr>
        <div class="row">
            <servers :servers="servers"></servers>
            <app-server-details></app-server-details>
        </div>
        <hr>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';
    import Servers from './components/Server/Servers.vue';
    import ServerDetails from './components/Server/ServerDetails.vue';

    export default {
      data() {
        return {
          servers: [
            { id: 1, status: 'normal' },
            { id: 2, status: 'critical' },
            { id: 3, status: 'normal' },
            { id: 4, status: 'normal' },
            { id: 5, status: 'unknown' }
          ]
        }
      },
      components: {
          appHeader: Header,
          Servers,
          'app-server-details': ServerDetails,
          'app-footer': Footer
      }
    }
</script>

<style>

</style>
