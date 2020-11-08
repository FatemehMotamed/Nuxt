<template>
  <div class="Item">

        <img :src="item.imageSrc" :alt="item.name" width="30" height="30">
        <div class="ItemDetails">
            <p><strong>{{item.name}}</strong></p>
            <p>Price: <strong>${{item.price}}</strong></p>
        </div>

<!--        <button @click="addchild(item)">add</button>-->
            <my-btn-add @btn-click="addchild(item)" ></my-btn-add>
    </div>
</template>

<script>
    import MyBtnAdd from "@/components/myshop/MyBtnAdd";
    export default {
        name: "MyShopItem",
        components: {MyBtnAdd:MyBtnAdd},
        props:['item'],
        methods:{
            addchild(item){
                this.$emit("update-cart",item)
            }
        }
    }
</script>

<style scoped>

</style>
