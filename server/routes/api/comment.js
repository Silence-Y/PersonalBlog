const express = require("express");
const router = express.Router();
const commentServ = require("../../services/commentService");
const {
  asyncHandler
} = require("../getSendResult");

// 查询
router.get("/", asyncHandler(async (req, res, next) => {
  return await commentServ.getComments()
}))
// 新增
router.post("/",
  asyncHandler(async (req, res, next) => {
    return await commentServ.addComment(req.body)
  }))

module.exports = router;
