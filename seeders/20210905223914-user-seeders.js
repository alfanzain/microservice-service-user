'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        name: 'alfan',
        profession: 'Back end developer',
        role: 'admin',
        email: 'alfanzainkp@gmail.com',
        password: await bcrypt.hash('admin', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: 'zain',
        profession: 'Front end developer',
        role: 'student',
        email: 'alfanzainnajmi@gmail.com',
        password: await bcrypt.hash('admin', 10),
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
    
  }
};
