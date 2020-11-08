<template>
    <div class="Item">

        <img :src="item.imageSrc" :alt="item.name" class="ItemImage">
        <div class="ItemDetails">
            <p><strong>{{item.name}}</strong></p>
            <p>Price: <strong>${{item.price}}</strong></p>
        </div>

        <!-- Button component -->
        <shop-button-add
                @button-clicked="addToCart(item)"
                :item="item">
            <p>Add To Cart</p>
        </shop-button-add>

    </div>
</template>

<script>
import ShopButtonAdd from '@/components/Shop/ShopButtonAdd'

    export default {
        name: 'ShopItem',
        components: { ShopButtonAdd:ShopButtonAdd },
        props: ['item'],
        data() {
            return {}
        },

        methods: {
            addToCart(item) {
                this.$emit('update-cart', item)
            }
        }
    }
</script>

<style>

</style>
