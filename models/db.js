const {
  Sequelize
} = require('sequelize')

// 连接数据库
const sequelize = new Sequelize('personalblog', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  logging: null
})

module.exports = sequelize;
