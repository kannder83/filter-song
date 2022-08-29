# Backend

Este backend usa las sigueintes tecnologías:

- Python
- Docker
- Framework: FastAPI
- Base de datos: Postgres

## Correr Backend:

- Crear un archivo ".env" con la siguiente información:

```
DATABASE_HOSTNAME=postgres
DATABASE_PORT=5432
DATABASE_PASSWORD=ComplexPass11##
DATABASE_NAME=songs_db
DATABASE_USERNAME=postgres
POSTGRES_PASSWORD=ComplexPass11##
POSTGRES_DB=songs_db
DEBUG=True
ALLOWED_HOSTS=localhost:8000
```

- Ejecutar las siguientes lineas manualmente:

```py
#Correr el contenedor:
docker-compose -f developer.yml up

# Ingresar al contenedor:
docker exec -it dev_api_songs bash

# Ejecutar achivo para crear las tablas en la base de datos:
python3 create_tables.py

# Ejecutar archivo para copiar el CSV a la BD:
python3 copy_csv_to_db.py
```

- Acceder a la URL para ver la documentación:

[http://localhost:8000](http://localhost:8000)

- El uso de las API se encuentra detallado en el Swagger.
