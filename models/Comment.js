const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');
const moment = require('moment');

const Comment = sequelize.define('Comment', {
  parent: {
    type: DataTypes.STRING,
    allowNull: true
  },
  user_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  content: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  ctime: {
    type: DataTypes.DATE,
    allowNull: false,
    get() {
      return moment(this.getDataValue('ctime')).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}, {
  createdAt: false,
  updatedAt: false,
})

module.exports = Comment;
