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
        type: DataTypes.DATE,
    },
    timeEnd:
    {
        type: DataTypes.DATE,
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

  event.associate = function(models) {
    // associations can be defined here
  };
  return event;
};