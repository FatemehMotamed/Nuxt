<template>
  <div class="Cart">
    <p>Cart: {{this.cart.length}} items</p>
    <!-- Button component -->
    <shop-button-empty2>
      <p>Empty Cart</p>
    </shop-button-empty2>
    <p>Total: ${{this.total}}</p>
  </div>
</template>

<script>
import ShopButtonEmpty2 from '@/components/Shop2/ShopButtonEmpty2'

export default {
  name: "ShopCart2",
  components: { ShopButtonEmpty2:ShopButtonEmpty2 },
  props: ["cart", "total"],
  data() {
    return {};
  }
};
</script>

<style>
</style>
