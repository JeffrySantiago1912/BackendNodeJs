

--- Para cualquier soporte contactarme a mi correo: jeffry1912@hotmail.com


Dependencias instaladas

npm install (instalar los package de node_modules)

npm i express mongodb http-errors dotenv debug excel4node

npm i -D nodemon

Para iniciar el proyecto: 

Connect: MongoDB Atlas: https://cloud.mongodb.com/v2/65d50a634b5b910ba26fe3a7#/clusters
(Crear tu propia bd en MongoDBAtlas y pasarle las configuraciones correspondiente en el .env que te genere MongoAtlas)

User: SantiShop, Password: Santishop (mi BD personal)

Acceder a la carpeta del proyecto correspondiente

Arracar el proyecto: npm run dev / para detener el proyecto control + c

Levantar el proyecto, probar la conexion con bd de mongo atlas, probar en postmand los curls debajos.

Dependiendo si es users o products colocarlo en la url de postmand

Example: Usar prodcuts o users en la url

curl --location 'http://localhost:3000/api/users'

url: http://localhost:3000/api/users

response:

{
    "message": "Lista de Usuarios",
    "body": [
        {
            "_id": "65e73841e2eacb41b7bf1373",
            "name": "Carlos Cabral",
            "Edad": 19
        },
        {
            "_id": "65e7386fe2eacb41b7bf1374",
            "name": "Jeffry Mezk",
            "Edad": 22
        }
    ]
}


curl --location 'http://localhost:3000/api/users' \
--header 'Content-Type: application/json' \
--data '{
    "name": "Jeffry Mezk",
    "Edad": 22
}'


curl --location 'http://localhost:3000/api/users/65e7386fe2eacb41b7bf1374'

curl --location --request DELETE 'http://localhost:3000/api/users/65e737fce2eacb41b7bf1372'

curl --location 'http://localhost:3000/api/users/report'
