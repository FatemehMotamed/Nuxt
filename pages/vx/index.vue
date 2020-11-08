<template>
    <div>
      {{ count }}
      {{ count2 }}
      {{ count3 }}
      <h1 v-for="todo in donetodos">{{ todo.text }}</h1>

    </div>
</template>

<script>
  import{mapState} from 'vuex'
    export default {
        name: "index",
        data(){
          return{
              num:10
          }
        },
      // computed:{
      //         count(){
      //       return this.$store.state.count
      //   }
      // },
      // computed:mapState(['count']),
      computed: mapState(
          {   count:state => { return state.count },
              count2: 'count',
              count3(state){ return this.num+state.count},
              donetodos(state){ return state.todos.filter(todo => todo.done)}

          }
      )
    }

</script>

<style scoped>

</style>
