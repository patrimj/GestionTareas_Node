# EJERCICIO RESUMEN NODEJS

## 1. COMANDOS UTILIZADOS
- Crea el package.json e ``inicializa el proyecto``
```bash
npm init -y 
```
- Instalación de la librería ``express``
```bash
npm install express
```
- Instalación global de ``nodemon``, para que se reinicie el servidor cada vez que se haga un cambio
```bash
npm install -g nodemon 
npm install --save-dev nodemon 
```
- Instalación de la librería dotenv, para crear el archivo ``.env``
```bash
npm install dotenv --save 
```
-  Instalación de todas las dependencias del package.json y la carpeta ``node_modules``
``` bash
npm install 
```
- Instalación de la librería cors, para evitar problemas de ``CORS``
```bash
npm install cors
```
- Instalación de la librería ``mysql2``, para trabajar con la base de datos
```bash
npm install mysql2 
```
- Instalación de la librería ``bcrypt``, para encriptar contraseñas
```bash
npm install bcrypt 
```
- Instalación de la librería ``validator``, para validar campos en las rutas
```bash
npm install validator
npm install express-validator
```
- Instalación de la librería ``jsonwebtoken``, para generar tokens
```bash
npm install jsonwebtoken 
```
- Instalación de la librería ``faker``, para generar datos falsos
```bash
npm i @faker-js/faker 
```
- Instalación de la librería ``sequelize``, para trabajar con la base de datos
```bash
npm install --save sequelize 
npm install sequelize sqlite3 
```
- Para instalar las dependecias de ``migrations``
```bash
npm install --save-dev sequelize-cli

```
- Instalación de ``sequelize-cli``, para trabajar con la base de datos
```bash
npx sequelize-cli init 
```
- Crear ``modelos``
```bash
npx sequelize-cli model:generate --name User --attributes firstName:string,lastName:string,email:string 
```
- Crear y migrar``tablas``
```bash
npx sequelize-cli db:migrate 
npx sequelize-cli db:migrate --to 20240121203206-create-roles.js
npx sequelize-cli db:migrate --to 20240116185326-create-user.js  
npx sequelize-cli db:migrate --to 20240121203217-create-rol-asignado.js
npx sequelize-cli db:migrate --to 20240121203253-create-tarea.js  
npx sequelize-cli db:migrate --to 20240121203310-create-tarea-asignada.js
```
- Hacer un rollback de las ``tablas``
```bash
npx sequelize-cli db:migrate:undo 
```
- Crear ``seeders``
```bash
npx sequelize-cli seed:generate --name userSeeder
npx sequelize-cli seed:generate --name rolSeeder
npx sequelize-cli seed:generate --name rolAsigSeeder
npx sequelize-cli seed:generate --name tareaSeeder
npx sequelize-cli seed:generate --name tareaAsigSeeder
```
- Introducir datos en las ``tablas``
```bash
npx sequelize-cli db:seed --seed 20240121203409-rolSeeder.js
npx sequelize-cli db:seed --seed 20240121203400-userSeeder.js 
npx sequelize-cli db:seed --seed 20240121203419-rolAsigSeeder.js
npx sequelize-cli db:seed --seed 20240121203428-tareaSeeder.js
npx sequelize-cli db:seed --seed 20240121203435-tareaAsigSeeder.js
```

## 2. ESTRUCTURACIÓN DE ARCHIVOS
> ## app
> > ``app.js`` [copiado el archivo ``app.js`` del profesor]

> > ``server.js`` [copiado en un principio el archivo ``server.js`` del profesor]

> ## config
> > ``config.js`` [copiado el archivo ``config.js`` del profesor]

> ## controllers
> > ``tarea.controller.js``

> > ``usuario.controller.js``

> ## database
> > ``ConexionSequelize.js`` 

> > ``connection.js``

> > ``tarea.conexion.js``

> > ``usuario.conexion.js``

> ## factories 

> [!NOTE]
> Las factorias se crean [SIN] comando

> > ``rol.factory.js`` [faker]

> > ``rol_asignado.factory.js`` [faker] 

> > ``usuario.factory.js`` [faker]

> > ``tarea.factory.js`` [faker]

> > ``tarea_asignada.factory.js`` [faker] 


> ## helpers
> > ``CustomError.js`` [copiado el archivo ``CustomError.js`` del profesor]

> > ``db-validators.js`` [se encuentran los validators personalizados]

> > ``generate_jwt.js`` [se encuentra la función para generar el token] 
```javascript
const jwt = require('jsonwebtoken')

const generarJWT = (id_usuario = '') => {

    console.log("id:" + id_usuario)
    let token = jwt.sign({ id_usuario }, process.env.SECRETORPRIVATEKEY, { 
        expiresIn: '4y' // 24 hours
      });
    return token;
}

module.exports ={
    generarJWT
}
```
*** en ``env`` se encuentra la clave secreta para generar el token ***
```bash
SECRETORPRIVATEKEY=eST0EsmiPiblic@key
```
*** en ``controllers`` se encuentra la función para generar el token ***
```javascript
const { generarJWT } = require('../helpers/jwt');

const login =  (req, res = response) => {
    const {email, password} = req.body;
    try{
        //Verificar si existe el usuario.
        const conx = new ConexionUsuario();
        u = conx.login(email, password)    
            .then( usu => {
                console.log('Usuario correcto!  ' + usu[0].id);
                const token = generarJWT(usu[0].id)
                console.log(usu)
                console.log(token);
                res.status(200).json({usu, token});
            })
            .catch( err => {
                console.log('No hay registro de ese usuario.');
                res.status(500).json({'msg':'Login incorrecto.'});
            });
            

        //res.status(200).json({'msg':'Login ok', DNI, Clave});
    }
    catch(error){
        console.log(error);
        res.status(500).json({'msg':'Error en el servidor.'});
    }
}
```
-  y asi cada vez que se inicie sesión se generará un token con el id del usuario

