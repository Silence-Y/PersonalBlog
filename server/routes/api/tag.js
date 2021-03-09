const express = require("express");
const router = express.Router();
const tagServ = require("../../services/tagService");
const {
  asyncHandler
} = require("../getSendResult");

// 查询所有标签
router.get("/", asyncHandler(async (req, res, next) => {
  return await tagServ.getTags()
}))

module.exports = router;
