'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('teamusers', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      team_user_id: {
        type: Sequelize.INTEGER
      },
      teamID:
      {
        type: Sequelize.INTEGER,
        references:
          {
            model: 'teams',
            key: 'id',
          }
      },
      userID:
      {
        type: Sequelize.INTEGER,
        references:
          {
            model: 'users',
            key: 'id',
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
    return queryInterface.dropTable('teamusers');
  }
};