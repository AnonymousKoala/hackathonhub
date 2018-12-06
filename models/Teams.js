module.exports = (sequelize, DataTypes) => {
  const Teams = sequelize.define('teams', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
     teamName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    member1: {
      type: DataTypes.STRING,
      allowNull: true
    },
    member2: {
      type: DataTypes.STRING,
      allowNull: true
    },
    member3: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    member4: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  });

  return Teams;
}