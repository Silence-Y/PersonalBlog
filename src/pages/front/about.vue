<template>
  <div id="about">
    <h1>关于</h1>
    <p>
      博主Silence.Y
      我的书单：https://book.douban.com/people/58553308/
      我的知乎：https://www.zhihu.com/people/zheng-xiao-93-51/activities
    </p>
  </div>
  <!-- 评论 -->
  <!-- <Comment></Comment> -->
</template>

<script>
import Right from "../../components/front/right";
import Comment from "../../components/front/comment";
export default {
  components: {
    Right,
    Comment
  }
};
</script>

<style scoped>
@import "../../assets/css/front/about.css";
</style>