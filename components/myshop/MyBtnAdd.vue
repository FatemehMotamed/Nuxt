<template>
  <button @click="btnClick" >
    add
  </button>
</template>

<script>
    export default {
        name: "MyBtnAdd",
        methods:{
            btnClick(){
                this.$emit("btn-click")
            }
        }
    }
</script>

<style scoped>

</style>
