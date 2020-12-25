require('./Admin')
require('./Blog')
require('./Comment')
require('./EveryDay')
require('./Tag')
const sequelize = require('./db');

// 同步所有模型数据库
sequelize.sync({
  alter: true
}).then(() => {
  console.log('所有模型同步完成')
})
