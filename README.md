## Filmfy

## Idea principal
1. Filmfy (red social de cine diferenciada por poder listar contenidos, tener noticias y un foro de discusión de usuarios)

    - Tecnologías: 
      - Front: Vue.js & Bootstrap
      - Back: Laravel & Python
      - Base de datos: MySQL

## 1.Paleta de colores

- Primario:  ![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+) `#00c740`
 
- Secundario:![#f03c15](https://via.placeholder.com/15/f03c15/000000?text=+)  `#f7f7f5`
- Fondo: ![#242424](https://via.placeholder.com/15/f03c15/000000?text=+) `#242424`
- Luz: ![#e49e06](https://via.placeholder.com/15/f03c15/000000?text=+) `#e49e06`
- Información ![#0f0505](https://via.placeholder.com/15/f03c15/000000?text=+) `#0f0505`
- Éxito: ![#2ecc71](https://via.placeholder.com/15/f03c15/000000?text=+) `#2ecc71`
- Error: ![#c50909](https://via.placeholder.com/15/f03c15/000000?text=+) `#c50909`
- Advertencia ![#897213](https://via.placeholder.com/15/f03c15/000000?text=+) `#897213`
- Cian: ![#5bdee6](https://via.placeholder.com/15/f03c15/000000?text=+) `#5bdee6`
- Gris: ![#787b66](https://via.placeholder.com/15/f03c15/000000?text=+) `#787b66`

  

## 2. Aplicación Filmfy

Filmfy es una aplicación web que permite a los usuarios registrarse, crear listas de contenidos, ver las listas de contenidos de otros usuarios, ver las noticias de las redes sociales, comentar en los foros de discusión y ver los comentarios de los usuarios.

## 2.1 ¿Qué aspecto tiene la aplicación?

    Para navegar por Filmfy, esta aplicación se distribuye de la siguiente manera:

### Inicio: Página principal de Filmfy.
- Una home, donde se recogen las películas más destacadas, que hace Filmfy, los últimos comentarios publicados por los usuarios y las listas más populares. Además de esto, en la home obtenemos una barra de navegación para ver Películas Usuarios y Listas. Por último la posibilidad de Registrarnos si no lo estamos o Logearnos si ya lo estamos.

- En todas las páginas de la aplicación veremos una cabecera formada por un menú de navegación y una barra de acción. Dependiendo de si estamos logueados o no nos dará la posibilidad de Ingresar o Nuestro Perfil.

- Al final de las páginas un pie de página con una barra de navegación con nuestras redes sociales.

### Usuarios.
- En la sección de registro, nos aparecen los campos para registrarnos, en los que podemos registrarnos con un correo electrónico, una contraseña, un nombre de usuario y nuestro nombre. y en un lateral destacamos que el usuario puede disfrutar cuando se registra.
- Un apartado de login, en el que el usuario deberá poner su email y contraseña para poder entrar en su cuenta.
- Una vez logueado tendrá su propio perfil donde tendrá sus listas de contenidos, y tendrá la posibilidad de modificar sus datos.

### Listas
- Una sección para crear listas de contenido, donde por defecto tendrás una de tus películas favoritas y si estás logueado podrás crear tus propias listas de contenido.

### Películas
- En la sección de Películas, podemos ver las películas más populares y las más recientes con los likes que los usuarios les han dado.
- Si queremos buscar una película, podemos hacerlo por su nombre o por su género y año.
- Si entramos en una película, obtenemos la ficha técnica de la misma, la descripción de la película, la lista de actores, el director, el género, el año de estreno, la duración, la imagen de la película. Una breve sinopsis, el trailer de la película y los comentarios de los usuarios, a los que podemos darles Like.
      - Además, podemos añadir un nuevo comentario, guardarlo en favoritos y añadirlo a una de nuestras listas.


## ¿Qué es Filmfy?

Fimfy es una red social de películas.
Filmfy App es una aplicación web que permite a los usuarios crear listas de películas.
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

    
### La aplicación se divide en:
- Frontend**: El frontend está desarrollado con 'Vue.js' y 'Bootstrap'.
- Backend**: El backend está desarrollado con 'Laravel'.
- Base de datos**: La base de datos está desarrollada con 'MySQL'.
- Despliegue**: La aplicación está desplegada en 'http://filmfy-api.ddns.net/'.
- GitHub**: La aplicación está alojada en 'GitHub'.
- Documentación**: La documentación se genera con 'Markdown'.



## 3 Características
- Listas**: La aplicación permite a los usuarios crear listas de películas.
- Comentarios**: La aplicación permite a los usuarios crear comentarios.
- Crear listas**: Los usuarios pueden crear listas de películas.
- Añadir películas**: Los usuarios pueden añadir películas a la lista.
- Editar listas**: Los usuarios pueden editar las listas.

## Estructura de Carpetas

Nuestro proyecto está dividido en las siguientes carpetas:

- ### SRC: Contiene todos los archivos fuente de la aplicación.
    Dentro de src tenemos 2 carpetas principales que son Components i Views.

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
  - Views: Carpeta con cada una de las vistas de la app
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
