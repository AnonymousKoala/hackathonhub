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
  };

  return TeamEvent;
};