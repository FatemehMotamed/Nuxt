<template>
    <div class="Cart">
        <p>Cart: {{this.cart.length}} items</p>
        <!-- Button component -->
        <shop-button-empty
                @emit-empty-cart="emitEmptyCart">
            <p>Empty Cart</p>
        </shop-button-empty>
        <p>Total: ${{this.total}}</p>
    </div>
</template>

<script>
import ShopButtonEmpty from '@/components/Shop/ShopButtonEmpty'

    export default {
        name: 'ShopCart',
        components: {ShopButtonEmpty:ShopButtonEmpty},
        props: ['cart', 'total'],
        data() {
            return {}
        },
        methods: {
            emitEmptyCart() {
                this.$emit('empty-cart')
            }
        }
    }
</script>

<style>

</style>
