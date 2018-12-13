'use strict';
module.exports = (sequelize, DataTypes) => {
  const UserEvent = sequelize.define('UserEvent',
  {
    title: DataTypes.STRING
  }, {});
  UserEvent.associate = function(models)
  {
    UserEvent.belongsTo(models.user,
    {
      as: 'user',
      foreignKey: 'userID'
    });

    UserEvent.belongsTo(models.event,
    {
      as: 'event',
      foreignKey: 'eventID'
    });
  };
  return UserEvent;
};