<template>
  <button @click="btnClick" >
    add
  </button>
</template>

<script>
  import EventBus from "@/assets/vendor/eventBus";
    export default {
        name: "MyBtnAdd2",
        props:['item'],
        methods:{
            btnClick(){
                EventBus.$emit("btn-click", this.item)
            }
        }
    }
</script>

<style scoped>

</style>
