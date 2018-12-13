'use strict';
module.exports = (sequelize, DataTypes) => {
  const TeamEvent = sequelize.define('TeamEvent',
  {
    title:
    {
        type: DataTypes.STRING,
    }
  });

  TeamEvent.associate = function(models)
  {
    TeamEvent.belongsTo(models.team,
    {
      as: 'team',
      foreignKey: 'teamID'
    });
    TeamEvent.belongsTo(models.event,
    {
      as: 'event',
      foreignKey: 'eventID'
    });
  };

  return TeamEvent;
};