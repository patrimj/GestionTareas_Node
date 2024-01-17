const { RolAsignado } = require('../models/');

const genRolesAsignados = async (ctos = 1) => { 

    let rolAsignadoGen = []
    for(let i = 1; i <= ctos; i++) {
        const id_rol = 
        let u = 
            {
                nombre: nombres[Math.floor(Math.random() * nombres.length)],
            }
            rolAsignadoGen.push(u)
    }
    return Promise.all(rolAsignadoGen);
}

module.exports = {
    genRolesAsignados
}