'use strict';
export default {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      userId: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      firstName: {
        type: Sequelize.STRING,
      },
      lastName: {
          type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      passwordDigest: {
          type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      },
      updatedAt: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
      }
  });
},

down: async (queryInterface, Sequelize) => {
  await queryInterface.dropTable('Users');
}
};