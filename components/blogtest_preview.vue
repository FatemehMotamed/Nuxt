<template>
  <div>
    <nuxt-link :to="'/blogTest/'+id">
      <div :style="{backgroundImage: 'url('+thumnail+')'}">
        <h1>{{ title }}</h1>
      </div>

      <div>{{ previewText }}</div>

    </nuxt-link>

  </div>

</template>

<script>
    export default {
        name: "blogtest_preview",
        props:{
            id:{
                type: String,
                required: true,
            },
            title:{
                type: String,
                required: true,
            },
            previewText:{
                type: String,
                required: true,
            },
            thumnail:{
                type: String,
                required: true,
            },

        }
    }
</script>

<style scoped>

</style>
