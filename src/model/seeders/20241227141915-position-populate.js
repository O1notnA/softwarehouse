'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Positions', [{
          title: 'Manager',
          salary: 80000,
          created_at: new Date(),
          updated_at: new Date()}, 
      {
          title: 'Devoloper',
          salary:30000,
          created_at: new Date(),
          updated_at: new Date() 
      }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Positions', null,{});
  }
};
