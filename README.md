<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

# Ejecutar en desarrollo

1. clonar el repo
2. Ejecutar el comando:
```
yarn install
```
3. Tener Nest CLI instalado
```
npm i -g @nestjs/cli
```
4. Levantar la base de datos
```
docker-compose up -d
```

5. Clonar el archivo __.env.template__ y renombrar la copia a __.env__

6. Llenar las variables de entorno definidas en el ```.env``` 

7. Levantar la app en desarrollo
```
yarn start:dev
```

8. Recontruir la base de datos con la semilla
```
http://localhost:3000/api/v2/seed
```

## STACK USADO

* MONGO DB
* NEST JS