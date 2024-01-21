const mysql = require('mysql2');
const Conexion = require('./ConexionSequelize');
const { Sequelize, Op } = require('sequelize'); // Op es para los operadores de sequelize

let User;
if (typeof require !== 'undefined') {
 const { Sequelize, DataTypes } = require('sequelize');
 const sequelize = new Sequelize('sqlite::memory:');
 User = require('../models/user.js')(sequelize, DataTypes);
}

class UsuarioConexion{
    
    constructor(){
        this.conexion = new Conexion();
    }

    conectar = () => {
        this.conexion.conectar();
    }

    desconectar = () => {
        this.conexion.desconectar();
    }

    //LOGIN
    login = async (email, password) => {
        let resultado = [];
        this.conectar();
        resultado = await User.findOne({
            where: {
                email: email,
                password: password
            }
        });
        this.desconectar();
        if (!resultado) {
            throw error;
        }
        return resultado;
    }

    // REGISTRARSE
    registro = async (body) => {
        let resultado = 0;
        this.conectar();
        try {
            const usuarioNuevo = await User.create(body); // solo crea los campos que le digo en el body
            resultado = 1; 
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                console.log(`El id ${body.email} ya existe en la base de datos.`);
            } else {
                console.log('Ocurrió un error desconocido: ', error);
            }
            throw error;
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    // CAMBIAR PASSWORD
    cambiarPassword = async (email, password) => {
        this.conectar();
        let resultado = await User.findOne({
            where: {
                email: email
            }
        });
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.update(password);
        this.desconectar();
        return resultado;
    }

    // ALTA USUARIO
    altaUsuario = async (body) => {
        let resultado = 0;
        this.conectar();
        try {
            const usuarioNuevo = await User.create(body); 
            resultado = 1; 
        } catch (error) {
            if (error instanceof Sequelize.UniqueConstraintError) {
                console.log(`El id ${body.email} ya existe en la base de datos.`);
            } else {
                console.log('Ocurrió un error desconocido: ', error);
            }
            throw error;
        } finally {
            this.desconectar();
        }
        return resultado;
    }

    // BAJA USUARIO
    bajaUsuario = async (id) => {
        this.conectar();
        let resultado = await User.findByPk(id);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.destroy();
        this.desconectar();
        return resultado;
    }

    // MODIFICAR USUARIO
    modificarUsuario = async (id, body) => {
        this.conectar();
        let resultado = await User.findByPk(id);
        if (!resultado) {
            this.desconectar();
            throw error;
        }
        await resultado.update(body);
        this.desconectar();
        return resultado;
    }

}

module.exports = UsuarioConexion;

