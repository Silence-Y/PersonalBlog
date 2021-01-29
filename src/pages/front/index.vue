<template>
  <div class="wrapper">
    <Header></Header>
    <!-- <Header></Header> -->
    <!-- <div class="content">
      <div class="content_left">
        <router-view></router-view>
      </div>
      <div class="content_right">
        <Right></Right>
      </div>
    </div>-->

    <div class="content">
      <el-row :gutter="30" class="el-row">
        <el-col :span="18" class="left-content">
          <router-view></router-view>
        </el-col>

        <el-col :span="6" class="right-content">
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

