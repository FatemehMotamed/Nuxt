<template>
  <button class="Button" @click="buttonClicked">
    <slot></slot>
  </button>
</template>

<script>
import EventBus from "@/assets/vendor/eventBus";

export default {
  name: "ShopButtonAdd2",
  components: {},
  props: ["item"],
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      EventBus.$emit("shop-button-clicked", this.item);
    }
  }
};
</script>

<style>
</style>
