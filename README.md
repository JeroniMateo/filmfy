  # FilmFy App

- URL: http://filmfy-api.ddns.net/

## 1. ¿Qué es Filmfy?

Filmfy es una aplicación web donde puedes disfrutar del mundo del cine, tener a tu alcance tus películas favoritas, crear listas de contenidos, ver las de otros usuarios. Hazte notar en este arte llamado cine comentando y valorando tanto películas como listas; ya sean propias como de otros usuarios.

- Nuestros usuarios pueden disfrutar del mejor contenido digital
- Generar listas de películas a su gusto.
- Incluso publicar comentarios y votos sobre las películas y listas.

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

- HOME, donde se recogen las películas más destacadas, que hace Filmfy, los últimos comentarios publicados por los usuarios y las listas más populares. 
  -  Además de esto, en la home obtenemos una barra de navegación para ver Películas Usuarios y Listas. 
  -  Por último, la posibilidad de Registrarnos si no lo estamos o iniciarnos sesión si ya lo estamos.
 
### Usuarios.

- Registro, El usuario para registrarse  deberá introducir un nombre de usuario, un email, un correo electrónico, una contraseña y confirmación de contraseña.
  - En un lateral destacamos de todo lo que puede disfrutar el usuario cuando se registre.

- Login, El que el usuario deberá poner su email y contraseña para poder entrar en su cuenta.
  - Una vez logueado tendrá su propio perfil donde tendrá sus listas de contenidos, y tendrá la posibilidad de modificar sus datos y contenido exclusivo de la aplicación.

### Listas

- Listas de contenido, lugar de Filmfy donde si estás logueado podrás crear tus propias listas de contenido, las cuales otros usuarios pueden valorar.
- Por defecto tendrás una lista de favoritos y listas de otros usuarios.

### Películas

- En esta sección podemos ver las películas más populares y las más recientes con los likes que los usuarios les han dado.
- Si queremos buscar una película, podemos hacerlo por su nombre o por su género y año.
- Si entramos en una película en concreto podemos disfrutar de contenido de esa película.
  - Podiendo ver la ficha técnica de la misma, la descripción de la película, la lista de actores, el director, el género, el año de estreno,   la duración, la imagen de la  película. 
  - Incluye una breve sinopsis, el tráiler de la película y los comentarios de los usuarios, a los que podemos darles Like.
  - Además, estando logueados podemos añadir un nuevo comentario, guardar las películas en favoritos(Se añadirá automáticamente a la lista que viene por defecto de Favoritos) y añadirlo a una de nuestras listas.

## 5 Características

- Peliculas**: Los usuarios pueden disfrutar de todo el contenido cinematográfico.
- Listas**: Los usuarios pueden crear listas de películas o ver listas de otros usuarios.
- Comentarios**: La aplicación permite a los usuarios crear comentarios.
- Añadir películas a listas**: Los usuarios pueden añadir películas a la lista.

## 6. Estructura de Carpetas

### Nuestro proyecto está dividido en las siguientes carpetas:

#### Components: 

Movies: 
  Detailed Movie: Contiene los componentes para la información detallada de cada una de las películas
  - AsideDitailedMovie.vue: Componente para la información detallada donde podemos darle me gusta a la pelicula, añadirla a una lista y comentarla.
  - CommentsMovie.vue: Componente para los comentarios de la película.
  - Filter.vue: Componente para buscar películas y/o filtrarlas por categoría o año
  - FormModal.vue & Tabs.vue: Componentes con la ficha técnica de una película.

Movie-card:
  - MovieCardGeneral.vue: Componente para las tarjetas de las películas.
  - MovieCardDetailed.vue: Componente para las tarjetas de las películas

Movies-page:
  - Best-movies.vue: Carpeta con los componentes para las mejores películas.
  - ItemsSerched.vue: Componente para las películas que se han buscado.
  - RecentMovies.vue: Componente para las películas recientes.
  - Sercher: Componente para buscar películas.

#### Views: 

 Lists: Carpeta con las vistas de las listas.
  - DetailedListPage.vue: Vista con los detalles de las listas
  - MainListsPage.vue: Vista general de las Listas.

  Movies: 
  - DetailedMoviePage.vue: Vista con los detalles de las películas.
  - MainMoviesPage.vue: vista general de las películas.
  - MovieCategories.vue: Vista con las categorías de las películas.
  - MovieYears.vue: Vista con los años de las películas.

 Users: 
  - EditProfile.vue: vista para editar el perfil del usuario.
  - Login.vue: vista para iniciar sesión.
  - Register.vue: vista para registrarse.
  - UserProfile.vue: vista para ver el perfil del usuario.

- Home: Visita la página principal de la aplicación.
- Movies: Vista con las películas.
- App: Despliegue de la aplicación Filmfy

## 7. Paleta de colores

- Primario: ![#00c740](https://via.placeholder.com/15/f03c15/000000?text=+)
- Secundario:![#fffdfd](https://via.placeholder.com/15/f03c15/000000?text=+)
- Fondo: ![#242424](https://via.placeholder.com/15/f03c15/000000?text=+)
- Icons: ![#e49e06](https://via.placeholder.com/15/f03c15/000000?text=+)
- Información![#0f0505](https://via.placeholder.com/15/f03c15/000000?text=+)
- Éxito: ![#2ecc71](https://via.placeholder.com/15/f03c15/000000?text=+)
- Error: ![#c50909](https://via.placeholder.com/15/f03c15/000000?text=+)
- Advertencia![#f1c40f](https://via.placeholder.com/15/f03c15/000000?text=+)
- Cian: ![#5bdee6](https://via.placeholder.com/15/f03c15/000000?text=+)
- Gris: ![#445566](https://via.placeholder.com/15/f03c15/000000?text=+)

Created By Toni Gómez, Toni Garcia & Jeroni Mateo
© 2022 Copyright: Filmfy
