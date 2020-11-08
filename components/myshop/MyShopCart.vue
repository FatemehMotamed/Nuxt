<template>
  <div class="Cart">
        <p>Cart: {{ this.cart.length }}  items</p>

        <button @click="">Empty Cart</button>
        <p>Total: </p>
    </div>

</template>

<script>
    export default {
        name: "MyShopCart",
        props:['cart','total']
    }
</script>

<style scoped>

</style>
