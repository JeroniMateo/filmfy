## Filmfy App

- URL: http://filmfy-api.ddns.net/

## 1. ¿Qué es Filmfy?


Filmfy es una aplicación web donde puedes disfrutar del mundo del cine, tener a tu alcance tus películas favoritas, crear listas de contenidos, ver las listas de contenidos de otros usuarios. Hazte notar en este arte llamado cine comentando y valorando tanto peliculas como listas; ya sean propioas como de otros usuarios.

- Nuestros usuarios pueden crear listas de películas, añadir películas a la lista, editar la lista, eliminar la lista y compartir la lista con otros usuarios.
- Los usuarios también pueden crear entradas y comentarios en las entradas.
- Los usuarios también pueden crear comentarios y votos en la lista.
- Nuestras Listas pueden ser creadas por los usuarios, y pueden ser compartidas con otros usuarios.
- Nuestras Listas pueden ser votadas por los usuarios.
- Nuestras Películas pueden ser calificadas por los usuarios.
- Nuestros Usuarios pueden crear comentarios y votos sobre las películas.


En nuestra aplicación tenemos una Cartelera donde ver qué películas se han estrenado recientemente.
- Los usuarios pueden ver las películas que están en el cine.
- Los usuarios pueden crear listas de películas.
- Los usuarios pueden crear comentarios y votos sobre las películas.
- Tenemos una lista de películas que tenemos en nuestra base de datos.
- Una parte de que los usuarios pueden ver las 10 mejores películas.
- También pueden ver las próximas películas.

    
## 2. La aplicación se divide en:

- Frontend**: El frontend está desarrollado con 'Vue.js' y 'Bootstrap'.
- Backend**: El backend está desarrollado con 'Laravel'.
- Base de datos**: La base de datos está desarrollada con 'MySQL'.
- Despliegue**: La aplicación está desplegada en 'http://filmfy-api.ddns.net/'.
- GitHub**: La aplicación está alojada en 'GitHub'.
- Documentación**: La documentación se genera con 'Markdown'.
  

 ## 3. Tecnologías: 
 
      - Front: Vue.js & Bootstrap
      - Back: Laravel & Python
      - Base de datos: MySQL


## 4. ¿Qué aspecto tiene la aplicación?

    Para navegar por Filmfy, esta aplicación se distribuye de la siguiente manera:


### Inicio: Página principal de Filmfy.

- HOME, donde se recogen las películas más destacadas, que hace Filmfy, los últimos comentarios publicados por los usuarios y las listas más populares. Además de esto, en la home obtenemos una barra de navegación para ver Películas Usuarios y Listas. Por último la posibilidad de Registrarnos si no lo estamos o Logearnos si ya lo estamos.

- En todas las páginas de la aplicación veremos una cabecera formada por un menú de navegación y una barra de acción. Dependiendo de si estamos logueados o no nos dará la posibilidad de Ingresar o Nuestro Perfil.

- Al final de las páginas un pie de página con una barra de navegación con nuestras redes sociales.


### Usuarios.

- Registro, El usuario para gesitrarse deberá intrudcir un correo electrónico, una contraseña, un nombre de usuario y un nombre. y en un lateral destacamos que el usuario puede disfrutar cuando se registra.

- Login, El que el usuario deberá poner su email y contraseña para poder entrar en su cuenta.
  - Una vez logueado tendrá su propio perfil donde tendrá sus listas de contenidos, y tendrá la posibilidad de modificar sus datos y contenido exclusivo de la aplicación.


### Listas

- Listas de contenido, lugar de Filmfy donde por defecto tendrás una lista donde se guardarán tus peliculas favoritas
  - Si estás logueado podrás crear tus propias listas de contenido, las cuales otros usuarios pueden valorar.
  - Por defecto tendras una lista de favoritos


### Películas

