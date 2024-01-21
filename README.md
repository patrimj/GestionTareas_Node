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
npx sequelize-cli db:migrate --to 10240117093834-create-roles.js
npx sequelize-cli db:migrate --to 20240116185326-create-user.js
npx sequelize-cli db:migrate --to 20240116185327-create-rol-asignado.js
npx sequelize-cli db:migrate --to 20240116185423-create-tarea.js
npx sequelize-cli db:migrate --to 20240120163223-create-tarea-asignada.js
```
- Hacer un rollback de las ``tablas``
```bash
npx sequelize-cli db:migrate:undo 
```
- Crear ``seeders``
```bash
npx sequelize-cli seed:generate --name userSeeder
```
- Introducir datos en las ``tablas``
```bash
npx sequelize-cli db:seed --seed 20240120180629-rolSeeder.js
npx sequelize-cli db:seed --seed 20240116191709-userSeeder.js  
npx sequelize-cli db:seed --seed 20240116191710-rol_asignadoSeeder.js
npx sequelize-cli db:seed --seed 20240116191715-tareaSeeder.js
npx sequelize-cli db:seed --seed 20240120180650-tarea_asignadaSeeder.js
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

> ## middlewares
> > ``validar-admin.js`` [ para validar si el usuario es admin]

> ## migrations y models

> > ``roles.js`` [es el modelo que seguira la tabla roles]
```bash
npx sequelize-cli model:generate --name Roles --attributes nombre:string  
```
> > ``rol_asignado.js`` [es el modelo que seguira la tabla rol_asignado]
```bash
npx sequelize-cli model:generate --name Rol_Asignado --attributes id_rol:integer,id_usuario:integer 
```
> > ``user.js`` [es el modelo que seguira la tabla usuarios]
```bash
npx sequelize-cli model:generate --name User --attributes nombre:string,email:string,password:string,admin:boolean
```
> > ``tarea.js`` [es el modelo que seguira la tabla tareas]
```bash
npx sequelize-cli model:generate --name Tarea --attributes descripcion:string,dificultad:string,horas_previstas:integer,horas_realizadas:integer,porcentaje_realizacion:integer,completada:boolean
```
> > ``tarea_asignada.js`` [es el modelo que seguira la tabla tarea_asignada]
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
