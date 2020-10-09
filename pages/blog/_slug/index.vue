<template>
  <div v-html="posts[$route.params.slug]"></div>

</template>

<script>
  import LastTrip from '@/assets/md/last-trip.md'
  import diary from '@/assets/md/diary.md'
    export default {
        name: "index",
        data(){
            return{
                posts:{
                    diary: diary,
                    LastTrip: LastTrip,
                }
            }
        }

    }
</script>

<style scoped>

</style>
