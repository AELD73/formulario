# Formularios · Diplomado Máster Matemáticas (CONAMAT)

Sitio estático con los formularios de fórmulas del diplomado, organizados por
materia y bloque. Pensado para publicarse con **GitHub Pages**.

## Estructura

```
index.html                          → página de inicio (menú de materias)
assets/css/styles.css               → estilos base compartidos (colores, tipografía, topbar)
assets/css/formulario.css           → estilos propios de cada página de formulario
assets/js/formularios-data.js       → manifiesto: qué materias/bloques existen
assets/js/main.js                   → arma el menú a partir del manifiesto
formularios/aritmetica-bloque-6.html→ un formulario (uno por bloque)
```

## Publicar en GitHub Pages

1. Sube este repositorio a GitHub.
2. Entra a **Settings → Pages** y activa Pages sobre la rama `main`, carpeta raíz (`/`).
3. La página quedará en `https://<usuario>.github.io/<repo>/`.

## Cómo subir un nuevo formulario cada sábado

1. Copia `formularios/aritmetica-bloque-6.html` como plantilla y cambia:
   - El contenido de cada `<section class="block">` con las fórmulas del nuevo bloque.
   - El `<title>` y el encabezado (`doc-header`).
   - El link "← Todos los formularios" ya funciona igual en cualquier carpeta.
2. Guarda el archivo dentro de `formularios/`, con un nombre tipo
   `materia-bloque-N.html` (por ejemplo `algebra-bloque-2.html`).
3. Abre `assets/js/formularios-data.js` y agrega un objeto al arreglo
   `modulos` de la materia correspondiente:

   ```js
   {
     bloque: 2,
     titulo: "Productos notables",
     archivo: "formularios/algebra-bloque-2.html",
     fecha: "2026-08-07",
     disponible: true
   }
   ```

4. Sube los cambios (`git add`, `git commit`, `git push`). No hace falta tocar
   `index.html` ni `main.js`: el menú se genera solo a partir del manifiesto.

## Notas

- Cada formulario tiene su propio botón **"Descargar PDF"**, que abre el
  diálogo de impresión del navegador (los alumnos eligen "Guardar como PDF").
- Las fórmulas se renderizan con [MathJax](https://www.mathjax.org/) (CDN,
  no requiere instalación).
- Si un bloque todavía no tiene formulario, simplemente no lo agregues al
  manifiesto: la materia mostrará "Todavía no hay formularios publicados".
