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
  - `background-color`: permite cambiar el color del fondo de HTML
  - `color`: cambia el color del texto
- **Fuente**
  - `font-weight`: Es el "peso", qué tan gorda es la letra
    - bold (negrita), normal, lighter, etc.
    - Se puede poner en números [100-900]
  - `font-size`: El tamaño de la letra
    - **Estátitcos**
      - En píxeles (px)
      - En puntos, es como en word (pt)
    - **Relativos**
      - `em`: La cantidad de veces el tamaño del padre (tamaño relativo al padre)
        - Si el padre tiene 20px, y el hijo tiene `1em`, tendrán el mismo tamaño
        - Si el padre tiene 20px, y el hijo tiene `2em`, el hijo tendrá el doble (40px), y así
      - ´rem´: Relativo al ´root´ (suele ser el elemento `HTML`), suele ser más consistente que `em`
  - `font-family`: La fuente per sé
      - Arial, Calibri, etc
      - Las que son varias palabras se ponen entre comillas dobles: "Times New Roman"
      - Se pone una fuente, y luego una genérica (es como el alt de las imágenes)
      - `font-family: Helvetica, sans-serif`
      - [Página para ver Fuentes](https://fonts.google.com/)
        - Hay que copiar todos los links en el head, y luego hace la regla de CSS
  - `text-align`: A donde estará alineado el texto
    - [Opciones de Alineado](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/text-align)
  - `text-transform`: cambia como pone las mayúsculas
    - `uppercase`: Todo el texto en mayúscula
    - `lowercase`: Todo el texto en minúscula
    - `capitalise`: La primera letra de cada palabra en mayúscula

- **Box Model**
  - `margin`: Está afuera (separa de las otras cosas)
  - `border [tamaño] [tipo] [color]`: Es el borde, en donde:
    - Tamaño en px
    - Tipo (dotted, solid, dashed, etc) 
  - `padding`: es el "margen interno", deja un espacio alrededor del contenido
  - A ESTOS SE LOS PUEDE CAMBIAR DE LOS CUATRO LADOS, Y VAN EN SENTIDO HORARIO EMPEZANDO DE ARRIBA `padding: 10px 10px 10px 10px;`

## Sección 7: CSS Intermedio

- **CASCADE**: 
  - Es como funciona el nivel de importancia de las reglas del CSS, de más importante a menos importante:
    1. Importancia `!important`: cuando se pone la palabra important, toma esa regla como la de mayor importancia
    2. Tipo: Según la forma en la que se aplica el CSS (en orden de importancia, 1. Inline, 2. Internal, 3. External)
    3. Especificidad: Mientras más específico, más importancia (el id es más importante que la clase, que es más importante que el elemento, y así)
    4. Posición: Mientras más abajo en el código esté la regla, más importancia tiene

- **Combinar Selectors**
  - Se pueden combinar distintos Selectors para poder seleccionar un elemento del HTML en específico
    - Grupo
      - Los Selectors están separados por comas, se genera un "grupo" y aplica las reglas a todos los elementos del grupo
      - `h1, h2 {color: blue;}`: Pinta de Azul el h1 y el h2
    - Hijo
      - Se separan mediante `padre > hijo`, y aplica SOLO A HIJOS DIRECTOS
    - Descendiente
      - `s_padre s_hijo { ... }`: Se separan con un espacio.
      - Hace referencia a un descendiente de cualquier nivel (No solo Hijo Directo)
    - En cadena
      - `selectorSelector { ... }`: Se encadenan los Selectors tal que se seleccionará al que cumpla con todas las condiciones
      - `p.item#importante { .. }`: Esto seleccionará un parrafo de la clase "item" que tenga el id "importante"
    - Combinar Combinadores
      - Se pueden hacer combinaciones entre los combinadores de arriba
  
  - **Posición**
    - Estática
      - Es la default de HTML
      - HTML ordena las cosas una abajo de la otra
    - Relativa
      - Es la posición relativa a la default ("desde donde estabas por default movete x pixeles a la derecha)
    - Absoluta
      - Si tiene un ancestro (padre) con una posición relativa, el elemento se posicionará de forma relativa al padre
      - Si no, se posicionará de forma relativa a la esquina superior izquierda de la pantalla
      - Z-Index: Determina qué elementos están arriba de otros y viceversa (la pág es como un plano coordenado)
        - Mientras más alto sea el Z-Index, más "arriba se muestra"
    - Fija (Fixed)
      - Queda fija con una posición relativa a la esquina superior izquierda
      - No importa si scroleamos, se moverá para quedarse en ese lugar... sirve para un header
  
  ## Sección 8: CSS Avanzado

  - Display
    - Inline
      - Se ponen en la misma línea que la anterior
      - No se pueden cambiar ni el Width ni el Height, se ajustan al contenido
      - `span`: 
    - Block
      - Es el Default
      - Va un Block por línea
    - Inline-Block
      - Está entre el Inline y el Block
      - Se pueden asignar el Width y el Height
      - Los elementos van en una misma línea
    - None
      - Lo que va con None, desaparece de la página
  - Float
    - Se usa cuando queremos que un texto "abrace o rodee" una imagen
    - El texto se acomoda alrededor de la imagen, como un diario
    - En la IMAGEN: `float: right;` / `float: left;`, dependiendo de qué lado queremos que esté la imagen
    - `clear`: Esta propiedad se le asigna a los elementos que queremos que NO cumplan con el float...
      - Ej: Un footer, no queremos que esté alrededor de una imagen, sino abajo del todo ocupando todo el largo de la página
      - Puede ser `clear: right, left, both`, dependiendo de qué queremos que esté libre
  - Web Responsiveness
    - Media Queries
      - Sintaxis: `@media (max-width: XXXpx) { ... }`
      - Lo que va entre paréntesis se llama "breakpoint", es la condición que debe cumplir
        - `max-width`
        - `min-width`
        - Se puede combinar para hacer un intervalo: `(max-width: 100px) and (min-width: 50px)`
        - También puede tener la sintaxis `(XXXpx <= width <= XXXpx)`, pero esto solo funciona en exploradores modernos
      - Solo se fija en el CSS dentro de los {} cuando el ancho es menor a "XXXpx"
    - CSS Grid
      - Es bueno para hacer Layouts 2D (En una página)
      - Se hace un div que contenga todos los otros divs
      - Al div padre se le pone la regla `display: grid;`
      - Se asignan la cantidad de filas y columnas y su respectivo tamaño mediante: 
        - `grid-template-columns: 1fr 1fr`: Esto quiere decir que el Grid va a tener 2 columnas de igual tamaño (1fr = 1 Fracción), divide la página en 2
        - `grid-template-rows: 100px 200px 200px`: El Grid va a tener 3 filas de esas medidas en px
      - `gap: XXXpx`: esto especifica el espacio entre los elementos
    - CSS Flexbox
      - Es bueno para hacer Layouts 1D (sobre una misma línea)
      - Funciona igual que el Grid (un div que contiene otros divs)
      - Al div padre se le pone la regla `display: flex;`
    - Frameworks (Bootstrap, etc)
  