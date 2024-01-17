
const genRoles = async (ctos = 1) => { // ctos = cantidad de usuarios a generar

    let rolGen = []
    for(let i = 1; i <= ctos; i++) {
        const nombres = ['Admin', 'Programador'];
        let u = 
            {
                nombre: nombres[Math.floor(Math.random() * nombres.length)],
            }
            rolGen.push(u)
    }
    return Promise.all(rolGen);
}

module.exports = {
    genRoles
}