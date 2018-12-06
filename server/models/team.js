'use strict';
module.exports = (sequelize, DataTypes) => {
  const team = sequelize.define('team', {
    teamID:
    {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    teamName:
    {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    });

  team.associate = (models) =>
  {
    team.belongsToMany(models.user,
      {
        through: models.teamuser,
        foreignKey: 'teamID',
      });
  };

  return team;
};
