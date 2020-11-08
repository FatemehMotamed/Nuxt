<template>
  <div class="container">
    <div class="parent-block">
      <h2>Parent Component</h2>

      <h1>{{ parentCounter }}</h1>
      <button @click="increase" class="btn btn-danger">Increase Parent</button>
    </div>
    <div class="child">

      <Child :childCounter="parentCounter" @callDecreaseParent="decreaseParent"/>
    </div>
  </div>
</template>

<script>

import Child from "./Child.vue";

export default {

  data() {
    return {
      parentCounter: 0
    };
  },
  components: {
    Child
  },
  methods: {

    increase() {
      this.parentCounter++;
    },
    decreaseParent() {
      this.parentCounter--;
    }
  }
};
</script>

<style>
.parent-block,
.child {
  text-align: center;
  margin: 20px;
  padding: 20px;
  border: 2px gray solid;
}
</style>


