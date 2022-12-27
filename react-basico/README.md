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

### :tv: Ver online

[Demo haciendo click acá](https://react-basico-start-coding.netlify.app/)


---

### Certificado

<img src="https://user-images.githubusercontent.com/72580574/209708456-0d435886-30ff-49ea-8c60-a6d3f2d32960.png" alt="certificado"  width="500">

---


## :star: 1 - Introducción a React

- Links de interés:

• [https://es.reactjs.org/docs/faq-internals.html](https://es.reactjs.org/docs/faq-internals.html)

• [https://nodejs.org/es/about/](https://nodejs.org/es/about/)

• [https://damiandeluca.com.ar/como-usar-la-terminal-integrada-de-visual-studio-code](https://damiandeluca.com.ar/como-usar-la-terminal-integrada-de-visual-studio-code)

• [https://desarrolloweb.com/articulos/que-es-una-spa.html](https://desarrolloweb.com/articulos/que-es-una-spa.html)

### 1.1 - Introducción a React

- React JS fue creado por **Jordan Walke**, un ingeniero de software en **Facebook** (ahora  **Meta**).

- React intenta ayudar a los dearrolladores a **construir aplicaciones que usan datos que cambian todo el tiempop**. Su objetivo es ser **sencilla**, **declarativa** y **fácil de combinar**.

- React JS es una **librería** de JavaScript, no es un framework (como si lo son Angular o vue).

- ¿Cómo llega React a la **performance** que tanta fama le trae? Con tres conceptos: **Virtual DOM**, **React Fiber** y **Reconciliación**.

El acceso indiscriminado al DOM (Document Object Model, el modelo de HTML basado en JavaScript) **es caro**, entonces se requirió encontrar una manera de realizarlo de la manera **más optima** posible.

React detecta los **cambios** de los valores de los **componentes** y decide si es necesario **volver a renderizar** esa **UI** (no recarga nuevamente todo el DOm, toda la web).

Para establecer esa seguridad, requiere que los datos y los cambios se provoquen de una manera específica con dos características...

... **unidireccionalidad**, **de arriba hacia abajo**, las **props** (de componente padre a componente hijo) y los **Callbacks** (eventos, desde los componentes hijos hacia los padres)

- ¿Qué es el **virtual DOM**?

Es un patrón de comportamiento y React lo implmenta con una tecnología llamada **Fiber**.

Es sí resulta ser todo lo que React hace con el Virtual DOM: **una representación virtual de la UI que se mantiene en memoria y en sincronía "reconciliando" con el DOM "real"**.

### 1.2 - Instalación de Nodejs

- ¿ Qué es **node.js**?

Es **un entorno de ejecución de JavaScript que permite ser ejecutado en la computadora, fuera del navegador**, gracias al **motor v8**.

Con nodejs podemos **instalar módulos** y así utilizar las **librerías** con sus módulos adicionales, gracias a **npm** (**node package manager**).

Se descarga desde [https://nodejs.org/en/](https://nodejs.org/en/), siempre la versión **LTS**

Para asegurarnos de que tenemos Nodejs instalado, desde la consola: 

``` node --version``` -> si nos da la version es que ya la tenemos.

Además de tener **Node.js** debemos tener **npm**, asi que también por consola hacemos: 

```npm --version``` -> si nos da el número de la versión es que se instaló bien.


### 1.3 - Creación de nuestra primer create-react-app

[https://create-react-app.dev/](https://create-react-app.dev/)

- Primero: me creo una carpeta donde voy a tener mi proyecto

- Segundo: abro la terminal y me situo dentro de la carpeta.

- Tercero: creo la app con: ```npm create-react-app my-app``` para crear la primer app, **my-app** es el nombre de la aplicación.

- Cuarto: entro a la carpeta ```cd my-app``` y corro mi proyecto con: ```npm start```.


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

- Las aplicaciones en React se construyen mediante **componentes**. El potencial de este funcionamiento consiste en que podemos crear aplicaciones completas de manera **modular** y de fácil mantenimiento, a pesar de su complejidad.

Ejemplos: navbar, cards, sliders, listados, footer, formularios, pop-up, titulos, texto, imagenes.

- Los componentes permiten separar la **interfaz de usuario (UI)** es **piezas independientes**, **reutilizables** y **pensar en cada pieza de forma aislada**.

- Al desarrollar crearemos componentes para **resolver pequeños problemas** que son fáciles de visualizar y comprender. Luego unos componentes se apoyarán en otro para solucionar problemas mayores y al final **la aplicación será un conjunto de componentes que trabajan entre sí**. Este modo de trabajo tiene varias ventajas, como la **facilidad de mantenieminto**, **depuración**, **escalabilidad**, etc.

- **Beneficios**:

-Favorece la **separación de responsabiliades**, **cada componente** debe tener **una única tarea**.

-Al tener la **lógica del estado** y los **elementos visuales** por **separado**, es más fácil **reutilizar** los componentes.

-Se simplifica la tarea de hacer **pruebas unitarias**.

-Puede mejorar el **rendimiento** de la aplicación.

-La aplicación es **más fácil de entender**.

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

-> :book: Para leer...

... [https://es.reactjs.org/docs/components-and-props.html](https://es.reactjs.org/docs/components-and-props.html)

... [https://es.reactjs.org/docs/introducing-jsx.html](https://es.reactjs.org/docs/introducing-jsx.html)



### 2.3 - Eventos

La utilización de **eventos** se similar al HTML/JS normal, la única diferencia es que se usa **camelCase** para diferenciar el nombre dle evento, por ejemplo: **onClick**.

Otra diferencia es que no hay que poner los **()**, sino apenas se carga el componente se llama a la función y no solo si se hace click.

Si necesito enviar un parametro: 
```JSX
onClick={(event)=> {myFunction(event, param)}} 
```

Para tomar el valor, es con **event.target.value**.

Nos ajudan a **settear estados**(```setState```).

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

Los **hooks** agarran esa información, la guardan en el estado, y esos valores son dinámicos, al modificarse, ejecutan una función y vuelven a renderizar el componente.

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

Para poder utilizarlo hay que **importarlo**: 
```JSX
import {useState} from "react";
```

Se declara una variable, el setVariable que va a actualizarlo y con el **useState** le damos el **valor inicial**:
```JSX
const [ name, setName ] = useState("Valor inicial");
```

-> Devuelve un array:

[0] => valor(ref)

[1] => setName(fn)

Debe ejecutarse **siempre**. No pueden ser ejecutados dentro de otras estructuras como if, for u operador ternario. Se ejecutan en orden y nunca en simultáneo.

En el componente padre puedo pasar como prop la función que me va a actualizar el estado, asi tengo la logica en el componente padre y no en el hijo, el hijo recibe la función como prop y va a poder ejecutarla en el evento sintético. Utilizamos una función callback.

### ¿ Qué son los hooks?

Los React hooks permiten la construcción de componentes muchos más limpios y reutilizables, sin la necesidad de escribir componentes dentro de las clases.


### Hooks vs. Clases

Los **hooks** son una implementación que viene a **reemplazar la utilización** de las funciones dentro de un **componente funcional**, como puede ser **ComponentDidMount**, para que los componentes basados en funciones puedan respetar el mismo comportamiento. Es una de las mejoras que se implementaron en
React.

ComponentDidMount ---> **useEffect** (ya el componente esta renderizado y esta por morir)



### Hooks personalizados

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



### ¿Cómo sabemos que ciclo de vida tiene?


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


- Ejemplo en código:

```JSX
useEffect( () => {
    // para cuando se esta por montar el componente

    return () => {
      // se esta por morir el componente
      // se cierran los eventos
    }
  }, [])
```

-> :book: Para leer : [https://es.reactjs.org/docs/state-and-lifecycle.html](https://es.reactjs.org/docs/state-and-lifecycle.html)


### 4.2 - Técnicas de rendering


En vez de un **forEach** utilizamos un **map()**, que nos va a retornar lo que estamos recorriendo. Siempre que recorremos con map hay que agregar la **key** a cada elemento que se renderice, asi React lo puede seguir y comparar para ver si se cambio.


---


## :star: 5 - Apis

#### 5.1 - Consumiendo APIs

- APi es el intermediario entre la comunción Front End y Back End.

- con request **ajax**

- con **axios**

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

Se puede usar del modo asíncrono con **async** - **await**.

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


-> :book:  Para leer [https://es.reactjs.org/docs/context.html](https://es.reactjs.org/docs/context.html)


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

-> Como en el video trabajan con la versión 5:

![image](https://user-images.githubusercontent.com/72580574/208983575-89bd8924-3def-46f0-89b2-a83baa23b8dc.png)

### 6.2 - Navegación entre componentes

Armar el **routing** de la aplicación, acorde a la tuta en la que estamos, voy a renderizar distintos componentes.

### 6.3 - Rutas dinámicas

Para recibir ese parámetro desde el componente, lo que haremos será usar un hook: **useParams**, lo podemos utilizar para leer en JavaScript los parámetros de la ruta y en combinación con un useEffect nos sirve para obtener actualizaciones sobre los parámetros.

Vamos a mandar **Variables** a través de la URL para poder hacer la búsqueda. Ya en \*ProductsContainer** tenemos un listado de productos que viene de **EcommerceContext** , donde hacemos el **fetch** a la PAI de Mercado Libre con **https://api.mercadolibre.com/sites/MLA/search?q=zapatillas**, donde justamente `q=zapatillas` es el parámetro de busqueda para traer solo las zapatillas.

Entonces en **App** agregamos la URL para tener esta búsqueda dinímica con el pa´rametro:

```JSX
<Route path="/productos/:busqueda" element={<ProductsContainer />} />
```

En **ProductsContainer** voy a importar

```JSX
import { useParams } from "react-router-dom";
```

Para poder usarlo guardandolo en una oonstante:

```JSX
const { search } = useParams();
```

-> Si tengo una **ruta dinamica** el parametro siempre va con **:** adelante (lo que indica es dinamico, es una variable).


### 6.4 - Rutas dinámicas y contenido


Me va quedando asi:


![image](https://user-images.githubusercontent.com/72580574/209558097-9a9595de-6551-4aed-94d1-0240ee6ae6a5.png)


---


## :star: 7 - El store: Redux


## ¿ Qué es Redux ?


Es una herramienta que nos sirve para **gestionar estados de toda nuestra aplicación**, se puede considerar como una estepcie de **Estados GLobales**. Es una herramienta muy similar a **Context**


### 7.1 - Filtrando estados


## ¿ Cómo funciona ?

![image](https://user-images.githubusercontent.com/72580574/209558135-bbe8b175-c9ce-48da-9dc6-356f1bcdcf05.png)

La **UI**(el HTML), la **vista**, cuando quiere **cambiar el estado** hace un **dispatch** (despacha) a **Redux** para hacer una **acción**, que se la pasa como **función** y se denomina **reducer**(es una función reductora que realiza la lógica) y lego se guarda en el **store**. Una vez que se actualiza el estado se devuelve (**suscribe**) a la UI.

A diferencia de context Redux tiene un solo STORE, y muchas funciones reductoras.

Usos: estados globales para token de login, estados globales para el carrito.

## Instalación

```
npm install react-redux
npm install @redux/toolkit
```

:computer: -> [Pagina web: https://react-redux.js.org/](https://react-redux.js.org/)


### 7.2 - Introducción a Redux - configuración


### Primeros pasos : crear nuestro Store


- Creamos una carpeta dentro de src que se llame **Redux**.

- Dentro creamos otro directorio que se llame **Store** y dentro de nuestro archivo **index.js** -> `src > redux > store > index.js`:

```JSX
import { createStore } from "@redux/toolkit";

// nuestro store ira aca
```

- La estructura va a ser:

```
> src
   > redux
     > actions
     > reducers
     > store
```


### Primeros pasos: agregar nuestro Proveedor

- Al igual que context, necesitamos decirle a nuestra aplicación cuál es el punto de partida de la nformación. Para lograr esto, desde el archivo index.js (arhivo principal) le añadimos:

```JSX
<Provider store={Store} />
```

- Recordá que el store es el archivo que creamos en el paso anterior.

```JSX
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={{}}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```


### Creando Reducers

- Los **reducers** son funciones que se encargan de informar al store sobre que cambio de estado debe efectuarse. Esa información vendrá desde las **Actionas**(acciones).

- Para nuestro crrtio, creamos un reductor son su **initial_state**(estado inciial).

- Los reducers deberían ir dentro de la carpeta **redux** de esta manera: `src > reducers > cartReducer.js `

```JSX
const INITIAL_STATE = {
  cart: []
}

export const cartReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case "":
      return (
        ...state,
        cart:  [...state.cart, action.payload]
      )
    default:
      return state
  }
}
```


- Esta función que se va a exportar tiene dos parametros...

... **state** es estado inicial

... **action**, el tipo de acción, según cual sea con el switch vemos que retornamos. Si agregamos un nuevo producto retornamos el nuevo estado, utilizando el spread operator.

**payload** es el valor que le vamos a enviar


### Combinando Reducers

- Es normal que en una aplicación tengamos más de un reducer, y para que redux pueda utilizarlo, necesitamos combinarlos.

- Este archivo de debería encontrar en: `src > redux > reducers > index.js`

```JSX
import { combineReducers } from "redux";
import { cartReducer } from "./cart";

export default combineReducers({
  cartReducers: cartReducers,
})
```

- **combineReducers** combina todas las funciones reductoras.


### Creando Actions

- Como dijimos, las acciones se encargan de decirle a redux que tipo de acción se está por ejecutar y que valores se deben trabajar (payload). En nuestro caso, el payload, va a ser el nuevo elemento a guardar en el carrito.

```JSX
export const addElementCart = (product) => ({
  type: "PUSH NEW PRODUCT",
  payload: product,
})
```

-> Esto va en `src > redux > actions`.


### Modificando Store

- Una vez que tengamos los reducers y los actions, lo único que nos queda es importar en el **Store** todos los reducers combinándolos de esta manera:

```JSX
import { createStore } from "react-redux";
import Reducers from "../reducers/index";

export const Store = createStore(Reducers);
```

-> Todo esto en `src > redux > store > index.js`


### 7.3 - Consumiendo store - useSeletor


### ¿Cómo conusmimos esos datos?

- Nuevamente gracias a los hooks, podemos utilizar **useSelector** y **useDispatch** para poder traer y modificar datos.

- **useSelector** -> para traer el estado.

- **useDispatch** -> para actualizar el estado.

- En **App.js**:

1. importo:

```JSX
import { useSelector } from "react-redux";
```

2. lo utilizo:

```JSX
const STATE = useSelector((state) => state.cartReducer);
```


### 7.4 - Actualizamos nuestro store -useDispatch


### ¿Y cómo lo actualizamos?

- El hook **useDipatch** permite actualizar el estado del store mediante un reducer. Un ejemplo:

-> cada vez que el store modifica sus calores, se refleja en la vista automáticamente.


- En **App.jsx**:

1. Lo importo:

```JSX
import { useDispatch, useSelector } from "react-redux";
```


2. Lo utilizo:

```JSX
const dispatch = useDispatch();
```


3. importo:

```JSX
import { addElementToCart } from "./redux/actions/cart";
```


4. Lo utilizo en un boton:

```JSX
  const STATE = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();
  console.log(STATE);

  return (
    <div className="App my-5 mx-3">
      <button
        onClick={() => {
          dispatch(addElementToCart({ id: 1, name: "shirt", price: 3000 }));
        }}
      >
        Agregar al carrito
      </button>
      // continua el codigo por aca
  );
```


---

:computer: -> [repositorio de Start Coding](https://github.com/CristianHourcade/ReactBasic)

---


## :star: 8 - Forms

- En el curso en realidad es otra aplicación separada, pero para tener todo jutno voy a crear otra opción en la barra de navegación para poder ver el formulario y practicar esta parte.


![image](https://user-images.githubusercontent.com/72580574/209573842-65f2291c-26a6-42d3-b90a-0c4b9514bdf6.png)


### 8.1 - Introducción a forms


- Vamos a utilizar [**formik**](https://formik.org/)


- Instalación de **formik**: `npm install formik --save` ó `npm i formik --save`


- También vamos a utilizar [**YUP**](https://www.npmjs.com/package/yup)


- Instalación de **YUP**: `npm install yup` ó `npm i yup`


- Para los estilos va a utilizar **Styled components**, se instala con : `npm install styled-components `


Para poder utilizarlos debo importarlos:

```JSX
import { Formik } from "formik";
import * as Yup from "yup";
```


Al **form** lo paso al componente de formik: `<Formik></Formik>` al cual deno setearle los **valores iniciales**: ` <Formik initialValues={{ name: "", id: "", phone: "", email: "", password: "" }}>`


Cada uno de los **input** van a tener el atributo `name` que van a coincidir con los que paso como **initialValues**


Un input como ejemplo:

```JSX
<input
  placeholder="Nombre completo"
  name="name"
  value={values.name}
  onChange={handleChange("name")}
/>
```


### 8.2 - Validaciones básicas


En `<Formik>` también vamos a tener **validationSchema={ RegisterSchema }**


Y **RegisterSchema** es otro archivo aparte que va a tener justamente las validaciones de **Yup**:


```JSX
import * as Yup from "yup";
import { YUP_MESSAGE } from ".././../../international";

export const RegisterSchema = Yup.object().shape({
  name: Yup.string().required(YUP_MESSAGE.nameRq),
  id: Yup.number().required(YUP_MESSAGE.idRq),
  phone: Yup.number().required(YUP_MESSAGE.phoneRq),
  email: Yup.string()
    .email(YUP_MESSAGE.emailFormat)
    .required(YUP_MESSAGE.emailRq),
  password: Yup.string().required(YUP_MESSAGE.passwordRq),
});
```


**.string()** -> para validar que el valor del input sea de tipo string


**.number()** -> para validar que el valor del input sea de tipo number


**.required()** -> el input es requerido (obligatorio).


**.email()** -> para validar que sea email, es decir que tenga **@** y un **.**.



### 8.3 - Validaciones avanzadas


Para que no me aparezcan todos los mensajes de error juntos.


Dentro de `<Formik />` agrego **validateOnBlur**


Y en el `<input />` agrego : **onBlur={handleBlur("name")}**


De Yup también voy a utilizar **touched**, si tocamos el campo (input) y tiene un error, entonces me lo muestra, etonces voy a tener: `{touched.id && errors.id && <p>{errors.id}</p>}`.


Y el **botón de registro** debe ser de tipo **submit**:


```JSX
<div className="btn-register">
  <button type="submit">{FORM_REGISTER.btnTxt}</button>
</div>
```



### 8.4 - Validaciones onSubmitBlur


En vez de utilizar **validateOnBlur** podemos usar **validateOnSubmit** . Para ello debo tener en vez de un **div**, un **form** para poder usar **\*onSubmit**: `<form onSubmit={handleSubmit}>`.


Otro tipo de validación es **validateOnChange** me va a ir chequeando por cada vez que ingrese un dato.



### 8.5 - useFormik


Es un custom hook (**useFormik**) que trae Formik.


Le enviamos al hook:

```JSX
initialValues={{
  name: "",
  id: "",
  phone: "",
  email: "",
  password: "",
  repeatPassword: "",
}}
validationSchema={RegisterSchema}
/*validateOnBlur */
onSubmit={(values) => console.log(values)}
validateOnSubmit
```

Y a través de **props** recibimos del hook:

```JSX
{
  handleBlur,
  handleChange,
  handleSubmit,
  values,
  errors,
  touched,
}
```


Por lo que al momento tenemos creado el formulario ocn el componente **Formik**:

```JSX
import React, { useState } from "react";
import { Formik } from "formik";
import { RegisterSchema } from "./schema/registerSchema";
import { FORM_REGISTER } from "../../international";
import "./style.css";
import Error from "../error/Error";

const FormRegister = () => {
  const [visible, setVisible] = useState(true);

  return (
    <div className="container mb-5 mt-2">
      <Formik
        initialValues={{
          name: "",
          id: "",
          phone: "",
          email: "",
          password: "",
          repeatPassword: "",
        }}
        validationSchema={RegisterSchema}
        /*validateOnBlur */
        onSubmit={(values) => console.log(values)}
        validateOnSubmit
      >
        {({
          handleBlur,
          handleChange,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="form-input">
              <input
                placeholder="Nombre completo"
                name="name"
                onChange={handleChange("name")}
                /* onBlur={handleBlur("name")} */
                value={values.name}
              />
              {touched.name && errors.name && <Error text={errors.name} />}
            </div>
            <div className="form-input">
              <input
                placeholder="Número de documento"
                name="id"
                onChange={handleChange("id")}
                /* onBlur={handleBlur("id")} */
                value={values.id}
              />
              {touched.id && errors.id && <Error text={errors.id} />}
            </div>
            <div className="form-input">
              <input
                placeholder="Número de teléfono"
                name="phone"
                onChange={handleChange("phone")}
                /* onBlur={handleBlur("phone")} */
                value={values.phone}
              />
              {touched.phone && errors.phone && <Error text={errors.phone} />}
            </div>
            <div className="form-input">
              <input
                placeholder="Correo electrónico"
                name="email"
                onChange={handleChange("email")}
                /* onBlur={handleBlur("email")} */
                value={values.email}
              />
              {touched.email && errors.email && <Error text={errors.email} />}
            </div>
            <div className="form-input">
              <input
                placeholder="Crea tu contraseña"
                name="password"
                type="password"
                onChange={handleChange("password")}
                /* onBlur={handleBlur("password")} */
                value={values.password}
              />
              {touched.password && errors.password && (
                <Error text={errors.password} />
              )}
            </div>
            <div className="form-input">
              <input
                placeholder="Repetí la contraseña"
                name="repeatPassword"
                type={visible ? "text" : "password"}
                onChange={handleChange("repeatPassword")}
                /* onBlur={handleBlur("repeatPassword")} */
                value={values.repeatPassword}
              />
              {touched.repeatPassword && errors.repeatPassword && (
                <Error text={errors.repeatPassword} />
              )}
            </div>
            <div>
              <button  className="btn-hide-show" onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar contraseña" : "Mostrar contraseña"}
              </button>
            </div>
            <div className="btn-register">
              <button type="submit">{FORM_REGISTER.btnTxt}</button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default FormRegister;
```

Ahora vamos a armarlo con el hook **useFormik**, para eso:

```JSX
const formik = useFormik({
    initialValues: {
      name: "",
      id: "",
      phone: "",
      email: "",
      password: "",
      repeatPassword: "",
    },
    validationSchema: RegisterSchema,
    onSubmit: (values) => console.log(values)
  });
```


Y para no estar poniendo todo con **formik.** desestructuro:

```JSX
const { handleSubmit, handleChange, touched, errors, values } = formik;
```


Y en los **hanldeChange** no es necesario le pase entre los () a que campo me refiero.



### 8.6 - RegEx

Una **expresión regular** es una cadena de caracteres que es utilizada para describir o encontrar patrones (matchear) dentro de otros strings, en base al uso de delimitadores y ciertas reglas de sintaxis.


[regexpal.com](https://www.regexpal.com)


**?** -> es opcional


**{3}** -> Tiene 3, el número que le pongo entre las {} es la cantidad exacta


**{3,6}** -> Tiene de 3 a 6, aca le indico un rango de cantidad posible

---
