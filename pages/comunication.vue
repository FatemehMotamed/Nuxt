<template>
  <div id="app">

    <parent></parent>
  </div>
</template>

<script>
import Parent from "@/components/Parent.vue";

export default {
  name: "comunication",
  components: {
    parent: Parent
  }
};
</script>
<style>
#app {
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>
