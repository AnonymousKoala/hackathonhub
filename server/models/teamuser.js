'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamUser = sequelize.define('TeamUser',
  {
    title: DataTypes.STRING
  }, {});
  TeamUser.associate = function(models)
  {
    // associations can be defined here
  };
  return TeamUser;
};