- En esta sección podemos ver las películas más populares y las más recientes con los likes que los usuarios les han dado.
  - Si queremos buscar una película, podemos hacerlo por su nombre o por su género y año.
  - Si entramos en una película, obtenemos la ficha técnica de la misma, la descripción de la película, la lista de actores, el director, el género, el año de estreno, la duración, la imagen de la película. Una breve sinopsis, el trailer de la película y los comentarios de los usuarios, a los que podemos darles Like.
      - Además, podemos añadir un nuevo comentario, guardar la pelicula en favirotos en favoritos(Se añadira automaticamente a la lista que viene por defecto de Favoritos) y añadirlo a una de nuestras listas.


## 5 Características

- Peliculas: Los usuarios pueden disfrutar de todo el contenido cinematográfico.
- Listas**: Los usuarios pueden crear listas de películas o ver listas de otros usuarios.
- Comentarios**: La aplicación permite a los usuarios crear comentarios.
- Añadir películas a listas**: Los usuarios pueden añadir películas a la lista.


## 6. Estructura de Carpetas

Nuestro proyecto está dividido en las siguientes carpetas:

  - #### Components: Contiene todos los componentes de la aplicación.

    - Movies: Contiene todos los componentes relacionados con las películas.
         - Detailed Movie: Contiene los componentes para la información detallada de cada una de las peliculas   
        - AsideDitailedMovie.vue: Componente para la información detallada donde podemos darle me gusta a la pelicula, Añadirla a una lista y comentarla.
        - CommentsMovie.vue: Componente para los comentarios de la pelicula.
        - Filter.vue: Componente para buscar peliculas i/o filtrarlas por categoria o año
        - FormModal.vue & Tabs.vue: Componentes con la ficha tecnica de una pelicula.

    - Movie-card: Carpeta con los componentes para hacer las tarjetas de las películas.
        - MovieCardGeneral.vue: Componente para las tarjetas de las películas.
        - MovieCardDetailed.vue: Componente para las tarjetas de las películas 
  
    - Movies-page: Carpeta compuesta con los componentes:
        - Best-movies.vue: Carpeta con los componentes para las mejores películas.
        - ItemsSerched.vue: Componente para las películas que se han buscado.
        - RecentMovies.vue: Componente para las películas recientes.
        - Sercher: Componente para buscar películas.

 - #### Views: Carpeta con cada una de las vistas de la app

    - Lists: Carpeta con las vistas de las listas.
        - DetailedListPage.vue: Vista con los detalles de las listas
        - MainListsPage.vue: Vista general de las Listas.
  
    - Movies: Carpeta con las vistas de las películas.
        - DetailedMoviePage.vue: Vista con los detalles de las películas.
        - MainMoviesPage.vue:  vista general de las películas.
        - MovieCategories.vue: Vista con las categorias de las películas.
        - MovieYears.vue: Vista con los años de las películas.
  
    -Users: Carpeta con las vistas de los usuarios.
        - EditProfile.vue: vista para editar el perfil del usuario.
        - Login.vue: vista para iniciar sesión.
        - Register.vue: vista para registrarse.
        - UserProfile.vue: vista para ver el perfil del usuario.
  
    -Home:Visita la pagina principal de la aplicación.
      -Movies: Vista con las películas.


## 7.Paleta de colores

- Primario:  ![#00c740](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Secundario:![#fffdfd](https://via.placeholder.com/15/f03c15/000000?text=+)  
- Fondo: ![#242424](https://via.placeholder.com/15/f03c15/000000?text=+)
- Icons: ![#e49e06](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Información ![#0f0505](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Éxito: ![#2ecc71](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Error: ![#c50909](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Advertencia ![#f1c40f](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Cian: ![#5bdee6](https://via.placeholder.com/15/f03c15/000000?text=+) 
- Gris: ![#445566](https://via.placeholder.com/15/f03c15/000000?text=+) 


                           Created By Toni Gómez, Toni Garcia & Jeroni Mateo
                                        © 2022 Copyright: Filmfy