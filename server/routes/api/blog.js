const express = require("express");
const router = express.Router();
const blogServ = require("../../services/blogService");
const {
  asyncHandler
} = require("../getSendResult");


// 分页查询
router.get("/",
  asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const title = req.query.title || ""
    return await blogServ.getBlogs(page, limit, title)
  }))


// 根据id查询
router.get("/:id",
  asyncHandler(async (req, res) => {
    return await blogServ.getBlogById(req.params.id);
  }))

// 根据id查询最新的数据
router.get("/getLastBlog",
  asyncHandler(async (req, res) => {
    return await blogServ.getLastBlog();
  }))



// 新增博客
router.post("/",
  asyncHandler(async (req, res, next) => {
    return await blogServ.addBlog(req.body)
  }))

//   删除博客
router.delete("/:id",
  asyncHandler(async (req, res, next) => {
    return await blogServ.deleteBlog(req.params.id)
  }))

// 编辑博客
router.put("/:id",
  asyncHandler(async (req, res, next) => {
    return await blogServ.updateBlog(req.params.id, req.body);
  })
)


module.exports = router;
