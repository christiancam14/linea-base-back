<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

  <p align="center">Este proyecto es una línea base desarrollada por <a href="https://github.com/christiancam14/" target="_blank">Christian Camacho</a> implementando el framework nest para construcción de proyectos backend.</p>
  <p align="center">

</p>

## Descripción

El [repositorio](https://github.com/christiancam14/linea-base-back) cuenta con diferentes ramas para integraciones de diferentes tipos de bases de datos. Cada una con integración de módulo de autenticación, decoradores personalizados, y conección de variables de entorno.

## Running the app

```bash
# Clonación del proyecto
$ git clone https://github.com/nestjs/nest.git

# Instalar los paquetes
$ yarn install

# Clonar el archivo `.env.template` y renombrarlo a `.env` 
$ cp .env.template .env

# Cambiar las variables de entorno 

# Levantar la base de datos 
$ docker-compose up -d

# Levantar el modo desarrollo 
$ yarn start:dev

#7. Ejecutar SEED 
$ start http://localhost:3000/api/SEED
```