> ## middlewares
> > ``validar-admin.js`` [ para validar si el usuario es admin]
> > ``validarJWT.js`` [ para validar el token]
```javascript
const jwt = require('jsonwebtoken');
const {response, request} = require('express')  //Incorporamos esto aquí porque vamos a añadir elementos a req que sacaremos del token.

const validarJWT = (req , res , next) => {  //Estas asignaciones son necesarias para almacenar en el request los datos que extraigamos del token.
    const token = req.header('x-token');  //Este nombre será establecido en el cliente también.

    if (!token){
        return res.status(401).json({'msg':'No hay token en la petición.'});
    }

    try {
        
        const {id} = jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        req.idToken = id;
        console.log(id);
        console.log(token);
        next();
        
    }catch(error){
        console.log(error);
        res.status(401).json({'msg':'Token no válido.'});
    }
}

module.exports = {
    validarJWT
}
```

> ## migrations y models
>
> > ``index.js`` [es el archivo que se encarga de la conexión con la base de datos]

> [!NOTE]
> CUIDADO CON INDEX.JS (no sacarlo de la carpeta models)  
> Cambiar de congif/config.json a config/config.js 
```bash
Const config = require(__dirname + '/../config/config.js')[env]; 
```

> > ``roles.js`` [es el modelo que seguira la tabla roles] y ``20240121203206-create-roles.js``
```bash
npx sequelize-cli model:generate --name Roles --attributes nombre:string  
```
> > ``rol_asignado.js`` [es el modelo que seguira la tabla rol_asignado] y ``20240121203217-create-rol-asignado.js``
```bash
npx sequelize-cli model:generate --name Rol_Asignado --attributes id_rol:integer,id_usuario:integer 
```
> > ``user.js`` [es el modelo que seguira la tabla usuarios] y ``20240116185326-create-user.js``
```bash
npx sequelize-cli model:generate --name User --attributes nombre:string,email:string,password:string
```
> > ``tarea.js`` [es el modelo que seguira la tabla tareas] y ``20240121203253-create-tarea.js``
```bash
npx sequelize-cli model:generate --name Tarea --attributes descripcion:string,dificultad:string,horas_previstas:integer,horas_realizadas:integer,porcentaje_realizacion:integer,completada:boolean
```
> > ``tarea_asignada.js`` [es el modelo que seguira la tabla tarea_asignada] y ``20240121203310-create-tarea-asignada.js``
```bash
npx sequelize-cli model:generate --name Tarea_Asignada --attributes id_tarea:integer,id_usuario:integer
```
> [!CAUTION]
> id:integer > no se pone porque viene por defecto

> [!IMPORTANT]
>Todos estos comandos crearán un archivo de tipo `XXXXXXXXXXXXXX-create-user.j` en la carpeta `/migrations` y un archivo `user.js` en la carpeta `/models`

> ## routes
> > ``tarea.routes.js``

> > ``user.routes.js``

INICIAR SESIÓN [TODOS LOS USUARIOS]

POST http://localhost:9090/api/login
```
{
  "email" : "patricia@correo.com",
  "password": "admin123"
}
```
REGISTRARSE [TODOS LOS USUARIOS]

POST http://localhost:9090/api/registrarse
```
{
  "nombre" : "Patricia",
  "email" : "patricia@correo.com",
  "password": "admin123"
}
```
CAMBIAR CONTRASEÑA [TODOS LOS USUARIOS]

PUT http://localhost:9090/api/perfil/password/:email
```
{
  "password": "admin123"
}
```
DAR DE ALTA USUARIO [ADMIN]

POST http://localhost:9090/api/usuario/alta
```
{
  "nombre" : "Patricia",
  "email" : "patricia@correo.com",
  "password": "admin123"
}
```
BORRAR USUARIO [ADMIN]

DELETE http://localhost:9090/api/usuario/baja/:id

MODIFICAR USUARIO [ADMIN]

PUT http://localhost:9090/api/usuario/modificar/:id
```
{
  "nombre" : "Patricia",
  "email" : "patricia@correo.com",
  "password": "admin123"
}
```


> ## seeders
> > ```20240121203409-rolSeeder.js```
```bash
npx sequelize-cli db:seed --seed 20240121203409-rolSeeder.js
```
> > ```20240121203400-userSeeder.js```
```bash
npx sequelize-cli db:seed --seed 20240121203400-userSeeder.js 
```
> > ```20240121203419-rolAsigSeeder.js```
```bash
npx sequelize-cli db:seed --seed 20240121203419-rolAsigSeeder.js
```
> > ```20240121203428-tareaSeeder.js```
```bash
npx sequelize-cli db:seed --seed 20240121203428-tareaSeeder.js
```
> > ```20240121203435-tareaAsigSeeder.js```
```bash
npx sequelize-cli db:seed --seed 20240121203435-tareaAsigSeeder.js
```

> [!NOTE]
> Useful information that users should know, even when skimming content.

> [!TIP]
> Helpful advice for doing things better or more easily.

> [!IMPORTANT]
> Key information users need to know to achieve their goal.

> [!WARNING]
> Urgent info that needs immediate user attention to avoid problems.

> [!CAUTION]
> Advises about risks or negative outcomes of certain actions.
