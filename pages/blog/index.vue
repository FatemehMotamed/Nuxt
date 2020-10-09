<template>
  <div>
    <div v-for="(title,slug) in posts_title">
      <h1>
        <nuxt-link :to="'/blog/'+slug">{{ title }}</nuxt-link>
      </h1>
    </div>
  </div>

</template>

<script>
    export default {
        name: "index",
        data(){
            return{
                posts_title:{
                    diary:'diary',
                    LastTrip:'LastTrip',
                }

            }
        }
    }
</script>

<style scoped>

</style>
