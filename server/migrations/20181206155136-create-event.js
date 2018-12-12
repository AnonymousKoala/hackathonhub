'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      eventID: {
        type: Sequelize.INTEGER
      },
      eventName:{
        type: Sequelize.STRING
      },
      timeStart: {
        type: Sequelize.STRING
      },
      timeEnd: {
        type: Sequelize.STRING
      },
      eventDescription: {
        type: Sequelize.STRING
      },
      eventAddress: {
        type: Sequelize.STRING
      },
      eventCity: {
        type: Sequelize.STRING
      },
      eventZip: {
        type: Sequelize.INTEGER
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
    return queryInterface.dropTable('events');
  }
};