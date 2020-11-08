<template>
    <div>
      <input type="text" v-model="userId">
      <input type="button" value="send" v-on:click="onLoadUser()" >
      <nuxt-child></nuxt-child>
    </div>

</template>

<script>
    export default {
        name: "users",
        data() {
        return {
            userId: '',
        }
    },

    methods: {
        onLoadUser() {
            this.$router.push("/users/" + this.userId)
        },

    }
    }
</script>

<style scoped>

</style>
