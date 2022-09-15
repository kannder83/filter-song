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

# Ingresar al contenedor:
docker exec -it dev_api_songs bash

# Ejecutar achivo para crear las tablas en la base de datos y copiar los datos a la BD:
python3 copy_csv_to_db.py
```

- Acceder a la URL para ver la documentación:

[http://localhost:8000](http://localhost:8000)

- El uso de las API se encuentra detallado en el Swagger.
