<template>
    <div>
      <h1 v-for="todo in donetodos">{{ todo.text }}</h1>
      lenght
      <h1>{{ donetodosCount }}</h1>

    </div>
</template>

<script>
  import{ mapGetters } from 'vuex'
    export default {
        name: "index",
        data(){
          return{
              num:10
          }
        },
      computed: {
          ...mapGetters(['donetodos',"donetodosCount"]),
      }
    }

</script>

<style scoped>

</style>
