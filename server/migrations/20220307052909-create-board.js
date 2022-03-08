'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('board', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('board');
  }
};