'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('', {
      id:{
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey:true,
        autoIncrement: true,
      },
      name:{
        type:DataTypes.STRING,
        allowNull:false,
      },
      password:{
        type:DataTypes.STRING,
        allowNull:false
      },
      created_at:{
        type: DataTypes.DATE,
        allowNull:false,
      },
      updated_at:{
        type: DataTypes.DATE,
        allowNull:  true,
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};
