<template>
  <div id="about">
    <div class="ab_content">
      <h1>关于</h1>
      <p>前端小白一枚，自学前端一年了，欢迎大家一起交流学习~</p>
      <div class="con_out">
        GitHub：
        <a href="https://github.com/Silence-Y">
          GitHub
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>
      </div>
      <div class="con_out">
        掘金：
        <a href="https://juejin.cn/user/3940262884673278">
          掘金
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>
      </div>
      <div class="con_out">
        CSDN：<a href="https://blog.csdn.net/Silence_555">
          CSDN
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            width="15"
            height="15"
            class="icon outbound"
          >
            <path
              fill="currentColor"
              d="M18.8,85.1h56l0,0c2.2,0,4-1.8,4-4v-32h-8v28h-48v-48h28v-8h-32l0,0c-2.2,0-4,1.8-4,4v56C14.8,83.3,16.6,85.1,18.8,85.1z"
            />
            <polygon
              fill="currentColor"
              points="45.7,48.7 51.3,54.3 77.2,28.5 77.2,37.2 85.2,37.2 85.2,14.9 62.8,14.9 62.8,22.9 71.5,22.9"
            />
          </svg>
        </a>
      </div>
    </div>
  </div>
  <!-- 评论 -->
  <!-- <Comment></Comment> -->
</template>

<script>
import Comment from "../../components/front/comment";
export default {
  components: {
    Comment,
  },
};
</script>

<style>
#about {
  width: 100%;
  height: 300px;
  background: white;
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.15);
  margin-bottom: 40px;
}

#about .ab_content {
  width: 85%;
  margin: 0 auto;
}

#about .ab_content h1 {
  text-align: center;
  font-size: 36px;
  padding-top: 30px;
}

#about .ab_content h1::after {
  width: 60px;
  display: block;
  height: 2px;
  margin: 10px auto;
  background-color: #009688;
  content: "";
}

#about .ab_content p {
  padding: 20px;
  word-break: break-all;
}

#about .ab_content .con_out {
  padding: 0px 20px 10px 20px;
}

#about .ab_content a {
  font-weight: 500;
  color: #009688;
  text-decoration: none;
}

@media (max-width: 768px) {
  #about .ab_content h1 {
    font-size: 28px;
  }
}
</style>