# Democracia Explicada

Web estática para explicar la actividad del Congreso de los Diputados y ofrecer educación cívica en lenguaje claro. El proyecto está en fase inicial y todavía no publica resúmenes de sesiones.

## Estructura

- `index.html`: portada.
- `sesiones/index.html`: índice de sesiones (pendiente de contenido verificado).
- `aprende/index.html`: temas educativos previstos.
- `metodo/index.html`: principios editoriales iniciales.
- `assets/styles.css`: estilos compartidos.

No hay dependencias ni fase de compilación. Para verla localmente, abre `index.html` o ejecuta `python3 -m http.server 8000` en la raíz y visita `http://localhost:8000/`.

## GitHub Pages

1. Abre **Settings → Pages**; en **Build and deployment**, selecciona **Deploy from a branch**, `main` y `/ (root)`.
2. Cuando finalice la publicación, abre `https://thiamath.github.io/democracia-explicada/`.

El dominio personalizado aún no está configurado. Cuando registres uno, verifícalo y configúralo en **Settings → Pages → Custom domain**; después ajusta los registros DNS en el registrador y activa **Enforce HTTPS** cuando esté disponible. No añadas un archivo `CNAME` antes de decidir el dominio.

## Añadir contenido

Para una sesión, crea `sesiones/aaaa-mm-dd-asunto/index.html` y enlázala desde el índice. Para una guía, crea `aprende/tema/index.html`. Usa rutas relativas para que funcionen tanto bajo `/democracia-explicada/` como con dominio propio.

Antes de publicar un resumen, documenta fecha de sesión y publicación, órgano, estado del trámite, enlaces a fuentes oficiales, hechos comprobados, posiciones atribuidas y correcciones sustanciales. El método editorial debe concretarse antes de publicar los primeros resúmenes.

## Licencia

El repositorio incluye una licencia CC0 1.0. Comprueba las condiciones de reutilización de cualquier material ajeno que incorpores.
