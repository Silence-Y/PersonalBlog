const sequelize = require('./db');
const {
  DataTypes
} = require('sequelize');

const Tag = sequelize.define('Tag', {
  t_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, {
  createdAt: false,
  updatedAt: false,
})

module.exports = Tag;
