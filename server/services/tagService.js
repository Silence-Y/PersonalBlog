const Tag = require('../models/Tag')
const {
  pick
} = require("../util/propertyHelper");

// 查询标签
exports.getTags = async function(){
  const result =await Tag.findAndCountAll()

  return {
    total: result.count,
    datas: JSON.parse(JSON.stringify(result.rows)),
  }
}
// 新增
exports.addTag = async function (tagObj) {
  tagObj = pick(tagObj, "t_name")
  const ins = await Tag.create(tagObj);
  return ins.toJSON()
}

// 删除
exports.deleteTag = async function (id) {
  return await Tag.destroy({
    where: {
      id
    }
  })
}

// 编辑
exports.updateTag = async function (id, obj) {
  return await Tag.update(obj, {
    where: {
      id
    }
  })
}
