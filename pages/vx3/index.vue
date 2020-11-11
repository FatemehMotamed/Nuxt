<template>
    <div>
      Done count
      <h1>{{ donetodosCount }}</h1>
      <p v-for="(todo,index) in todos" :style="{ textDecoration :  todo.done==true ? 'line-through':'' }" @click="togleTodo(index)">{{ todo.text }}</p>
    </div>
</template>

<script>
  import{ mapGetters, mapState, mapMutations } from 'vuex'
    export default {
        name: "index",
        data(){
          return{
              num:10
          }
        },
      computed: {
          ...mapGetters(['donetodos',"donetodosCount"]),
          ...mapState(['todos'])
      },
      methods:{
            // togleTodo(index){
            //     this.$store.commit('togleTodo', index)
            // }
          ...mapMutations(['togleTodo'])

      }
    }

</script>

<style scoped>

</style>
