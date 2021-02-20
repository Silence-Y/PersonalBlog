<template>
  <div id="about">
    <div class="ab_content">
      <h1>关于</h1>
      <p>前端小白一枚，自学前端一年了，欢迎大家一起交流学习</p>
      <ul>
        <li></li>
        <li>
          CSDN：
          <a href="https://blog.csdn.net/Silence_555">CSDN</a>
        </li>
        <li>
          github：
          <a href="https://github.com/Silence-Y">github</a>
        </li>
      </ul>
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