<template>
  <div class="wrapper">
    <!-- 头部 -->
    <Header></Header>

    <!-- 中间内容 -->
    <div class="content">
      <el-row :gutter="30">
        <!-- 左侧内容 -->
        <el-col :span="18">
          <router-view></router-view>
        </el-col>

        <!-- 右侧内容 -->
        <el-col :span="6">
          <Right></Right>
        </el-col>
      </el-row>
    </div>

    <!-- 底部 -->
    <!-- <footer></footer> -->
  </div>
</template>

<script>
import Header from "../../components/front/header";
import Right from "../../components/front/right";
export default {
  data() {
    return {};
  },
  components: {
    Header,
    Right
  }
};
</script>

<style scoped >
@import "../../assets/css/front/base.css";
</style>

