const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');
const moment = require('moment');

const Blog = sequelize.define('Blog', {
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    // type: DataTypes.STRING(10000),
    type: DataTypes.TEXT('long'),
    allowNull: false
  },
  views: {
    type: DataTypes.INTEGER,
    allowNull: true
  },
  ctime: {
    type: DataTypes.DATE,
    get() {
      return moment(this.getDataValue('ctime')).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}, {
  createdAt: false,
  updatedAt: false,
})

module.exports = Blog;
