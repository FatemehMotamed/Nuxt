<template>
    <div>
      <h1>USER ID: {{ $route.params.id }}</h1>
    </div>
</template>

<script>
    export default {
        name: "index",
        validate(data){
            return /^\d$/.test(data.params.id)
        }
    }
</script>

<style scoped>

</style>
