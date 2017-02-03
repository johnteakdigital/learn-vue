<template>
    <div class="component">
        <h3>You may view the User Details here</h3>
        <p>Many Details</p>
        <p>User Name: {{ name }}</p>
        <p>User Age: {{ userAge }}</p>
        <button @click="resetName" type="button">Reset Name</button>
    </div>
</template>

<script>
  import { eventBus } from '../main'
  
  export default {
    props: {
      name: {
        type: String, //validate props
        required: true
      },
      userAge: Number
    },
    methods: {
      switchName() {
        return this.name.split('').reverse().join('')
      },
      resetName() {
        this.name = 'Johnee';
        this.$emit('nameWasReset', this.name); // Method that emits custom event
      }
    },
    created() {
      eventBus.$on('ageChange', (age) => {
        this.userAge = age
      }) //listens to data stored in eventBus
    }
  }
</script>

<style scoped>
    div {
        background-color: lightcoral;
    }
</style>
