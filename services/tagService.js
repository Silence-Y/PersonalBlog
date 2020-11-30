const Tag = require('../models/Tag')

// 新增
exports.addTag = async function (tagObj) {
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
