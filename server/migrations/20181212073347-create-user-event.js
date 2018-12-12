'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('UserEvents', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title:
      {
        type: Sequelize.STRING
      },
      userID:
      {
        type: Sequelize.INTEGER,
        references:
        {
          model: 'users',
          key: 'id'
        }
      },
      eventID:
      {
        type:Sequelize.INTEGER,
        references:
        {
          model: 'events',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('UserEvents');
  }
};