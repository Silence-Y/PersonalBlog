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

// 新增标签
router.post("/",asyncHandler(async(req,res,next)=>{
  return await tagServ.addTag(req.body)
}))
// 编辑标签
router.put("/:id",
  asyncHandler(async (req, res, next) => {
    return await everyDayServ.updateTag(req.params.id, req.body);
  })
)

//   删除标签
router.delete("/:id",
  asyncHandler(async (req, res, next) => {
    return await everyDayServ.deleteTag(req.params.id)
  }))


module.exports = router;
