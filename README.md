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
- Crear ``tablas``
```bash
npx sequelize-cli db:migrate 
```
- Crear ``seeders``
```bash
npx sequelize-cli seed:generate --name demo-user 
```
- Introducir datos en las ``tablas``
```bash
npx sequelize-cli db:seed:all = 
```

## 2. ESTRUCTURACIÓN DE ARCHIVOS
> ## app
> > app.js

> > server.js

> ## config
> > config.js

> ## controllers
> > tarea.controller.js

> > usuario.controller.js

> ## database
> > ConexionSequelize.js

> > connection.js

> > tarea.conexion.js

> > usuario.conexion.js

> ## factories 
> > tarea.factory.js
> > usuario.factory.js

> ## helpers
> > CustomError.js
> > db-validators.js 

> ## middlewares

> ## migrations

> ## models

> ## routes

> ## seeders
