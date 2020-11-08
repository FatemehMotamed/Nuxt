<template>
  <div class="Item">

        <img :src="item.imageSrc" :alt="item.name" width="30" height="30">
        <div class="ItemDetails">
            <p><strong>{{item.name}}</strong></p>
            <p>Price: <strong>${{item.price}}</strong></p>
        </div>

<!--        <button @click="addchild(item)">add</button>-->
            <my-btn-add2 :item="item"></my-btn-add2>
    </div>
</template>

<script>
    import MyBtnAdd2 from "@/components/myshop2/MyBtnAdd2";
    import EventBus from "@/assets/vendor/eventBus";
    import eventBus from "../../assets/vendor/eventBus";
    export default {
        name: "MyShopItem2",
        components: {MyBtnAdd2:MyBtnAdd2},
        props:['item'],
        methods:{
            // addchild(item){
            //      EventBus.$emit("btn-click", this.item)
            // }
        }
    }
</script>

<style scoped>

</style>
