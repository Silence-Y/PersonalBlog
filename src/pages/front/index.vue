<template>
  <div class="wrapper">
    <Header></Header>

    <div class="content">
      <el-row :gutter="30" class="el-row">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <router-view></router-view>
        </el-col>


        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
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

