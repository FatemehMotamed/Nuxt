export const state= () =>({
  count:1,
  todos:[
    {id:1, text:"job1", done:false},
    {id:2, text:"job2", done:true},
    {id:3, text:"job3", done:true},
    {id:4, text:"job4", done:false},
  ],
});

export const getters = {
  donetodos : state =>{
          return state.todos.filter(todo => todo.done)
    },
  donetodosCount: (state, getters) =>{
    return getters.donetodos.length
  }

};

export const mutations={
    togleTodo(state, index){
        state.todos[index].done = ! state.todos[index].done;
    }
}

export const actions={
  done({ commit }, payload){
      return new Promise((resolve,reject) => {
        setTimeout(
          ()=>{
            commit('togleTodo', payload);
            resolve()
          },2000
        )
      })
  }
}
