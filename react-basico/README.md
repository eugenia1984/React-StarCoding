d# <img src="https://img.icons8.com/bubbles/48/null/react.png"/> React Básico

## :book: Temas:

1. **Introduccion a React**: introducción a React, Instalación de Nodejs, Creación de nuestra primer create-react-app.

2. **Componentes y Eventos**: componentes y componentes de presentación, componentes contenedores, eventos

3. **Hooks**: hooks, ¿qué son los hooks?

4. **Miscelaneos**: ciclos de vida, técnicas de rendering

5. **Apis**: consumiendo APIs, context

6. **Navegación**: routing, navegación entre componentes, rutas dinámicas, rutas dinámicas y contenido.

7. **El store: Redux**: filtrando estados, introducción a Redux - configuración, consumiendo store - useSeletor, actualizamos nuestro store -useDispatch

8. **Forms**: introducción a forms, validaciones básicas, validaciones avanzadas, validaciones onSubmitBlur, useFormik, RegEx.

---

## :star: 1 - Introducción a React

- Links de interés:

•[https://es.reactjs.org/docs/faq-internals.html](https://es.reactjs.org/docs/faq-internals.html)

•[https://nodejs.org/es/about/](https://nodejs.org/es/about/)

•[https://damiandeluca.com.ar/como-usar-la-terminal-integrada-de-visual-studio-code](https://damiandeluca.com.ar/como-usar-la-terminal-integrada-de-visual-studio-code)

•[https://desarrolloweb.com/articulos/que-es-una-spa.html](https://desarrolloweb.com/articulos/que-es-una-spa.html)

### 1.1 - Introducción a React

- React JS fue creado por **Jordan Walke**, un ingeniero de software en **Facebook**(ahora Meta).

- React intenta ayudar a los dearrolladores a **construir aplicaciones que usan datos que cambian todo el tiempop**. Su objetivo es ser **sencilla**, **declarativa** y **fácil de combinar**.

- React JS es una **librería** de JavaScript, no es un framework (como si lo son Angular o vue).

- ¿Cómo llega React a la **performance** que tanta fama le trae? Con tres conceptos: **Virtual DOM**, **React Fiber** y **Reconciliación**.

El acceso indiscriminado al DOM (Document Object Model, el modelo de HTML basado en JavaScript) **es caro**, entonces se requirió encontrar una manera de realizarlo de la manera **más optima** posible.

React detecta los **cambios** de los valores de los **componentes** y decide si es necesario **volver a renderizar** esa **UI** (no recarga nuevamente todo el DOm, toda la web).

Para establecer esa seguridad, requiere que los datos y los cambios se provoquen de una manera específica con dos características...

... **unidireciconalidad**, **de arriba hacia abajo**, las **props** (de compoennte padre a componente hijo) y los **Callbacks** (eventos, desde los componentes hijos hacia los padres)

- ¿Qué es el **virtual DOM**?

Es un patrón de comportamiento y React lo implmenta con una tecnología llamada **Fiber**.

Es sí resulta ser todo lo que React hace con el Virtual DOM: **una representación virtual de la UI que se mantiene en memoria y en sincronía "reconciliando" con el DOM "real"**.

### 1.2 - Instalación de Nodejs

- ¿ Qué es **node.js**?

Es un entorno de ejecución de JavaScript que permite ser ejecutado en la computadora, fuera del navegador, gracias al motor v8.

Con nodejs podemos **instalar módulos** y así utulizar las **librerías** con sus módulos adicionales, gracias a **npm** (**node package manager**).

Se descarga desde [https://nodejs.org/en/](https://nodejs.org/en/), siempre la versión **LTS**

Para asegurarnos de que tenemos Nodejs instalado, desde la consola: ` node --version`, si nos da la version es que ya la tenemos.

Además de tener **Node.js** debemos tener **npm**, asi que también por consola hacemos: `npm --version`, si nos da el número de la versión es que se instaló bien.

### 1.3 - Creación de nuestra primer create-react-app

[https://create-react-app.dev/](https://create-react-app.dev/)

- Primero: me creo una carpeta donde voy a tener mi proyecto

- Segundo: abro la terminal y me situo dentro de la carpeta.

- Tercero: creo la app con: `npm create-react-app my-app` para crear la primer app, **my-app** es el nombre de la aplicación.

- Cuarto: entro a la carpeta `cd my-app` y corro mi proyecto con: `npm start`.

##### Estructura del proyecto

```
>node_modules
>public
  index.html
  favicon.ico
>src
  App.js
  index.js
.gitignore
package.json
package-lock.json
```

`>public` -> `index.html` con el `<div id="root></div>` donde se va a renderizar toda la aplicación.

---

## :star: 2 - Componentes y Eventos

### 2.1 - Componentes y componentes de presentación

- Las aplicaciones en react se construyen mediante **componentes**. El potencial de este funcionamiento consiste en que podemso crear aplicaciones completas de manera **modular** y de fácil mantenimiento, a pesar de su complejidad.

Ejemplos: navbar, cards, sliders, listados, footer, formularios, pop-up, titulos, texto, imagenes.

- Los componentes permiten separar la **interfaz de usuario (UI)** es **piezas independientes**, **reutilizables** y pensar en cada pieza de forma aislada.

- Al desarrollar crearemos componentes para **resolver pequeños problemas** que son fáciles de visualizar y comprender. Luego unos componentes se apoyarán en otro para solucionar problemas mayores y al final **la aplicación será un conjunto de componentes que trabajan entre sí**. Este modo de trabajo tiene varias ventajas, como la **facilidad de mantenieminto**, **depuración**, **escalabilidad**, etc.

- **Beneficios**:

-Favorece la separación de responsabiliades, cada componente debe tener una única tarea.

-Al tener la lógica dle estado y los elementos visuales por separado, es más fácil reutilizar los componentes.

-Se simplifica la tarea de hacer pruebas unitarias.

-Puede mejorar el rendimiento de la aplicación.

-La aplicación es más fácil de entender.

- En React existen dos maneras de entender los componentes, que varían según desde dónde nos paremos para analizarlo. Vamos a decir que existen **tipos de componentes** y **patrones**:

-**Componentes de clases**, los proyectos más viejos siguen usando componentes de clases.

-**Componentes funcionales** desde ES6 con arrow function, se pueden utilizar los **hooks** y **JSX** (JavaScript XML).

- **Componentes de presentación**: son aquellos que simplemente **Se limitan a mostrar los datos** y tienen poca a nula lógica asociada a manipulación del estado (por eso también son llamados **stateless components**). Un ejemplo son las cards.

Usando esta sintaxis **las propiedades se reciben como parámetros de la función** y podemos obtener las variables que nos interesan por separado. Ejemplo en código:

```JSX
const Titulo = ( (nombre) = props ) => {
 <h1>nombre</h1>
}

const Item = ( props) => {
 <li> <a href="#">{props.valor}</a></li>
}

const Input = (props) => {
 <input type="text" placeholder={props.placeholder} />
}
```

![image](https://user-images.githubusercontent.com/72580574/208733287-e1e1fec9-877f-48db-b930-6d7895f50158.png)

### 2.2 - Componentes contenedores

- Tienen el propósito de **encapsular a otros componentes** y **proporcionarles las propiedades** que necesitan. Además se encargan de **modificar el estado** de la aplicación para que el usuario vea el cambio en los datos (por eso son también llamados **state components**).

![image](https://user-images.githubusercontent.com/72580574/208733213-cb0caf2e-767a-4afd-9eb5-7f70d0ceab75.png)

- Para leer:

[https://es.reactjs.org/docs/components-and-props.html](https://es.reactjs.org/docs/components-and-props.html)

[https://es.reactjs.org/docs/introducing-jsx.html](https://es.reactjs.org/docs/introducing-jsx.html)

### 2.3 - Eventos

La utilización de **eventos** se similar al HTML/JS normal, la única diferencia es que se usa **camelCase** para diferenciar el nombre dle evento, por ejemplo: **onClick**.

Otra diferencia es que no hay que poner los **()**, sino apenas se carga el componente se llama a la función y no solo si se hace click.

Si necesito enviar un parametro: `onClick={(event)=> {myFunction(event, param)}}  `

Para tomar el valor, es con **event.target.value**.

Nos ajudan a **settear estados**(set state).

Ejemplo en código:

```JSX
import React form "react";
import "./style.css";

export default function App() {
  function handleClick(event) {
    console.log("Clicked");
    // al terminar esta funcion el evento se destruye
  }

  return(
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}
```

---

## :star: 3 - Hooks

### 3.1 - Hooks

Todas las **constantes** o **Variables** que declare para intentar mantener el **estado** morirán y serán reiniciadas en cada **render**.

LOs **hooks** agarran esa información, la guardan en el estado, y esos valores son dinímicos, al modificarse, ejecutan una función y vuelven a renderizar el componente.

Ejemplo en código:

```JSX
import React, {Component, useState } from "react";
import { render } from "react-dom";
import Hello from "./Hello";

function FnApp() {
 const [ name, setName ] = useState("React class");

 return(
   <div onClick={/() => setname("React Function")}>
     <Hello name={name} />
   </div>
 );
}
```

### 3.2 - ¿Qué son los hooks?

- **useState** es un hook para manejar el **state**(estado) de un componente.

Para poder utilizarlo hay que **importarlo**: `import {useState} from "react";`

```JSX
const [ name, setName ] = useState("Valor inicial");
```

devuelve un array:

[0] => valor(ref)

[1] => setName(fn)

Debe ejecutarse **siempre**. No pueden ser ejecutados dentro de otras estructuras como if, for u operador ternario. Se ejecutan en orden y nunca en simultáneo.

En el componente padre puedo pasar como prop la función que me va a actualizar el estado, asi tengo la logica en el componente padre y no en el hijo, el hijo recibe la función como prop y va a poder ejecutarla en el evento sintético. Utilizamos una función callback.

#### ¿ Qué son los hooks?

Los React hooks permiten la construcción de componentes muchos más limpios y reutilizables, sin la necesidad de escribir componentes dentro de las clases.

#### Hooks vs. Clases

Los **hooks** son una implementación que viene a **reemplazar la utilización** de las funciones dentro de un **componente funcional**, como puede ser **ComponentDidMount**, para que los componentes basados en funciones puedan respetar el mismo comportamiento. Es una de las mejoras que se implementaron en
React.

ComponentDidMount ---> **useEffect** (ya el componente esta renderizado y esta por morir)

#### Hooks personalizados

```JSX
import React, {useState, useEffect } from "reac";

function useFriendStatus(frinedID) {

  const [ isOnline, setIsOnline ] = useState(null);

  function handleStatusChange(status) {
    setIsOnline(status.isOnline);
  }

  useEffect( () => {
    ChatAPI.suscribeToFriendState(friendID, handleStatusChange);
    return () => {
      chatAPI.unSuscribeFriendStatus(friendID, handleStatusChange)
    };

  })
  return inOnline;
}
```

- Todas las funciones que empiezan con **use** son un **hook**

- Un hook personalizado dentro puede tener otros hooks.

---

## :star: 4. Miscelaneos

### 4.1 - Ciclos de vida

En React es fundamental el ciclo de vida, porque hay determinadas **acciones que necesariamente debemos realizar en el momento correcto de ese ciclo**.

Conocer estos cicilos nos ayudará a optimizar la aplicación, sigueindo las reglas básicas que pone React.

El componente **nace** (se crea), **cambia su valor** y **muere**. Es decir hay tres clasificaciones de estados dentro de un ciclo de vida:

- el **montaje** se produce la primera vez que un componente va a generarse, incluyendose en el DOM.

- la **actualización** se produce cuando el componente ya generado se está actualizando.

- el **Desmontaje** se produce cuandoel componente se elimina del DOM.

#### ¿Cómo sabemos que ciclo de vida tiene?

Podemos utilizar el hook **useEffect** para poder controlar y saber que ciclo de vida tiene nuestro componente.

Por ejemplo, al montar un componente traigo los datos de la base de datos y al renderizarse ya lo muestro.

El useEffect tiene dos parámetros...

... el primer parámetro: **callback**

... el segundo parámetro: **dependency array**.

- Filtros del useEffect:

[] => OnMount

[prop] => OnMount y por cada cambio de prop

[prop1, prop2 ] => OnMount y en cada cambio de prop1 ó prop2

undefined => useEffect(() => Mount y en cada render)

```JSX
useEffect( () => {
    // para cuando se esta por montar el componente

    return () => {
      // se esta por morir el componente
      // se cierran los eventos
    }
  }, [])
```

Para leer [https://es.reactjs.org/docs/state-and-lifecycle.html](https://es.reactjs.org/docs/state-and-lifecycle.html)

### 4.2 - Técnicas de rendering

En vez de un **forEach** utilizamos un **map()**, que nos va a retornar lo que estamos recorriendo. Siempre que recorremos con map hay que agregar la **key** a cada elemento que se renderice, asi React lo puede seguir y comparar para ver si se cambio.

---

## :star: 5 - Apis

#### 5.1 - Consumiendo APIs

- APi es el intermediario entre la comunción Front End y Back End.

- con request **ajax**

- con ***axios**

- Con **fetch()** que nos devuelve la promesa(por eso se usa el **.then()**), ejemplo en código:

```JSX
fetch("https://api.ejemplo/id/1202")
  .then(function(response) {
    return response.json();
  })
  .then(function(user) {
    console.log(user)
  })
```

Se puede usar del modo asíncrono con **Async** - **await**.

- Para este  mini e-commerce vamos a utilizar la API de Mercado Libre: [https://api.mercadolibre.com/sites/MLA/search](https://api.mercadolibre.com/sites/MLA/search)


En la documentación están las opciones, nosotros vamos a usar:

Realiza una búsqueda por texto de busqueda:

GET: /sites/MLA/search?q=

### 5.2 - Context

---

## :star: 6 - Navegación

### 6.1 - Routing

### 6.2 - Navegación entre componentes

### 6.3 - Rutas dinámicas

### 6.4 - Rutas dinámicas y contenido

---

## :star: 7 - El store: Redux

### 7.1 - Filtrando estados

### 7.2 - Introducción a Redux - configuración

### 7.3 - Consumiendo store - useSeletor

### 7.4 - Actualizamos nuestro store -useDispatch

---

## :star: 8 - Forms

### 8.1 - Introducción a forms

### 8.2 - Validaciones básicas

### 8.3 - Validaciones avanzadas

### 8.4 - Validaciones onSubmitBlur

### 8.5 - useFormik

### 8.6 - RegEx

---
