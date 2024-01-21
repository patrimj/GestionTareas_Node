'use strict';
const { genRolesAsignados } = require('../factories/rol_asignado.factory');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   const rol_asignados = await genRolesAsignados(4);
   await queryInterface.bulkInsert('rol_Asignados', rol_asignados, {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('rol_Asignados', null, {});
  }
};
