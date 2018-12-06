'use strict';
module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    userID:
    {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    firstName:
    {
        type: DataTypes.STRING,
        allowNull:false,
    },
    lastName:
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userName:
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userDescription:
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userEmail:
    {
        type: DataTypes.STRING,
        allowNull: true,
    },
    userRole:
    {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
  });

  user.associate = (models) =>
  {
    user.belongsToMany(models.team,
    {
        through: models.teamuser,
        foreignKey: 'userID',
    });
  };

  return user;
};