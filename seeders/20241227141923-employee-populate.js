'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Employees', [{
      name: 'Antonio',
      position_id: 2,
      hire_date: new Date("2012-02-01"),
      created_at: new Date(),
      updated_at: new Date()}, 
  {
      name: 'Lucas',
      position_id:1,
      hire_date: new Date("2012-02-01"),
      created_at: new Date(),
      updated_at: new Date(), 
  }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Employees', null,{});
  }
};
