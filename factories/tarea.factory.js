const bcrypt = require('bcrypt');
const { faker, fakerES } = require('@faker-js/faker');
const { User } = require('../models/user');

const genTareas = async (ctos = 1) => { // ctos = cantidad de tareas a generar
    let tareasGen = []
    for (let i = 1; i <= ctos; i++) {

        const dificultades = ['XS', 'S', 'M', 'L', 'XL'];
        let u =
        {
            descripcion: fakerES.lorem.sentence(),
            dificultad: dificultades[Math.floor(Math.random() * dificultades.length)],
            horas_previstas: faker.number({ min: 1, max: 10 }),
            horas_realizadas: faker.number({ min: 1, max: 10 }),
            porcentaje_realizacion: faker.number({ min: 1, max: 100 }),
            completada: 0,
            id_usuario: User.id,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        tareasGen.push(u)
    }
    return Promise.all(tareasGen);
}

module.exports = {
    genTareas
}
