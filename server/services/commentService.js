const Comment = require('../models/Comment')
const {
  Op
} = require("sequelize");
const Blog = require("../models/Blog")
const validate = require("validate.js");
const moment = require("moment");
const {
  pick
} = require("../util/propertyHelper");

// 新增评论
exports.addComment = async function (commentObj) {
  commentObj = pick(commentObj, "user_name", "content", "email", "ctime")
  const ins = await Comment.create(commentObj)
  return ins.toJSON()
}
// 删除

// 编辑

// 根据id查询

// 查询所有评论
exports.getComments = async function () {
  const result = await Comment.findAndCountAll({
    // 关联的表
    // include: [Blog],
    order: [
      ['id', 'DESC'] // 逆序
      // ['id'] 正序
    ],
  })
  return {
    total: result.count,
    datas: JSON.parse(JSON.stringify(result.rows)),
  }
}
