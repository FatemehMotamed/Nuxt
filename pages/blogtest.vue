<template>
    <div>
        <blogtest_preview
          id="1"
          preview-text="hello welcom to my weblog"
          title="post1"
          thumnail="https://www.techiexpert.com/wp-content/uploads/2020/07/How-Technology-Is-Improving-the-Future-1.jpg"></blogtest_preview>

      <blogtest_preview
          id="2"
          preview-text="hi"
          title="post2"
          thumnail="https://www.techiexpert.com/wp-content/uploads/2020/07/How-Technology-Is-Improving-the-Future-1.jpg"></blogtest_preview>

    </div>
</template>

<script>
  import blogtest_preview from "../components/blogtest_preview";
    export default {
        name: "blogtest",
        layout: "landing",
        components: {
            blogtest_preview:blogtest_preview,
        }
    }
</script>

<style scoped>

</style>
