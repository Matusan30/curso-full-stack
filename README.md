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

- **CASCADE**
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

- **Display**
  - Inline
    - Se ponen en la misma línea que la anterior
    - No se pueden cambiar ni el Width ni el Height, se ajustan al contenido
    - `span`
  - Block
    - Es el Default
    - Va un Block por línea
  - Inline-Block
    - Está entre el Inline y el Block
    - Se pueden asignar el Width y el Height
    - Los elementos van en una misma línea
  - None
    - Lo que va con None, desaparece de la página
- **Float**
  - Se usa cuando queremos que un texto "abrace o rodee" una imagen
  - El texto se acomoda alrededor de la imagen, como un diario
  - En la IMAGEN: `float: right;` / `float: left;`, dependiendo de qué lado queremos que esté la imagen
  - `clear`: Esta propiedad se le asigna a los elementos que queremos que NO cumplan con el float...
    - Ej: Un footer, no queremos que esté alrededor de una imagen, sino abajo del todo ocupando todo el largo de la página
    - Puede ser `clear: right, left, both`, dependiendo de qué queremos que esté libre
- **Web Responsiveness**
  - **Media Queries**
    - Sintaxis: `@media (max-width: XXXpx) { ... }`
    - Lo que va entre paréntesis se llama "breakpoint", es la condición que debe cumplir
      - `max-width`
      - `min-width`
      - Se puede combinar para hacer un intervalo: `(max-width: 100px) and (min-width: 50px)`
      - También puede tener la sintaxis `(XXXpx <= width <= XXXpx)`, pero esto solo funciona en exploradores modernos
    - Solo se fija en el CSS dentro de los {} cuando el ancho es menor a "XXXpx"
  - **CSS Grid**
  - **CSS Flexbox**
  - **Frameworks** (Bootstrap, etc)

## Sección 9: FlexBox

