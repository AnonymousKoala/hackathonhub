'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamUser = sequelize.define('TeamUser',
  {
    title: DataTypes.STRING
  }, {});
  TeamUser.associate = function(models)
  {
    TeamUser.belongsTo(models.user,
    {
      as: 'user',
      foreignKey: 'userID'
    });
    TeamUser.belongsTo(models.team,
    {
      as: 'team',
      foreignKey: 'teamID'
    });
  };

  return TeamUser;
};