const express = require("express");
const router = express.Router();
const everyDayServ = require("../../services/everyDayService");
const {
  asyncHandler
} = require("../getSendResult");


// 分页查询
router.get("/",
  asyncHandler(async (req, res) => {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const content = req.query.content || ""
    return await everyDayServ.getEveryDays(page, limit, content)
  })
)

// 根据id查询最新一条数据
router.get("/getLastEveryDay",
  asyncHandler(async (req, res) => {
    return await everyDayServ.getLastEveryDay();
  }))

// 新增每日一句
router.post("/",
  asyncHandler(async (req, res, next) => {
    return await everyDayServ.addEveryDay(req.body)
  }))

//   删除每日一句
router.delete("/:id",
  asyncHandler(async (req, res, next) => {
    return await everyDayServ.deleteEveryDay(req.params.id)
  }))

// 编辑每日一句
router.put("/:id",
  asyncHandler(async (req, res, next) => {
    return await everyDayServ.updateEveryDay(req.params.id, req.body);
  })
)


module.exports = router;
