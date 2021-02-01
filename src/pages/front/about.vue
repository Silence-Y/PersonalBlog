<template>
  <div id="about">
    <div class="ab_content">
      <h1>关于</h1>
      <p>
        前端小白一枚，自学前端一年了，欢迎大家一起交流学习
      </p>
      <a href="https://blog.csdn.net/Silence_555"
        >CSDN地址：https://blog.csdn.net/Silence_555</a
      >
      <a href="https://github.com/Silence-Y"
        >github地址：https://github.com/Silence-Y</a
      >
    </div>
  </div>
  <!-- 评论 -->
  <!-- <Comment></Comment> -->
</template>

<script>
import Comment from "../../components/front/comment";
export default {
  components: {
    Comment
  }
};
</script>

<style scoped>
@import "../../assets/css/front/about.css";
</style>