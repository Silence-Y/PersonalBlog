const express = require("express");
const app = express();


// // 映射public目录中的静态资源
const path = require("path");
const staticRoot = path.resolve(__dirname, "../public");
app.use(express.static(staticRoot));

// 解析 application/x-www-form-urlencoded 格式的请求体
app.use(express.urlencoded({
  extended: true
}));

// 解析 application/json 格式的请求体
app.use(express.json());

// 处理 api 的请求
// 处理学生的所有请求
app.use("/api/blog", require("./api/blog"));
app.use("/api/everyDay", require("./api/everyDay"));
app.use("/api/comment", require("./api/comment"));
app.use("/api/tag", require("./api/tag"));

const port = 12306;
app.listen(port, () => {
  console.log(`server listen on ${port}`);
});
