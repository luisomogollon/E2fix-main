# E2
----------------------------------- MongoDB Compass -----------------------------------

mongodb+srv://SuperuserAba:D1g1talSoc1alAba@cluster0.12icyqe.mongodb.net/test

------------------------------------- Instalacion -------------------------------------

Desde el root de la carpeta ejecutar
> npm install

Dentro de la carpeta "frontend" ejecutar
> npm install

-------------------------------------- Ejecucion --------------------------------------

Desde el root, ejecutar
> npm run dev

Mediante este comando se ejecuta de forma simultanea tanto frontend y backend

frontend(localhost:3000)

backend(localhost:5000)

La plataforma cuenta con una interfaz de Login donde se ingresa para poder realizar cambios en los datos del usuario.

Login ->    localhost:3000

Profile ->  localhost:3000/profile

Por default tiene cargados 2 usuarios el sistema:


Username1

email: eestrada@example.com

password: 12345678


Username2

email: jpreciado@example.com

password: 12345678


Los usuarios estan cargados en la base de datos de Mongo y hay un respaldo en la siguiente ruta:

E2/backend/data/users.js

En caso de haber realizado cambios en sus datos y desear regresarlos a su estado inicial se cuenta con el script
> npm run data:import

Si se desea elimnar todos los usuarios:
> npm run data:destroy

-------------------------------------- Features --------------------------------------

-La contraseña de los usuarios se encuentran encriptadas

-Los usuarios se les autoriza el acceso mediante JWT

-Las fotos que se agregan al portal se almacenan en la carpeta uploads
