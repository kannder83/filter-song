# filter-song

Desarrollo de prueba técnica.

## Información:

a. Nombre de la aplicación:

- filter Song

b. Instrucciones para correr localmente:

- Sobre las carpetas de Frontend y Backend en los README correspondientes están las instrucciones.

c. Link al despliegue de la aplicación:

- No se hizo deploy de la aplicación, solo entorno de desarrollo.

d. Si escogió una base de datos relacional debe compartir el diseño del mismo,
use la herramienta que prefiera:

- Solo se tiene una tabla con los siguientes campos:

```py
id = Column(Integer, primary_key=True, nullable=False, index=True)
artist = Column(String(255), nullable=False)
song = Column(String(255), nullable=False)
duration_ms = Column(Integer, nullable=False)
explicit = Column(String(255), nullable=False)
year = Column(Integer, nullable=False)
popularity = Column(Integer, nullable=False)
danceability = Column(Float, nullable=False)
energy = Column(Float, nullable=False)
key = Column(Integer, nullable=False)
loudness = Column(Float, nullable=False)
mode = Column(Integer, nullable=False)
speechiness = Column(Float, nullable=False)
acousticness = Column(Float, nullable=False)
instrumentalness = Column(Float, nullable=False)
liveness = Column(Float, nullable=False)
valence = Column(Float, nullable=False)
tempo = Column(Float, nullable=False)
genre = Column(String(255), nullable=False)
```

- Se utilizó el siguiente dataset:

[Top Hits Spotify from 2000-2019](https://www.kaggle.com/datasets/paradisejoy/top-hits-spotify-from-20002019)

e. Si alguna funcionalidad no se completó para la prueba, mencionar que cree
que pudo ocurrir

- Se implemento las funcionalies solicitadas, sin embargo hay un bug al recorrer la lista de las caciones en la página de [http://localhost:3000/library](library).
