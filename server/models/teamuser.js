'use strict';
module.exports = (sequelize, DataTypes) => {
  const teamuser = sequelize.define('teamuser', {
    team_user_id:
    {
        type:DataTypes.INTEGER
    },
    teamID:
    {
        type:DataTypes.INTEGER
    },
    userID:
    {
        type: DataTypes.INTEGER
    }

  }, {});

  teamuser.associate = (models) =>
  {
    teamuser.belongsTo(models.team);
    teamuser.belongsTo(models.user);
  };
  return teamuser;
};