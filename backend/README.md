# Backend

Este backend usa las sigueintes tecnologías:

- Python
- Docker
- Framework: FastAPI
- Base de datos: Postgres

## Correr Backend:

- Crear un archivo ".env" teniendo como referencia el archivo "example.env".

- Ejecutar las siguientes lineas manualmente:

```py
#Correr el contenedor:
docker-compose -f developer.yml up -d
```

```py
# Ingresar al contenedor:
docker exec -it dev_api_songs bash
```

```py
# Ejecutar achivo para crear las tablas en la base de datos y copiar los datos a la BD:
python3 create_tables.py
```

## Acceder a la Documentación API

- Acceder a la URL para ver la documentación:

[http://localhost:8000](http://localhost:8000)

- El uso de las API se encuentra detallado en el Swagger.

## Elimiar información

Correr el siguiente comando

```py
docker-compose -f developer.yml down --remove-orphans -v
```

Para eliminar imagenes, contenedores, volumenes y redes sin utilizar:

```py
docker system prune -a
```