- Es bueno para hacer Layouts 1D (sobre una misma línea)
- Funciona igual que el Grid (un div que contiene otros divs)
- [Guía de Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- Al div padre se le pone la regla `display: flex;`
- **Opciones**
  - `flex-direction: [ row // column ];`: Indica como se orientan los elementos, si horizontales o verticales
  - `gap: XXpx`: La distancia entre elementos
  - `flex-basis: XXXpx;`
    - Es la longitud de las boxes
    - Se pone la regla en los hijos del contenedor
  - `order: X;`
    - Especifica el orden de los elementos
    - Mientras más grande el número que tenga asignado más al último va
    - Va en cada elemento, el default es 0
  - `flex-wrap: [ wrap // nowrap ];`
    - Si cuando se pasa del largo de página, sigue abajo (wrap); sino queda fuera de la página (nowrap)
    - Es una propiedad del contenedor
  - `justify-content: [ flex-start // center // flex-end ];`
    - Es como el alinear texto de Word, si arranca de la izquierda (start), de la derecha (end), o está centrado (center)
  - `height: XXXpx;`: la altura del contenedor
  - `align-items`: Hace los mismo que el justify-content, pero en vertical
  - `align-self:`: Funciona como el align-items, pero solo en un elemento
  - `align-content`: Si está `flex-wrap: wrap;`, se usa este en vez del `align-items`
  - `flex-flow: [ flex-direction ] [ flex-wrap ]`: Permite cambiar ambos valores en una misma regla
- [Juego de la Ranita para Aprender FlexBox](https://appbrewery.github.io/flexboxfroggy/)
- **Espaciado**
- Prioridad de las reglas: min-width / max-width > flex-basis > width > content-width
- `flex-grow: [ 0 // 1 ];`: habilitar o no que se expanda, al expandir la página
- `flex-shrink: [ 0 // 1 ];`: habilitar o no que se comprima, al expandir la página
- Versión más compacta de escribir: `flex: [grow] [shrink] [basis];`

## Sección 10: Grid

- Es bueno para hacer Layouts 2D (En una página)
- Se comporta como una grilla, alinea todo en filas y columnas
- Se hace un div que contenga todos los otros divs
- Se puede imaginar como un ajedrez o una matriz, con las casillas, y con los índices
Los elementos de un Grid son:
- **Contenedor**
  - Al div padre se le pone la regla `display: grid;`
  - Se asignan la cantidad de filas y columnas y su respectivo tamaño mediante
    - `grid-template-columns: 1fr 1fr`: Esto quiere decir que el Grid va a tener 2 columnas de igual tamaño (1fr = 1 Fracción, el `fr` toma el largo entero de la página), divide la página en 2
    - `grid-template-rows: 100px 200px 200px`: El Grid va a tener 3 filas de esas medidas en px
  - `gap: XXXpx`: esto especifica el espacio entre los elementos
  - Se puede usar `grid-template: [rows] / [columns]`, de forma resumida
  - En vez de `grid-template 200px 200px 200px;`, podemos usar la función `repeat([cantidad de veces], [tamaño])` (en este caso sería `repeat(3, 200px)`)
  - Cuando tenemos una cantidad de elementos mayor al tamaño del Grid, podemos asignarles un tamaño con `grid-auto-rows: XXXpx;`
  - Se pueden inspeccionar con las Developer's Tools de Chrome
  - `minmax([min], [max])` se puede usar para darle un rango de píxelesa a un elemento (que no se achique más que esto y no se agrande más que esto)
- **Tracks**
  - Son como las Pool Lines
- **Cells**
  - Es el elemento más pequeño de la Grid, es en donde se cortan dos Tracks, cada cuadradito
- **Lines**
  - Son las que separan los tracks, es literalmente el `gap`
- **Items**
  - Es el contenido, puede ocupar varias Cells
  - `grid-column: span [numero]`: Empieza en donde debe, y ocupa X cells, se puede asignar de forma "absoluta" con:
    - `grid-column-start`: es en qué cell empieza el item
    - `grid-column-end`: es en qué cell termina el item
  - Para las filas es lo mismo, con `grid-row`
  - Se puede simplificar el código con `grid-area: [row-start] / [column-start] / [row-end] / [row-start];`
  - Cúal va primero y cual segundo, depende del `order: [número]`, cuanto más grande sea, más al último va
- [Juego del Jardín para practicar Grid](https://appbrewery.github.io/gridgarden/)

## Sección 11: Booststrap

- Es un Framework Open-Source de CSS
  - Otros son: Foundation, TailWind, MUI
  - ***PROS***
    - Son útiles porque ya tienen las cosas hechas, esto nos permite ser más eficientes y desarrollar más rápido que si tuviesemos que programar todo desde cero
    - Buena compatibilidad con los distintos navegadores
  - ***CONTRAS***
    - Como el CSS con Bootstrap se aplica mediante las clases en los elementos del HTML, es muy difícil poder separar el HTML y el CSS
    - No es tan customizable como si lo programaras desde cero (pensar en Windows vs Linux)
  - Usar sí: Querés armar una página rápido y que tenga una buena estética
  - No usar sí: Estás armando una página sencilla y/o querés máximo control sobre el Front

- **Como Usarlo**
  - [Página Bootstrap](https://getbootstrap.com/)
  - Incluirlo via CDN (Content Delivery Network)
    - Si queremos solo el CSS, se copia el `link` en el `<head>`
    - Si también queremos algo de JS (menús deplegables, etc), se copia el `script` al final del `</body>`
  - Instalarlo via Gestor de Paquetes (npm, RubyGems, etc)
    - Tener el Gestor de Paquetes instalado
    - En la terminal pegar la instrucción que está en la página

- **Sistema de 12 Columnas**
  - Hay una clase padre `container`, que tiene una clase hijo `row`, y esta tiene las `col`
  - La estructura sería: `container` -> `row` -> `col`
  - Bootstrap le asignará automáticamente el espacio para que los items ocupen todo el largo de la row
  - Cada `row` tiene espacios para 12 columnas, entonces si ponemos un número a cada columna (ej: `col-[1-12]`), esta ocupará la cantidad de espacios de ese número
  - También se le pueden asignar tamaños para que sea Responsive

  | Breakpoint | Class infix | Dimensions | Uso |
  | :--- | :--- | :--- | :--- |
  | Extra small | *None* | <576px | Nada |
  | Small | `sm` | ≥576px | Mobile |
  | Medium | `md` | ≥768px | Tablet |
  | Large | `lg` | ≥992px | Laptop |
  | Extra large | `xl` | ≥1200px | Desktop |
  | Extra extra large | `xxl` | ≥1400px | TV |

  - Entonces, para que un elemento ocupe la mitad de la pantalla en pc, se debe poner en su clase `col-xl-6`, pq 6 es la mitad de 12, y así
  - [Página para Practicar el Sistema de 12 Columnas](https://appbrewery.github.io/bootstrap-layout/)

- **Componentes**
  - Botones
    - Se le pone la etiqueta `btn` en donde va la clase
    - Para modificarlo se le agregan las distintas etiquetas que se pueden ver en la documentación
  - Cards
    - Se copia y pega, y luego se modifica el código de la documentación
  - Nav Bar
    - Se pueden ver en la documentación o en la página de Examples
  - Íconos (SVG)
    - Se pueden copiar directo desde la [página de Bootstrap](https://icons.getbootstrap.com/) o descargar y pegar como imagen
  - Carrusel
  - Footer
  - Todos se puede copiar y pegar desde [acá](https://getbootstrap.com/docs/5.3/examples/)
- **Espaciado**
  - Se puede ver la documentación de Bootstrap [acá](https://getbootstrap.com/docs/5.3/utilities/spacing/)
- **Modo Oscuro**
  Para poner modo oscuro solo basta con poner en la cabecera del HTML lo siguiente `<html data-bs-theme="dark">`
- Se pueden ver algunas plantillas de Bootstrap [acá](https://www.w3schools.com/bootstrap/bootstrap_templates.asp)

## Sección 12: Web Design

- **Teoría del Color**
  - [Página para ver paletas de colores](https://colorhunt.co/)
- **Tipografía**
- **UI Interface**
  - Jerarquía
    - Color (algo más brilloso o que sobresalga sobre otra cosa más apagada)
    - Tamaño (las cosas más grandes llaman más la atención)
  - Layout
    - Cada línea de texto debería medir entre 40 y 60 caracteres y 6 a 10 palabras
  - Alineado (todo debería estar alineado a la misma línea, mientras más líneas haya, peor)
  - Espacio Vacío
    - No debe estar todo junto apretado, sino que haya espacios vacíos
    - Más minimalista
  - Todo lo anterior DEPENDE DE LA AUDENCIA
- **User Experience (UX)**
  - Simplicidad
    - Que sea simple a la vista y de usar, que no te abrume como usuario
  - Consistencia
    - Que toda la página sea consistente, por ej. que una NavBar al cambiar de página quede con el mismo orden
  - Web Responsiveness
    - Que al pasar de Desktop a Celu y viceversa que escale bien
  - No seas un HDP, nada de clickbait ni esas cosas
- Todo esto se puede practicar en [Canvas](https://www.canva.com)

## Sección 14: Introducción a JavaScript (JS)

- Es un lenguaje interpretado
- Es compatible con todos los navegadores
- Chrome tiene una consola de JS (F12 -> Console), pero la forma más cómoda de usarlo es en `Sources` -> `>>` -> `Snippets`
- Sintaxis: funcion(mensaje);
- [Guía de Buenas Prácticas](https://github.com/rwaldron/idiomatic.js)
- Los comentarios se hacen con `//`
- **Tipos de datos**
  - string
  - number
  - array
- **Tratamiento de Cadenas (strings)**
  - `alert([str]);`: muestra una alerta de texto
  - `typeof([algo]);`: devuelve qué tipo de dato es
  - `prompt([String]);`: le pide un dato al usuario, es como un input de Python
  - `var [nombre] = [valor];`: se usa para crear una variable
  - Se usa el `+` para concatenar `str`
  - `[str].length;`: cuenta el número de caracteres del `str`
  - `[var].slice([principio (0)], [fin]);`: permite cortar un pedazo de texto
  - `[var].toUpperCase();`: te lo convierte a mayúscula
  - `[var].toLowerCase();`: minúscula
- **Operaciones Aritméticas**
  - Sintaxis: `var a = b [operador] c;`
  - Operadores
    - `+`: suma
    - `-`: resta
    - `*`: multiplicación
    - `/`: división
    - `%`: módulo (resto)
    - `x = x + 1; | x++;`: incrementador
    - `x = x - 1; | x--;`: decrementador
    - `x = x + y; | x +=y;`: acumulador
    - `Math.random();`: genera un número aleatorio entre 0 y 0.9999999999999999
      - Después hay que multiplicarlo por el rango que queremos (n) (para un dado, 6)
      - Y si queremos, redondearlo, se usa `Math.floor([var]);`
      - Va de 0 a n-1, así que si queremos tener el intervalo 1-n, le tenemos que sumar 1
- **Funciones**
  - Sintaxis: `function [nombre](parámetros) { ... }`
  - `return [valor];`
- **Condicionales**
  - Sintaxis `if (condición) { ... } else { ... }`
  - Comparadores Lógicos
    - `===`: igual (también checkea el tipo de dato) (1 =/= "1")
    - `==`: igual (no checkea el tipo de dato) (1 = "1")
    - `!==`: distinto
    - `< / > / <= / >=`: menor / mayor / menor o igual / mayor o igual
    - `&&`: y
    - `||`: or
    - `!`: negado
- **Arrays**
  - Sintaxis: `var nombreArray = [ 0, 1, 2, 3, ...];`
  - `nombreArray.length;`: devuelve la cantidad de elementos del array
  - `nombreArray.includes(elemento);`: devuelve true si el elemento está en el array
  - `nombreArray.push(elemento);`: mete el elemento al último del array
  - `nombreArray.pop();`: saca el último elemento del array
- **Ciclos**
  - while
    - Sintaxis: `while (condición) { ... }`
    - No seas culiado y te olvides la condición de corte nomás
  - for
    - Sintaxis: `for (inicio; corte; incremento) { ... }`
      - Ej: `for (i=0; i<2; i++) { ... }`
