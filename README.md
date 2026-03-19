# Curso Full Stack Web Development

Acá voy a ir haciendo mi toma de notas del curso de Desarrollo Full Stack de Udemy.

## Índice

- [x] [Sección 2: HTML Básico](#sección-2-html-básico)
- [x] [Sección 3: HTML Intermedio](#sección-3-html-intermedio)
- [x] [Sección 4: HTML Multipágina](#sección-4-html-multipágina)
- [x] [Sección 5: Introducción a CSS](#sección-5-introducción-a-css)
- [x] [Sección 6: Propiedades de CSS](#sección-6-propiedades-de-css)
- [x] [Sección 7: CSS Intermedio](#sección-7-css-intermedio)
- [x] [Sección 8: CSS Avanzado](#sección-8-css-avanzado)
- [x] [Sección 9: FlexBox](#sección-9-flexbox)
- [x] [Sección 10: Grid](#sección-10-grid)
- [x] [Sección 11: Bootstrap](#sección-11-bootstrap)
- [x] [Sección 12: Web Design](#sección-12-web-design)
- [x] [Sección 14 y 15: Introducción a JavaScript (JS) e Intermedio](#sección-14-y-15-introducción-a-javascript-js-e-intermedio)
- [x] [Sección 16: Document Object Model (DOM)](#sección-16-document-object-model-dom)
- [x] [Sección 17: Juego de los Dados](#sección-17-juego-de-los-dados)
- [x] [Sección 18: JS Avanzado y Manipulación de DOM](#sección-18-js-avanzado-y-manipulación-de-dom)
- [x] [Sección 19: JQuery (Framework de JS)](#sección-19-jquery-framework-de-js)
- [x] [Sección 20: Simon](#sección-20-simon)
- [x] [Sección 21: Comandos Unix](#sección-21-comandos-unix)
- [x] [Sección 22: Backend](#sección-22-backend)
- [x] [Sección 23: Node.js](#sección-23-nodejs)
- [x] [Sección 24: Express](#sección-24-express)
- [ ] [Sección 25: EJS (Embedded JS)](#sección-25-ejs-embedded-js)
- [ ] [Sección 26: Proyecto de Aplicación Web (Blog)](#sección-26-proyecto-de-aplicación-web-blog)
- [ ] [Sección 27: Git, GitHub y Control de Versiones](#sección-27-git-github-y-control-de-versiones)
- [ ] [Sección 28: APIs (Application Programming Interface)](#sección-28-apis-application-programming-interface)
- [ ] [Sección 29: Proyecto de APIs](#sección-29-proyecto-de-apis)
- [ ] [Sección 30: Construir tu propia API](#sección-30-construir-tu-propia-api)
- [ ] [Sección 31: Base de Datos](#sección-31-base-de-datos)
- [ ] [Sección 32: SQL](#sección-32-sql)
- [ ] [Sección 33: PostgreSQL](#sección-33-postgresql)
- [ ] [Sección 34: Proyecto Nota de Libros](#sección-34-proyecto-nota-de-libros)
- [ ] [Sección 35: Autenticación y Seguridad](#sección-35-autenticación-y-seguridad)
- [ ] [Sección 36: React.js](#sección-36-reactjs)
- [ ] [Sección 37: Web3 Descentralizado (DApp)](#sección-37-web3-descentralizado-dapp)
- [ ] [Sección 38: Defi (Decentralised Finance) App](#sección-38-defi-decentralised-finance-app)
- [ ] [Sección 39: IPC Live Blockchain](#sección-39-ipc-live-blockchain)
- [ ] [Sección 40: DApps en ICP con Frontend de React](#sección-40-dapps-en-icp-con-frontend-de-react)
- [ ] [Sección 41: NFTs y crear un mercado NFT](#sección-41-nfts-y-crear-un-mercado-nft)

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

- **Proyecto Portafolio v1**
- [Link al repositorio](github.com/Matusan30/curriculum-vitae-curso-v1)

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

- **Botones**
  - Para cambiar de imagen de fondo `background-image: url([path]);`

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

## Sección 11: Bootstrap

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

## Sección 13: Portafolio V2

- [Link al repositorio](https://github.com/Matusan30/curriculum-vitae-curso-v2)

## Sección 14 y 15: Introducción a JavaScript (JS) e Intermedio

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

## Sección 16: Document Object Model (DOM)

- **Agregar JS a una página**
  - Al igual que en CSS, se puede agregar JS
    - Inline: `<body onload=" ... ;">`
      - Evitar
    - Internal: `<script type="text/javascript"> ... </script>`
      - Va dentro del mismo HTML
    - External: `<script scr="archivo.js" charset="utf-8"></script>`
      - Se pone la ubicación del archivo.js en `scr`
  - Es importante el orden en el que se ponen las cosas, porque HTML va línea por línea
    - El CSS se pone en el `<head>` para que lo lea antes que todo el resto
    - El script de JS se pone al último, justo antes del `</body>`, porque queremos que esté todo creado antes de ponernos a modificarlo
- El DOM es lo que permite que la página pase de un HTML estático a algo interactivo, lo que hace es convertir los elementos del HTML, que al fin y al cabo sigue siendo texto plano, en objetos para que JS los pueda usar, es como el "traductor"
- Puede ser representado gráficamente como un árbol, en donde el padre es un contenedor y los hijos son los elementos que están dentro.
- Que esté representado como árbol es lo permite a JS viajar por la estructura
- Cada objeto del DOM tiene propiedades (atributos) y métodos (comportamiento)
- Obtener el valor de una propiedad: `[objeto].[propiedad];`
- Asignar el valor de una propiedad: `[objeto].[propiedad] = [nuevoValor];`
- Llamar métodos de un objeto: `[objeto].metodo();`
- **Buscar un elemento**
  - Se puede usar `document.querySelector()` para seleccionar los elementos, y se asignan a una variable
    - `document.querySelector('#id')` para IDs
    - `document.querySelector('.clase')` para clases
    - `document.querySelector('div > p')` selectores complejos
    - `querySelector` te devuelve el primero que encuentra y `querySelectorAll` te devuelve una lista con todos los que cumplen
  - También se puede hacer recorriendo el árbol
    - `children`: lista todos los hijos
    - `firstElementChild`: va directo al primer hijo
    - `lastElementChild`: va directo al último hijo
    - `parentElement`: va al padre
    - `nextElementSibling` y `previousElementSibling` para moverse dentro de la misma rama
  - Otra forma es con los `getElementsby`
    - `document.getElementsbyTagName([nombre])`: devuelve una lista con todos los elementos de ese tipo (li, p, etc)
    - `document.getElementsByClassName('clase')`: devuelve una lista con todos los elementos de esa clase
    - `document.getElementById('id')`: como el ID es único, devuelve un solo elemento
- **Cambiar Propiedades del Style**
  - Para cambiar el color se usa `[objeto].style.color = "color";`
  - El resto están en la [documentación](https://www.w3schools.com/jsref/dom_obj_style.asp)
- **Cambiar Propiedades del Texto**
  - Para cambiar lo que el objeto lleva dentro `[objeto].innerHTML = "nuevo";`, esto modifica todo lo que esté adentro del objeto (por ejemplo, si tiene un `<strong>`)
  - Para cambiar SOLO el texto, se usa `[objeto].textContent = "nuevo";`, esto toca únicamente al texto
- **Cambiar Atributos**
  - `[objeto].attributes;` muestra la lista de atributos del objeto
  - Con `[objeto].getAttribute("nomAtributo");` se puede acceder al atributo
  - Con `[objeto].setAttribute("nomAtributo", "cambio");` se cambia el valor del atributo
- **Separación de Incumbencias**
  - El HTML se encarga del contenido
  - El CSS se encarga del estilo
  - El JS se encarga de la funcionalidad
  - No se deberían interferir entre ellos, es una mala práctica cambiar el CSS desde JS por ejemplo
  - Lo que se hace es, se le aplican los atributos de CSS a una clase de antemano, y via JS, se le agrega o elimina la clase al objeto
    - `objeto.classList;`: muestra una lista de las clases a las que pertenece el objeto
    - `objeto.classList.add("clase");`: permite agregar una clase al objeto
    - `objeto.classList.remove("clase");`: permite eliminar una clase al objeto
    - `objeto.classList.toggle("clase");`: si el objeto no tiene la clase, la agrega, si la tiene, la elimina

## Sección 17: Juego de los Dados

- **Hecho**

## Sección 18: JS Avanzado y Manipulación de DOM

- **EventListener**
  - `[objeto].addEventListener("type", listener);`: cuando escucha al objeto, llama al listener (que suele ser una función de JS)
  - `button1.addEventListener("click", funcion1);`: cuando clickeen el botón, llama a la función1 (a la cual no se le ponen los paréntesis)
  - [Documentación](https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener)
  - `this`: es un puntero al objeto que activó el eventListener
  - `document.addEventListener("keydown", funcion2(event));`: cuando se presione una tecla, llama a la función2
- **Función Anónima**
  - Tiene esta forma<.> `function () { ... }` (no tiene nombre)
  - Se usan cuando necesitas que se ejecutan de forma inmediata o temporal sin ensuciar el código con nombres de funciones que se ejecutarán una sola vez, ej: eventListener
- **Funciones de Orden Superior**
  - Son funciones que reciben como parámetros otras funciones
- **Switch Statements**
  - Es como un Case of, para evaluar muchas condiciones, en vez de una como el if
  - Mucho más legible si tenemos más de 3 condiciones
  - `switch (expression) { case valor1: ... break; default:}`
    - La expression es en lo que se va a fijar (que va a comparar)
    - Cada `case` es una de las posibles opciones, al último de cada case va un `break;`
    - Entre el `case valorX:` y el `break;` van todas las instrucciones que querés que se ejecuten
    - Al final va un `default:`, en el que va a caer si no entra en ningún case (es como el else final)
- **Debugger de Chrome**
  - Es una herramienta de Chrome que te deja debugear el código, se usa: `debugger; funcionDebugear(parametros);`, y te lo abre
- **Objetos**
  - Sintaxis: `var [Nombre] = { atr1: valor1, ... }`
  - Para acceder a un atributo, `[nombre].atrX`
  - Para crear muchos objetos de forma más cómoda, se puede utilizar una función constructora, que es como hacer una clase
    - sintaxis `function [nombre] (atr1, atr2, ... ) { this.atr1 = valor1; this.atr2 = valor2; ... }`
    - El nombre debe estar en Upper Camel Case (la primer letra en mayúscula)
    - Y al crear los objetos: `var nom1 = new Nombre(val1, val2, ... );`
  - Métodos
    - `this.[nombre] = function() { ... }`: para crear el método
    - `[objeto].[método]();`: para acceder al método
- **Reproducir Audio**
  - Se debe crear un nuevo objeto de la clase Audio: `var nombre = new Audio([path]);`
  - Y luego ejecutar el método `[nombre].play();` para reproducirlo

## Sección 19: JQuery (Framework de JS)

- Es una librería de JS que simplifica el uso de las Querys
- Como importar jQuery
  - Via CDN
    - Se copia y pega el siguiente script [JQuery](https://developers.google.com/speed/libraries#jquery)
    - Y se pega ARRIBA del archivo JS
  - Via Gestor de Paquetes (npm)
- Sintaxis `$("elemento")` o `jQuery("elemento")`, esto reemplaza al `document.querySelector("elemento")`
- **Cambiar Estilo**
  - `$("elemento").css("propiedad", "nuevoValor");`: si se pone solo la propiedad, te devuelve el valor, si se le pasa propiedad y nuevoValor, lo cambia
  - De todos modos, es una mala práctica tocar el CSS dentro del JS, lo que se hace es tener previamente una clase creada en el CSS, y se le agrega o saca esa clase via JS
- **Manipular Clases**
  - `$("elemento").addClass("clase1 clase2");`: para agregar una clase de un elemento
  - `$("elemento").removeClass("clase1 clase2");`: para eliminar una clase de un elemento
  - `$("elemento").hasClass("clase1");`: devuelve un bool si tiene o no una clase
- **Manipular Texto**
  - `$("elemento").text("nuevoTexto");`: le cambia el texto al elemento, es como el textContent
  - `$("elemento").html("nuevoHTML");`: le cambia lo que está dentro del HTML al elemento, es como el innerHTML
- **Manipular Atributos**
  - `$("elemento").attr("atributo", "nuevoValor");`: si se pone solo el atributo, te devuelve el valor, si se le pasa atributo y nuevoValor, lo cambia
- **eventListeners**
  - `$("elemento").click(funcion());`: Detecta un click en el/los elementos, y ejecuta la función del callback
  - `$("elemento").keypress(funcion());`: Detecta una tecla en el/los elementos, y ejecuta la función del callback
  - `$("elemento").on("evento", funcion());`: Cuando detecta el [evento](https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model/Events) ejecuta la función
- **Añadir o Eliminar elementos del HTML**
  - Añadir
    - `$("elemento").before("nuevoElemento");`: agregar un nuevoElemento antes (arriba) del que estaba
    - `$("elemento").after("nuevoElemento");`: agregar un nuevoElemento después (abajo) del que estaba
    - `$("elemento").prepend("nuevoElemento");`: agregar un nuevoElemento dentro del que estaba, antes del contenido que tenía
    - `$("elemento").append("nuevoElemento");`: agregar un nuevoElemento dentro del que estaba, después del contenido que tenía
  - Eliminar
    - `$("elemento").remove();`: Elimina todos los elementos "elemento"
  - Mostrar / Ocultar
    - `$("elemento").hide();`: oculta el elemento
    - `$("elemento").show();`: muestra el elemento
    - `$("elemento").toggle();`: lo prende y apaga
- **Añadir Animaciones**
  - `$("elemento").fadeOut();`: lo va desapareciendo de a poquito
  - `$("elemento").fadeIn();`: lo va apareciendo de a poquito
  - `$("elemento").fadeToggle();`: lo va apareciendo y desapareciendo de a poquito  
  - `$("elemento").slideUp();`: se desliza hacia arriba y lo oculta
  - `$("elemento").slideDown();`: se desliza hacia abajo y aparece
  - `$("elemento").slideToggle();`: lo va deslizando arriba y abajo
  - `$("elemento").animate({reglasCSS});`: animaciones personalizadas, solo acepta reglas que tengan valores numéricos, no puede cambiar colores por ejemplo
  - Todo lo anterior se puede encandenar `$("elemento").fadeOut().slideDown().animate();`
  - Se pueden ver todos los efectos [acá](https://www.w3schools.com/jquery/jquery_ref_effects.asp)

## Sección 20: Simon

- Se puede jugar [acá](https://londonappbrewery.github.io/Simon-Game/)

## Sección 21: Comandos Unix

- Ya los sé (a recursar SOP sino)

## Sección 22: Backend

- WebApp vs WebPage: No son lo mismo
- El backend de una aplicación Web consiste de Server + App + DataBase

## Sección 23: Node.js

- Node.js es un Runtime Environment de JS, nos permite correr JS en la dispositivo en vez del navegador
- **Como instalar**
  - Descargar el instalador desde la [página de Node.js](https://nodejs.org/en)
  - Correr el instalador .msi
  - Reinicia la compu
- **Como usar**
  - Si escrbimos `node` en la terminal, se abre una interfaz de usuario (REPL)
  - Con `.exit` salimos
  - Para ejecutar un archivo con node, hay que escribir `node archivo.js` en la terminal
- **Módulos Nativos de Node**
  - Para usar un módulo hay que importarlo primero
    - Vía CJS
      - const nombreModulo = require("nombreModulo");
    - Vía ESM
      - Se debe agregar al `package.json` la configuración `"type": module,` para poder usar la sintaxis ESM
      - Se usa `import funcion from "paquete;"`, también se puede usar `*` para importar todo del paquete
      - Algunas funciones deben estar entre llaves `{funcion}` cuando se importan
  - File System
    - Permite acceder a los archivos locales del usuario
    - Para crear un archivo `fs.writeFile("nombreArchivo", "texto", error);`
  - Node Package Manager (npm)
    - Es un gestor de paquetes de Node
    - Para inicializarlo en un proyecto `npm init`, te hace unas preguntas y crea un json con los datos
    - Para instalar un paquete `npm install paquete`, los paquetes se pueden encontrar [acá](https://www.npmjs.com/)

## Sección 24: Express

- Express es un FrameWork de JS, un framework es un conjunto de librerías que cumplen un fin específico
- **Como crear un Server con Express**
  1. Crear un directorio
  2. Crear un `index.js`
  3. Inicializar `npm` (npm init)
  4. Instalar el paquete de Express (`npm i express`)
  5. Escribir la aplicación en el `index.js`
    Se debe importar Express `import express from "express";`
    Y crear la aplicación `const app = express();`
  6. Arrancar el server con `node index.js` y

  ```js
  app.listen(port, () => {
    console.log("Listening on port " + port);
  });
  ```

- **Protocolo HTTP (HyperText Transfer Protocol)**
  - Métodos
    - GET -> Es cuando queres obtener datos del server (una página)
      - Sintaxis: `app.get("[url]", (req, res) => { ... })`
    - POST -> Es para mandar algo al server (datos de usuario), suele estar relacionado a un formulario
      - Sintaxis: `app.post("[url]", (req, res) => { ... })`
    - PUT -> Es para reemplazar un recurso con otro que estás mandando (actualizar), es como si se te pincha una goma, cambiar todo el auto
      - Sintaxis: `app.put("[url]", (req, res) => { ... })`
    - PATCH -> Es como parchar la goma, el server solo manda lo necesario para arreglarlo
      - Sintaxis: `app.patch("[url]", (req, res) => { ... })`
    - DELETE -> Borra
      - Sintaxis: `app.delete("[url]", (req, res) => { ... })`
  - Acá es cuando entran los ***endpoints***, que es un punto de acceso a una funcionalidad del sistema
    - Están compuestos de una URL y un método HTTP (URL + HTTP = endpoint)
    - Recibe una request, procesa los datos, y devuelve una response
  - `res.sendFile("rutaArchivo");`: Con esto podes mandar un HTML por ejemplo
  - `__dirname`: Se usa para obtener la ruta del archivo, se debe pegar este código

    ```js
    import { dirname } from "path";
    import { fileURLToPath } from "url";
    const __dirname = dirname(fileURLToPath(import.meta.url));
    ```

- **nodemon**
  - Es una herramienta que restartea automáticamente el server cuando detecta algún cambio
  - Solo hay que instalarla con npm y luego correr el index.js con `nodemon index.js`
- **Postman**
  - Es una herramienta para trabajar con APIs (un APIs es una interfaz que permite que distintos programas se comuniquen entre sí)
  - Se puede descargar [acá](https://www.postman.com/)
  - Sirve para probar los endpoints y hacer testing
- **MiddleWare**
  - El middleware es una función que se ejecuta automáticamente en todas las requests, antes y/o después del endpoint
  - Request → middleware → endpoint → middleware → Response
  - Es una capa intermedia del sistema que intercepta todas las requests para aplicar lógica global (verificar un login, lo hace el middleware así no se tiene que hacer cada vez que se accede a un endpoint)
  - ***Tipos***
    - Logging
      - morgan
        - Se debe instalar con npm, importar y usar con `app.use(morgan(tipo));`
        - [Documentación](https://expressjs.com/en/resources/middleware/morgan.html)
    - Pre-Processing
      - ***body-parser*** -> es un middleware que convierte el body de la request en un objeto usable (ej: JSON → objeto JS)
        - `app.use(express.json())`: si se quiere leer desde un JSON
        - Pasa de `{ "user": "mati", "pass": "123" }` (que se tiene que procesar) a `req.body.user // "mati"` (sin tener que hacer nada)
        - `app.use(express.urlencoded( {extended: true } ));`: esto se pone para poder leer los datos que vienen de un form de HTML
    - Error
    - Auth
  - También se puede crear un middleware propio

      ```js
      app.use((req, res, next) => {
        console.log("Request method: ", req.method);
        next();
      });
      ```

## Sección 25: EJS (Embedded JS)

- Es como un HTML que tiene JS dentro
- Se crea un archivo `.ejs`
- Se envía con `res.render(archivo, {var1, var2, ...});` en vez de `res.sendPage()`

- **Tags**
  - `<%= var %>`: tiene un output en el HTML
  - `<% códigoJS %>`: se ejecuta el código de JS, no tiene output (no muestra nada en el HTML)
  - `<%- codigoHTML %>`: lo que va dentro se renderiza como HTML
  - `<%% %%>`: se usa para salir del EJS, si se escribe así, no se interpreta como EJS
  - `<%# Comentario %>`: se usa para hacer un comentario
  - `<%- include(archivo.ejs) %>`: se usa para insertar un EJS dentro de otro EJS
- Para hacer un if dentro del .ejs:

```ejs
<% if (usuario) { %>
  <h1>Bienvenido, <%= usuario.nombre %></h1>
<% } else { %>
  <h1>Por favor, inicia sesión</h1>
<% } %>
```

- **Pasar datos de JS a EJS**
  - Se puede dar el caso en que querramos acceder a un dato en EJS que nunca mandamos o está corrupto, esto provocaría un error en la página
  - Se puede evitar checkeando que esa variable exista previamente con un `if`
  - `locals.variable`: es en donde se almacenan las variables

```ejs
<% if (locals.variable) { %>
  <p><%= variable %></p>
<% } %>
```

- **Pasar datos de EJS a JS**
  - Se hace de forma muy parecida a como se haría normalmente (con un POST)

```js
app.post("/submit", (req, res) => {
  const name = req.body["name"];
  res.render("index.ejs");
});
```

- **Partials vs Layout**
  - Tenemos que poder diferenciar los archivos dinámicos de los estáticos
  - ***Estáticos***
    - son los que NO dependen del back
    - CSS, imágenes, etc.
    - Se deben poner todos en una misma carpeta `public`
    - Se sirven con `app.use(express.static("public"));`
  - ***Dinámicos***
    - Son las cosas que dependen del back
    - Hay código que se puede reutilizar (footers, nav-bar,headers, etc.)
    - Para hacer esto se utilizan los Partials con el tag `<%- include (pag) %>`, entonces, incluyendo esto, nos ahorramos de poner el footer y nav-bar en cada página
  - Esto se debe hacer porque Express trata de forma distinta los paths de los archivos dinámicos y estáticos

## Sección 26: Proyecto de Aplicación Web (Blog)

## Sección 27: Git, GitHub y Control de Versiones

## Sección 28: APIs (Application Programming Interface)

## Sección 29: Proyecto de APIs

## Sección 30: Construir tu propia API

## Sección 31: Base de Datos

## Sección 32: SQL

## Sección 33: PostgreSQL

## Sección 34: Proyecto Nota de Libros

## Sección 35: Autenticación y Seguridad

## Sección 36: React.js

## Sección 37: Web3 Descentralizado (DApp)

## Sección 38: Defi (Decentralised Finance) App

## Sección 39: IPC Live Blockchain

## Sección 40: DApps en ICP con Frontend de React

## Sección 41: NFTs y crear un mercado NFT
