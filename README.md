# Express Image Upload Microservice

Este proyecto es un microservicio basado en Express que proporciona un endpoint para subir imágenes. Las imágenes se reciben en formato base64 y se almacenan en una estructura de carpetas definida por el usuario.

## Estructura del Proyecto

├── src
│ ├── controllers
│ ├── routes
│ ├── middleware
│ └── server.js
├── uploads
│ └── (Carpetas de imágenes creadas manualmente)
├── .gitignore
├── package.json
└── README.md

# Endpoint

`POST /uploads/base64`

{
"folder": "ejemplo",
"image": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUA...",
"image_name": "imagen.png"
}

# Instalación

`git clone https://github.com/JorgeMike/express-image-microservice.git`

# Modo dev

`npm run dev`

# Modo start

`npm run tsc`

`npm run start`

# .gitignore

En el archivo gitignore se omite la carpeta de uploads y el nodemodules
