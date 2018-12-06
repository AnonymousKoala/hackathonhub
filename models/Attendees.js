module.exports = (sequelize, DataTypes) => {
  const Attendees = sequelize.define('attendees', {
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
     user: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    }
  });

  return Attendees;
}