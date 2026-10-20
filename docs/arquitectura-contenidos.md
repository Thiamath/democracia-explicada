# Borrador de arquitectura editorial

## Principio

El contenido didáctico es el núcleo. La actualidad funciona como blog contextualizado. Las páginas de instituciones y normas son fichas de consulta, y los temas son etiquetas transversales, no duplicados.

## Navegación

- Inicio: puerta de entrada educativa.
- Aprende: itinerarios guiados y biblioteca de artículos independientes.
- Actualidad: publicaciones cronológicas de Cortes, gobiernos, parlamentos autonómicos y BOE.
- Instituciones: fichas de competencias y relaciones.
- Leyes y normas: fichas normativas y fuentes oficiales.
- Método: transparencia editorial.

## Enlaces «¿Deseas saber más?»

Guiño a *Starship Troopers* usado como invitación a profundizar, no como elemento de propaganda. Cada bloque indica el destino y se reserva para conexiones útiles entre conceptos, noticias y fuentes.

## Próximos pasos

1. Definir metadatos de artículos: tipo, fecha, actualización, estado editorial, temas, instituciones, normas y fuentes.
2. Definir plantilla de noticia con hechos, posiciones atribuidas, consecuencias y fuentes.
3. Completar el glosario y el primer itinerario.
4. Diseñar etiquetas temáticas sin duplicar artículos.
5. Automatizar solo tras acordar la revisión editorial humana.

## Previsualización

La rama no se publica automáticamente en GitHub Pages si Pages apunta a main. Para probarla, usar un servidor estático local desde la raíz de la rama.

## Temas e idiomas

- Los colores se definen mediante variables semánticas en `assets/preferences.css`. Los componentes nuevos deben usarlas. Tema inicial: preferencia del sistema; el lector puede elegir claro u oscuro. La elección persiste cuando el navegador permite almacenamiento local.
- Idiomas iniciales de interfaz: `es`, `ca`, `gl`, `eu`, `ca-valencia`, `en`. Los nombres se muestran en su propia lengua, sin banderas. Los diccionarios están en `assets/locales.js`; las traducciones son borradores pendientes de revisión lingüística.
- La elección se conserva en los enlaces internos mediante `?lang=` y en el navegador. Un enlace con idioma explícito tiene prioridad. No se redirige según la ubicación del lector.
- Los artículos no se traducen sustituyendo palabras de la interfaz. Cada versión debe ser un HTML completo, legible sin JavaScript, con su `main[lang]`, título y descripción traducidos. Añadir nuevas versiones al registro `assets/content-translations.json`, agrupadas bajo un ID estable común. El selector consulta ese registro para abrir la versión equivalente.
- Las rutas del registro son relativas a la raíz del sitio, compatibles con GitHub Pages bajo un subdirectorio. Conservar anclas estables entre versiones. Añadir enlaces `rel="alternate" hreflang` y canonical al publicar versiones revisadas; no anunciar traducciones inexistentes a buscadores.
- Por ahora solo existe contenido en castellano. La interfaz cambia, pero se informa explícitamente cuando el artículo sigue en castellano y se mantiene su idioma real para lectores de pantalla. No publicar traducciones automáticas como revisadas.
- Antes de ampliar el catálogo, cada artículo deberá registrar: ID estable, idioma, versión del original, fecha de revisión, traductor/revisor y estado (`pendiente`, `borrador`, `revisado`). Un cambio sustancial del original exige revisar las traducciones relacionadas.
- Sin JavaScript se conserva el contenido castellano y la navegación original. Los controles de preferencias requieren JavaScript.
