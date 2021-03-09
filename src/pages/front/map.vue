<template>
  <div id="map">
    <div class="nav">
      <h1>Silence.Y's 博客</h1>
      <div class="item">
        <i class="el-icon-d-arrow-left"></i>
        <a href="/">博客首页</a>
      </div>
    </div>

    <!-- 文章 -->
    <div class="catalogue">
      <h2>所有文章</h2>
      <ul id="blogs">
        <li v-for="(item, index) of blogList" :key="index">
          <router-link
            :to="{ name: 'blogDetail', params: { id: item.id, index: index } }"
            tag="a"
            >{{ item.title }}</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      blogList: [],
    };
  },
  created() {
    this.getBlogs();
  },
  methods: {
    getBlogs() {
      this.loading = true;
      this.$http.get("/api/blog").then((res) => {
        // console.log(res.data.data.datas);
        const list = res.data.data.datas;
        // console.log(list[0].id);
        // this.blogList = list.reverse();
        this.blogList = res.data.data.datas;
        // this.pageTotal = res.data.data.total;
      });
    },
  },
};
</script>

<style>
#map {
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
}

#map .nav {
  position: relative;
  padding: 0px 20px 10px 20px;
}

#map .nav h1 {
  width: 80%;
  margin: 0 auto;
  text-align: center;
  padding-top: 30px;
  font-size: 36px;
  font-weight: 700;
}

#map .nav h1::after {
  position: absolute;
  width: 150px;
  display: block;
  height: 2px;
  left: 50%;
  margin-left: -75px;
  top: 90px;
  background-color: #009688;
  content: "";
}

#map .nav .item {
  padding: 30px 10px 10px 10px;
  border-bottom: 1px solid #eeeeee;
}

#map a {
  color: #212121;
  text-decoration: none;
}

#map a:hover {
  color: #009688;
}

/* 目录 */
#map .catalogue {
  position: relative;
  margin: 0px auto 40px auto;
  width: 90%;
  padding: 10px 20px 10px 20px;
}

#map .catalogue h2 {
  padding: 10px 0px 30px 0px;
  font-size: 30px;
  font-weight: 700;
}

#map .catalogue h2::after {
  position: absolute;
  width: 70px;
  display: block;
  height: 4px;
  top: 70px;
  background-color: #009688;
  content: "";
}

#map .catalogue ul {
  width: 100%;
  padding: 5px 0 30px 0;
}

#map .catalogue li {
  line-height: 30px;
  font-size: 16px;
  list-style-type: none;
  padding: 5px 10px 0px 40px;
}

#map .catalogue li::before {
  position: absolute;
  height: 16px;
  display: block;
  width: 5px;
  left: 40px;
  margin-top: 8px;
  background-color: #009688;
  content: "";
}

@media (max-width: 768px) {
  #map .nav h1 {
    font-size: 28px;
    width: 100%;
  }

  #map .nav h1::after {
    top: 75px;
  }

  #map .catalogue h2 {
    font-size: 24px;
  }

  #map .catalogue h2::after {
    font-size: 24px;
    top: 55px;
  }
}
</style>