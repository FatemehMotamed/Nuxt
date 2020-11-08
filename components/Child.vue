<template>
  <div class="counter-block">
    <h3>Child Component</h3>

    <h3>{{ childCounter }}</h3>
    <button @click="increase">Increase Me</button>
    <button @click="callDecreaseMethodInParent">Call Decrease Method In Parent</button>
  </div>
</template>

<script>
export default {

  props: {
    childCounter: Number
  },
  data() {
    return {};
  },
  methods: {

    increase() {
      this.childCounter++;
    },

    callDecreaseMethodInParent() {
      this.$emit("callDecreaseParent");
    }
  }
};
</script>

