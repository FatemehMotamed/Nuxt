<template>
  <button class="Button" @click="buttonClicked">
    <slot></slot>
  </button>
</template>

<script>
import EventBus from "@/assets/vendor/eventBus";

export default {
  name: "ShopButtonEmpty2",
  components: {},
  data() {
    return {};
  },
  methods: {
    buttonClicked() {
      EventBus.$emit("emit-empty-cart");
    }
  }
};
</script>

<style>
</style>
