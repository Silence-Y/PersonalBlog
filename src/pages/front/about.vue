<template>
  <div class="content">
    <!-- 左侧内容 -->
    <div class="content_left">
      <div class="about">
        <h1>关于我</h1>
        <br />
        <br />
        <p>
          博主Silence.Y
          <br />
          <br />我的书单：https://book.douban.com/people/58553308/
          <br />我的知乎：https://www.zhihu.com/people/zheng-xiao-93-51/activities
        </p>
        <br />
      </div>
      <!-- 评论 -->
      <Comment></Comment>
    </div>

    <!-- 右侧内容 -->
    <Right></Right>
  </div>
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