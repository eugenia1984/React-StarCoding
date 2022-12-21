# <img src="https://img.icons8.com/bubbles/48/null/react.png"/> React Básico

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

Los **hooks** agarran esa información, la guardan en el estado, y esos valores son dinímicos, al modificarse, ejecutan una función y vuelven a renderizar el componente.

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

- con **\*axios**

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

- Para este mini e-commerce vamos a utilizar la API de Mercado Libre: [https://api.mercadolibre.com/sites/MLA/search](https://api.mercadolibre.com/sites/MLA/search)

En la documentación están las opciones, nosotros vamos a usar:

Realiza una búsqueda por texto de busqueda:

GET: /sites/MLA/search?q=

El **useEffect** con el llamado queda asi:

```JSX
 // para cuando se esta por montar el componente
  useEffect(() => {
    const fetchData = async () => {
      // llamada a una APi que nos trae el JSON
      const data = await fetch(
        "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
      );
      const json = await data.json(); // la paso a JSON
      setProducts(json.results); // seteo el estado
    }
    fetchData()
      .catch(console.error);
    // return para cerrar el llamado a la API
    return () => console.log("Se esta por morir el componente");
  }, []);
```

#### Así va quedando:

![image](https://user-images.githubusercontent.com/72580574/208918386-7975d601-4e53-4b78-a533-819984097798.png)

### 5.2 - Context

Dado que React funciona con un flujo de datos **unidireccional** (**hay una sola fuente de verdad**), la única manera de transmitir datos es vía **props** (de componente padre a componente hijo)

![image](https://user-images.githubusercontent.com/72580574/208936723-8f7f81ec-38db-46e3-91e0-2c4e70a5a3bf.png)

Los **contextos** también pueden ser alterados en **tiempo de ejecución** y sus efectos **propagados** al resto de los **consumidores**(**consumer**).

contexto -> guarda información global de la app, asi no hay que pasarla por props entre el componente bisabuelo / abuelo / padre / hijo.

Creamos un **contexto** que va a ser el **proveedor**(**provider**) de la información.

Lo importante al configurar esta estrategia será:

- Saber **elegir** cuál es el **punto estratégico** de mmi apllicación donde iniciaré el **estado** de ese **context**.

- **Combinarlo** estratégicamente con un **useState** para poder **mutarlo** y que el useState me ayude a hacer **trigger de renderings** en **consumers**.

- Ejemplo en codigo: **CacheContext** es la variable que se encarga de mantener todos los valores globales en la aplicación:

![image](https://user-images.githubusercontent.com/72580574/208947355-95aba572-17b0-4c9e-a529-6b4c1dea4276.png)

- Como vemos en **ComponentA2**, par apoder usar la información del **context**, tenemos que usar el **hook** de **useContext(nombreDelContext)**.

![image](https://user-images.githubusercontent.com/72580574/208948177-cbe813f3-0945-423d-b2a7-ab9060088192.png)

-> En nuestro proyecto creamos : **context** > **EcommerceContext.jsx**:

Entonces mi **componente provider**:

```JSX
import { createContext, useEffect, useState } from "react";

export const EcommerceContext = createContext();

export const EcommerceProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    const data = await fetch(
      "https://api.mercadolibre.com/sites/MLA/search?q=zapatillas"
    );
    const result = await data.json();
    setProducts(result.results);
  };

  useEffect(() => {
    fetchData().catch(console.error);
  }, []);

  return (
    <EcommerceContext.Provider value={{ products }}>
      {children}
    </EcommerceContext.Provider>
  );
};
```

Y mi **componente consumer**:

```JSX
import "./App.css";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./context/EcommerceContext";

function App() {
  return (
    <div className="App my-5 mx-2">
      <EcommerceProvider>
        <ProductsContainer />
      </EcommerceProvider>
    </div>
  );
}

export default App;
```

Y gracias a los **children** todos los componentes hijos van a tener a dispocisión el listado de productos.

Ahora en **ProductsContainer** tengo que aplicar el hook **useContext**:

```JSX
const { products } = useContext(EcommerceContext);
```

:tv: -> Para leer [https://es.reactjs.org/docs/context.html](https://es.reactjs.org/docs/context.html)

---

## :star: 6 - Navegación

### 6.1 - Routing

- ¿Cuál es el punto de inicipio de nuestra aplicación?

Un ejemplo: Login -> Home

- ¿Cómo vamos a organizarlo?

inicio -> búsquedas -> detalle -> confirmación -> fin

- Por defecto React no viene con un mecanismo integrado de navegación. Esto es para mantener sus dependencias al **mínimo** y dado que **no todo proyecto necesita routing**, se maneja como una dependencia aparte. Hay varias soluciones, vamos a trabajar con [react-router-dom](https://www.npmjs.com/package/react-router-dom)

Esta es la página: [https://reactrouter.com/en/main](https://reactrouter.com/en/main), hay que ver porque tneemos proyecto en la versión % y otros con la versión 6, y hay diferencia entre ambas.

`npm install react-router-dom`

-> En el video lo hacen con la ersión 5, yo implemento la 6.

1. En **index.js** me importo **BrowserRouter** para poder utilizarlo:

```JSX
import { BrowserRouter } from "react-router-dom";
```

2. En vuelvo mi `<App />` en el **BrowserRouter** :

```JSX
  <BrowserRouter>
      <App />
  </BrowserRouter>
```

3. En **App.js** voy a armar todoas mis rutas, para lo cual necesito importarlas:

```JSX
import { Routes, Route } from "react-router-dom";
```

4. Y encierro mi **App** entre las **Routes** para luego adentro mediante **Route** voy a ir definiendo que componentes renderizar acorde al path de la URL de mi app.

```JSX
function App() {
  return (
    <div className="App my-5 mx-2">
      <EcommerceProvider>
        <Routes>
          <Route path="/" element={<ProductsContainer />} />
        </Routes>
      </EcommerceProvider>
    </div>
  );
}
```

En `<Route />` siempre voy a tener el **path** y el **element** (que componentes se van a renderizar).

En la versión 5 Al **Routes** se le llama **Switch**

EL **EcommerceProvider** lo paso afuera de **Routes** asi esta disponible para todas las rutas.

### 6.2 - Navegación entre componentes

Armar el **routing** de la aplicación, acorde a la tuta en la que estamos, voy a renderizar distintos componentes.

### 6.3 - Rutas dinámicas

Para recibir ese parámetro desde el componente, lo que haremos será usar un hook: **useParams**, lo podemos utilizar para leer en JavaScript los parámetros de la ruta y en combinación con un useEffect nos sirve para obtener actualizaciones sobre los parámetros.

Vamos a mandar **Variables** a través de la URL para poder hacer la búsqueda. Ya en *ProductsContainer** tenemos un listado de productos que viene de **EcommerceContext** , donde hacemos el **fetch** a la PAI de Mercado Libre con **https://api.mercadolibre.com/sites/MLA/search?q=zapatillas**, donde justamente ```q=zapatillas``` es el parámetro de busqueda para traer solo las zapatillas.

Entonces en **App** agregamos la URL para tener esta búsqueda dinímica con el pa´rametro:
```JSX
<Route path="/productos/:busqueda" element={<ProductsContainer />} />
```

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
