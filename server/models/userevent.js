'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent',
  {
    title: DataTypes.STRING
  }, {});
  UserEvent.associate = function(models) {
    // associations can be defined here
  };
  return UserEvent;
};