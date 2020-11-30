// 设置模型关系
const Comment = require("./Comment")
const Blog = require("./Blog")
const Tag = require("./Tag")

Blog.hasMany(Comment)
Comment.belongsTo(Blog)

Tag.hasMany(Blog)
Blog.belongsTo(Tag)
