const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');

const moment = require('moment');

const EveryDay = sequelize.define('EveryDay', {
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ctime: {
    type: DataTypes.DATE,
    get() {
      return moment(this.getDataValue('ctime')).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}, {
  // 不要忘记启用时间戳！
  timestamps: true,

  createdAt: false,
  updatedAt: false,
})
module.exports = EveryDay;
