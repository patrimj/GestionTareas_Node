'use strict';
const { genTareas } = require('../factories/tarea.factory');

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
   const tareas = await genTareas(4);
   await queryInterface.bulkInsert('tareas', tareas, {}); // bulkInsert es una funcion de sequelize que te permite insertar varios registros a la vez
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('tareas', null, {});
  }
};
