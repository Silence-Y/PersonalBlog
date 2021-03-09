<template>
  <div>
    <div id="comment">
      <h1>留言板</h1>
      <p>
        欢迎大家给我留言
        <br />
        <br />友链只交换技术类个人博客
        <br />
      </p>
    </div>
    <!-- 评论 -->
    <Comment></Comment>
  </div>
</template>

<script>
import Right from "../../components/front/right";
import Comment from "../../components/front/comment";
export default {
  components: {
    Right,
    Comment,
  },
};
</script>

<style>
#comment {
  width: 100%;
  background: white;
  height: 260px;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
}

#comment h1 {
  text-align: center;
  font-size: 36px;
  padding-top: 30px;
}

#comment h1::after {
  width: 70px;
  display: block;
  height: 2px;
  margin: 10px auto;
  background-color: #009688;
  content: "";
}

#comment p {
  padding: 20px 50px 20px 50px;
}

@media (max-width: 768px) {
  #comment h1 {
    font-size: 28px;
  }
}
</style>