'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userID:
    {
        type: DataTypes.INTEGER,
    },
    firstName:
    {
        type: DataTypes.STRING,
    },
    lastName:
    {
        type: DataTypes.STRING,
    },
    userName:
    {
        type: DataTypes.STRING,
    },
    userDescription:
    {
        type: DataTypes.STRING,
    },
    userEmail:
    {
        type: DataTypes.STRING,
    },
    userRole:
    {
        type: DataTypes.INTEGER,
    },
  });

  user.associate = (models) =>
  {
    user.belongsToMany(models.team,
    {
        through: 'TeamUser',
        foreignKey: 'userID',
    });

    user.belongsToMany(models.event,
    {
        through: 'UserEvent',
        foreignKey: 'userID',
    });
  };

  return user;
};