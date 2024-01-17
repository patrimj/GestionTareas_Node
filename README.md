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
npx sequelize-cli db:seed:all 
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
> [!CAUTION]
> id:integer > no se pone porque viene por defecto

- Crea un archivo de tipo `XXXXXXXXXXXXXX-create-user.j` en la carpeta `/migrations` y un archivo `user.js` en la carpeta `/models`

```bash
npx sequelize-cli model:generate --name Tarea --attributes id_usuario:integer,descripcion:string,dificultad:string,horas_previstas:integer,horas_realizadas:integer,porcentaje_realizacion:integer,completada:boolean
```
- Crea un archivo de tipo `XXXXXXXXXXXXXX-create-tarea.j` en la carpeta `/migrations` y un archivo `tarea.js` en la carpeta `/models`



> > ``tarea.js`` [es el modelo que seguira la tabla tareas]

> ## routes
> > ``tarea.routes.js``

> > ``usuario.routes.js``

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
