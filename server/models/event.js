'use strict';
module.exports = (sequelize, DataTypes) => {
  const event = sequelize.define('event',
  {
    eventID:
    {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    eventName:
    {
        type: DataTypes.STRING,
        allowNull:false,
    },
    timeStart:
    {
        type: DataTypes.STRING,
    },
    timeEnd:
    {
        type: DataTypes.STRING,
    },
    eventDescription:
    {
        type: DataTypes.STRING,
    },
    eventAddress:
    {
        type: DataTypes.STRING,
    },
    eventCity:
    {
        type: DataTypes.STRING,
    },
    eventZip:
    {
        type: DataTypes.INTEGER,
    },
  }, {});

  event.associate = function(models)
  {
    event.belongsToMany(models.team,
    {
        through: 'TeamEvent',
        foreignKey: 'eventID',

    });
    event.belongsToMany(models.user,
    {
        through: 'UserEvent',
        foreignKey: 'eventID',

    })


  };
  return event;
};