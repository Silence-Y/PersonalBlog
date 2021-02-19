const Blog = require("../models/Blog")
const {
  Op
} = require("sequelize");
const moment = require("moment");
const {
  pick
} = require("../util/propertyHelper");


// 新增
exports.addBlog = async function (blogObj) {
  blogObj = pick(blogObj, "title", "md_content", "html_content", "views", "ctime")
  const ins = await Blog.create(blogObj);
  return ins.toJSON();
};

// 删除
exports.deleteBlog = async function (id) {
  return await Blog.destroy({
    where: {
      id
    }
  })
}

// 编辑
exports.updateBlog = async function (id, obj) {
  return await Blog.update(obj, {
    where: {
      id
    }
  })
}

// 查询最新的博客
exports.getLastBlog = async function () {
  const id = await Blog.max('id')
  const result = await Blog.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
}
// 根据id查询博客
exports.getBlogById = async function (id) {
  const result = await Blog.findByPk(id);
  if (result) {
    return result.toJSON();
  }
  return null;
};


// 分页查询
exports.getBlogs = async function (page = 1, limit = 10, title = "") {
  const where = {};
  // 标题模糊查询
  if (title) {
    where.title = {
      [Op.like]: `%${title}%`
    }
  }
  const result = await Blog.findAndCountAll({
    // 只选取其中几个属性
    // attributes: ["id", "title", "content"],
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
