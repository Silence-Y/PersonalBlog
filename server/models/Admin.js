const sequelize = require('./db');

const {
  DataTypes
} = require('sequelize');

// 创建一个模型对象
const Admin = sequelize.define('Admin', {
  loginId: {
    type: DataTypes.STRING,
    allowNull: false
  },
  loginPwd: {
    // 列的类型
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  createdAt: false,
  updatedAt: false,
  //从此以后，该表的数据不会真正被删除，而是增加一列deleteAt，记录删除时间
  // paranoid: true
})

module.exports = Admin
