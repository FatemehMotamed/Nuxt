<template>
    <div>
      Done count
      <h1>{{ donetodosCount }}</h1>
      <p v-for="(todo,index) in todos" :style="{ textDecoration :  todo.done==true ? 'line-through':'' }" @click="togleTodo(index)">{{ todo.text }}</p>
    </div>
</template>

<script>
  import{ mapGetters, mapState, mapActions } from 'vuex'
  import store from '@/Store'
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
            togleTodo(index){
                store.dispatch('done',index)
            }

          // ...mapActions('togleTodo', 'done')

      }
    }

</script>

<style scoped>

</style>
