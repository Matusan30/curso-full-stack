# Curso Full Stack Web Development

Acá voy a ir haciendo mi toma de notas del curso de Desarrollo Full Stack de Udemy.

## Sección 2: HTML Básico

- **Heading** (`h1`, `h2`, etc)
- **Paragraph** (`p`)
- **Void (self closing)**
  - `hr` (barrita horizontal)
  - `br` (salto de línea)

## Sección 3: HTML Intermedio

- **Listas** (cada elemento se pone con `li`)
  - **Listas Ordenadas** (`ol`)
  - **Listas Desordenadas** (`ul`)
- **Anidamiento (Nesting)**
- **Links** (`a href`)
- **Imágenes** (`img`)
  - `src` (link a la imagen)
  - `alt` (texto alternativo)

## Sección 4: HTML Multipágina

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

## Sección 5: Introducción a CSS

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

- **Selectors**
  - `class="[nombre]"`: se aplican el CSS a la clase
    - En HTML `<h1 class="rojo">Titulo</h1>`
    - En CSS `.rojo{color:red}`
      - Es importante el `.` para poder acceder a la clase
  - `id="[nombre]"`: se van a aplicar los atributos a ESE ÙNICO elemnto
    - En HTML `<h1 id="title">Titulo</h1>`
    - En CSS `#title {color:brown}`
      - Lo que referencia al id es el `#`
  - Según sus atributos
    - `p[atributo]{color: red;}`
      - Esto es: "A todos los párrafos que tengan el atributo `atributo`, aplicale el CSS"
      - Es como un condicional
  - `*`: es el all de toda la vida, aplica el CSS a todo

## Sección 6: Propiedades de CSS

- **Colores**
  - Los colores con nombre están en [Documentación Colores](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Values/named-color)
  - [Página para ver Paletas de Colores](https://colorhunt.co/) (con Hexa o RGB)
  - ´background-color´: permite cambiar el color del fondo de HTML
  - ´color´: cambia el color del texto
- **Fuente**
  - ´font-weight´: Es el "peso", qué tan gorda es la letra
    - bold (negrita), normal, lighter, etc.
    - Se puede poner en números [100-900]
  - ´font-size´: El tamaño de la letra
    - **Estátitcos**
      - En píxeles (px)
      - En puntos, es como en word (pt)
    - **Relativos**
      - ´em´: La cantidad de veces el tamaño del padre (tamaño relativo al padre)
        - Si el padre tiene 20px, y el hijo tiene ´1em´, tendrán el mismo tamaño
        - Si el padre tiene 20px, y el hijo tiene ´2em´, el hijo tendrá el doble (40px), y así
      - ´rem´: Relativo al ´root´ (suele ser el elemento ´HTML´), suele ser más consistente que ´em´
  - ´font-family´: La fuente per sé
      - Arial, Calibri, etc
      - Las que son varias palabras se ponen entre comillas dobles: "Times New Roman"
      - Se pone una fuente, y luego una genérica (es como el alt de las imágenes)
      - ´font-family: Helvetica, sans-serif´
      - [Página para ver Fuentes](https://fonts.google.com/)
        - Hay que copiar todos los links en el head, y luego hace la regla de CSS
  - ´text-align´: A donde estará alineado el texto
    - [Opciones de Alineado](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align)
  - ´text-transform´: cambia como pone las mayúsculas
    - ´uppercase´: Todo el texto en mayúscula
    - ´lowercase´: Todo el texto en minúscula
    - ´capitalise´: La primera letra de cada palabra en mayúscula

- **Box Model**
  - ´margin´: Está afuera (separa de las otras cosas)
  - ´border [tamaño] [tipo] [color]´: Es el borde, en donde:
    - Tamaño en px
    - Tipo (dotted, solid, dashed, etc) 
  - ´padding´: es el "margen interno", deja un espacio alrededor del contenido
  - A ESTOS SE LOS PUEDE CAMBIAR DE LOS CUATRO LADOS, Y VAN EN SENTIDO HORARIO EMPEZANDO DE ARRIBA

