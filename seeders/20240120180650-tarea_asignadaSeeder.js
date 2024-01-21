'use strict';
const { genTareasAsignadas } = require('../factories/tarea_asignada.factory');

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
    const tarea_Asignada = await genTareasAsignadas(2);
    await queryInterface.bulkInsert('tareas_asignadas', tarea_Asignada, {}); 
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tareas_asignadas', null, {});
  }
};
