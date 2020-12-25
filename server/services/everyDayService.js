const EveryDay = require('../models/EveryDay')
const {
  Op
} = require("sequelize");
const validate = require("validate.js");
const moment = require("moment");
const {
  pick
} = require("../util/propertyHelper");

// 新增每日一句
exports.addEveryDay = async function (everyObj) {
  everyObj = pick(everyObj, "content", "ctime")
  const ins = await EveryDay.create(everyObj)
  return ins.toJSON()
}
// 删除
exports.deleteEveryDay = async function (id) {
  return await EveryDay.destroy({
    where: {
      id
    }
  })
}

// 编辑
exports.updateEveryDay = async function (id, obj) {
  return await EveryDay.update(obj, {
    where: {
      id
    }
  })
}



// 根据id查询
exports.getEveryDayById = async function (id) {
  const result = await EveryDay.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};

// 查询最新的每日一句
exports.getLastEveryDay = async function () {
  const id = await EveryDay.max('id')
  const result = await EveryDay.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
}


// 分页查询
exports.getEveryDays = async function (page = 1, limit = 10, content = "") {
  const where = {};
  if (content) {
    where.content = {
      [Op.like]: `%${content}%`
    }
  }
  const result = await EveryDay.findAndCountAll({
    // 只选取其中几个属性
    // attributes: ["id", "content"],
    where,
    order: [
      ['id', 'DESC'] // 逆序
      // ['id'] 正序
    ],
    // 跳过的页数
    offset: (page - 1) * limit,
    // 限制每页显示的数量
    limit: +limit
  });
  return {
    total: result.count,
    datas: JSON.parse(JSON.stringify(result.rows)),
  }
}
