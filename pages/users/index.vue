<template>
  <div>
    <input type="text" v-model="userId">
    <input type="button" value="send" v-on:click="onLoadUser()" >
  </div>

</template>

<script>


export default {
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
