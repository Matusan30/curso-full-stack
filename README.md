# Curso Full Stack Web Development

Acá voy a ir haciendo mi toma de notas de cada comando.

## Sección 2 (HTML Básico)

- **Heading** (`h1`, `h2`, etc)
- **Paragraph** (`p`)
- **Void (self closing)**
  - `hr` (barrita horizontal)
  - `br` (salto de línea)

## Sección 3 (HTML Intermedio)

- **Listas** (cada elemento se pone con `li`)
  - **Listas Ordenadas** (`ol`)
  - **Listas Desordenadas** (`ul`)
- **Anidamiento (Nesting)**
- **Links** (`a href`)
- **Imágenes** (`img`)
  - `src` (link a la imagen)
  - `alt` (texto alternativo)

## Sección 4 (HTML Multipágina)

- Rutas Relativas y Absolutas
- Multi Páginas
- **Esqueleto de HTML** (`!DOCTYPE`)
  - `head` (no se muestra en la página)
    - `meta charset`
    - `title`
    - `http-equiv` (para compatibilidad con navegadores, se puede borrar)
    - `viewport` (define cómo se ve la página)
  - `body`

Atajo para crear todo en VSCode:  !

## Sección 5 (CSS)

- Tienen la sintaxis: `atributo:valor;`  
  Ejemplo: `<h1 style="color:blue;" >Titulo</h1>`

- **Cómo añadir CSS a un HTML**
  - **Inline** (no recomendado, dentro de cada elemento del HTML)
    - Se usa solo para editar **un único elemento**
    - Va dentro del atributo `style=""`
  - **Internal** (dentro del archivo `.html`, una sola página)
    - Se usa solo para modificar **un único HTML**
  - **External** (archivo `.css`, el método más usado)
    - Se usa un único `style.css` para varios HTML
    - Es útil para multipágina
    - Es un archivo "style.css" aparte, y se "linkea" (con el elemento `link`) a cada HTML (en el `head`)
    - Cabe aclarar que se debe editar cada elemento por separado