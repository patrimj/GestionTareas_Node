'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tarea extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  }
  Tarea.init({
    id: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER,
    descripcion: DataTypes.STRING,
    dificultad: DataTypes.STRING,
    horas_previstas: DataTypes.INTEGER,
    horas_realizadas: DataTypes.INTEGER,
    porcentaje_realizacion: DataTypes.INTEGER,
    completada: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'Tarea',
    tableName : 'tareas',
  });
  return Tarea;
};