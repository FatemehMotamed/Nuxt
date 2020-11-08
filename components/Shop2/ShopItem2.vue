<template>
  <div class="Item">
    <img :src="item.imageSrc" :alt="item.name" class="ItemImage">
    <div class="ItemDetails">
      <p>
        <strong>{{item.name}}</strong>
      </p>
      <p>
        Price:
        <strong>${{item.price}}</strong>
      </p>
    </div>

    <!-- Button component -->
    <shop-button-add2 :item="item">
      <p>Add To Cart</p>
    </shop-button-add2>
  </div>
</template>

<script>
import ShopButtonAdd2 from '@/components/Shop2/ShopButtonAdd2'

export default {
  name: "ShopItem2",
  components: { ShopButtonAdd2:ShopButtonAdd2 },
  props: ["item"],
  data() {
    return {};
  },

  methods: {
    addToCart(item) {
      this.$emit("update-cart", item);
    }
  }
};
</script>

<style>
</style>
