'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Rol_Asignado extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) { //TODO:FOREIGN KEY
      // define association here
      this.belongsTo(models.User, { foreignKey: 'id_usuario', as: 'usuario' });
      this.belongsTo(models.Roles, { foreignKey: 'id_rol', as: 'rol' });
    }
  }
  Rol_Asignado.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true, 
      autoIncrement: true
    },
    id_rol: DataTypes.INTEGER,
    id_usuario: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Rol_Asignado',
    tableName: 'rol_asignados',
  });
  return Rol_Asignado;
};