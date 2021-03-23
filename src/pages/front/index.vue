<template>
  <div class="wrapper">
    <Header :data="tagList"></Header>

    <div class="content">
      <el-row :gutter="30" class="el-row">
        <el-col :xs="24" :sm="24" :md="18" :lg="18" :xl="18">
          <router-view :key="$route.fullPath"></router-view>
        </el-col>

        <el-col :xs="24" :sm="24" :md="6" :lg="6" :xl="6">
          <Right :data="tagList"></Right>
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
    return {
      tagList: [],
    };
  },
  components: {
    Header,
    Right,
  },
  created() {
    this.getTag();
  },
  methods: {
    getTag() {
      this.$http.get("/api/tag").then((res) => {
        // console.log(res.data.data.datas);
        this.tagList = res.data.data.datas;
      });
    },
  },
};
</script>

<style scoped >
@import "../../assets/css/front/base.css";
</style>

