'use strict';
module.exports = (sequelize, DataTypes) => {
  const userEvent = sequelize.define('userEvent', {
    ueid: DataTypes.INTEGER
  }, {});
  userEvent.associate = function(models) {
    // associations can be defined here
  };
  return userEvent;
};