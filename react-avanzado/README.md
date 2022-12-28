# <img src="https://img.icons8.com/bubbles/40/null/react.png"/> React Avanzado

Temas:

1. Introducción
2. React Lazy & Suspense
3. NextJS
4. Graphql
5. Jest & React Testing Library
6. Manejo de errores

---

:tv: [Repositorio de ejemplo: Rick and Morty](https://github.com/CristianHourcade/rick-and-morthy)

:tv: [Repositorio de ejemplo: nextjs-con-typescript](https://github.com/CristianHourcade/nextjs-con-typescript)

---

### <img src="https://img.icons8.com/windows/32/null/strategy-board.png"/> Challenge:

Crear una app sencilla, con 3 pantallas para repasar todos los conceptos vistos hasta el momento, con: home -> listado de productos -> detalle producto

:computer: -> [se puede ver en **challenge**](https://github.com/eugenia1984/React-StarCoding/tree/main/challenge)

- Home:

![image](https://user-images.githubusercontent.com/72580574/209830223-52e66896-3a1b-454b-9a09-84072ade41a4.png)


- Listado de productos:

![image](https://user-images.githubusercontent.com/72580574/209830248-2c648ca3-2ad0-48c4-b1ab-3ecb52f020fa.png)


- Detalle del producto:

![image](https://user-images.githubusercontent.com/72580574/209830157-d6b276f6-6f20-433b-99cb-964cd203b2dc.png)


---

## :star2: 1. Introducción

### :star: 1.1 - Introoducción teórica

### Repaso React.JS

- ¿ Qué es React ?

Una **librería** de JavaScript, se utiliza para crear todo tipo de aplicaciones. Se identifica por el uso de los **componentes** (pieza de código reutilizables).

- ¿ Cómo se escribe un componente?

Hay dos formas...

... basados en **clases**

```JSX
class Welcome extends React.Component {
  render() {
    return<h1>Hello, {this.props.name} </h1>
  }
}
```

El **render** es la función que retorna la UI.

... basados en **funciones**

```JSX21
const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>;
}
```

- **Componentes con hooks**, los más utiliados son ...

... **useState**, guarda el estado (variables -valores-) de un componente, y utilizando **setVariable** voy a setear el nuevo valor, actualizo.

... **useEffect**, controla los ciclos de vida del componente

![image](https://user-images.githubusercontent.com/72580574/209713101-d072a34d-ff8d-4538-b948-e672b8045577.png)

... **useContext**, usar un contexto creado para consumir estados. Viene a reemplazar a Redux, es más fácil de instalar y configurar.

PAra crear el Contet hay que crear un componente que se va a encargar de ser el proveedor(**provider**) de los estados (**States**).

-> Un estado(**state**) es un hook. El **hook** viene a reemplazar las funciones de los componentes de clase tienen para su ciclo de vida (componentDidMount, por ejemplo).

![image](https://user-images.githubusercontent.com/72580574/209713932-6c4a7737-98b5-4592-96b9-8ad73727d89e.png)

renderiza el provider con los children adentro, cada vez que el provider se actualice se actualizan sus childrens. Asi manejamos los **estados globales**

### :star: 1.2 - Componentes

- **components** de presentación, la vista

- **containers** tiene la lógica y con props pasan a los componentes más chicos, también se los llama **pages**.

Dentro de `src` > `containers` me voy a crear las tres carpetas para las páginas: `home`> `HomeContainer.jsx` , `list`> `ListContainer.jsx` y `detail`> `DetailContainer.jsx`.

### :star: 1.3 - Routing

Usamos [react-router-dom](https://reactrouter.com/en/main) y vemos [react-router-dom npm](https://www.npmjs.com/package/react-router-dom), que lo instalamos con `npm i react-router-dom`

-> lo importo: `JSX  import { BrowserRouter } from "react-router-dom"; `

-> encierro mi App:

```JSX
function App() {
  return (
    <BrowserRouter>
      <div className="App">Hola soy una app</div>
    </BrowserRouter>
  );
}
```

-> Dentro tengo al componente `<Routes>` y dentro a `<Route /> ` con el `path` y el `element` (componente a renderizar).

Como en el video lo hacen con react-router-dom version 5 en vez de `<Routes>` tienen `<Switch>` y el ``<Route /> ` tiene **component** en vez de **element**.

Y para mostrar el detalle del producto tengouna **ruta dinámica**:

```JSX
<Route path="/product/:id" element={<DetailContainer />} />
```

Como extra puedo hacer un path a "\*" para que cualquier otra cosa que toquen me lleve en vez de a un error a una UI que tenga las opciones de a donde ir o me devuelva la home.

### :star: 1.4 - Estados y técnicas de rendering

- Para los **State** uso el **useState** y el setVariable.

- Para mostrar los productos utilizo el **.map()**

```JSX
import React, { useState } from "react";
import { LIST } from "../../international";
import Title from "../../components/title/Title";
import { Link } from "react-router-dom";
import "./style.css";

const ListContainer = () => {
  const list = [
    { id: 1, name: "shoes", price: 3000 },
    { id: 2, name: "shirt", price: 2600 },
    { id: 3, name: "t-shirt", price: 1900 },
  ];

  const [products, setProducts] = useState(list);

  return (
    <div className="container">
      <Title text={LIST.title} />
      <section className="product-list">
        {products.map((element, index) => {
          return (
            <div key={index} className="product-card">
              <p>
                <strong>{element.name}</strong>
              </p>
              <p>
                Precio: <a href="/"> $ {element.price}</a>
              </p>
              <Link
                to={`/product/${element.id}`}
                className="cta-link"
                alt={element.name}
              >
                {LIST.text}
              </Link>
            </div>
          );
        })}
      </section>
    </div>
  );
};

export default ListContainer;
```

### :star: 1.5 - useParams

Como la URL que muestra el detalle del producto es dinámica, acorde al **parametro** (**id del producto**) que recibe es el producto que muestra, hay que usar el hook: **useParams**.

1. importo: `JSX import { useParams } from "react-router";`

2. agarro el id que recibo por la URL: `JSX    const  { id } = useParams();`

3. lo usare con **context**.

### :star: 1.6 - useContext

Dentro de `src` creo la carpeta `context` y dentro el archivo **Cart.jsx**.

Tengo que ...

... crear el contexto en una constante / variable

... crear un componente que va a exportar(retornar) esa creación del contexto y se convietrte en el componente proveedor.

En el ListContainer tenia el estado dle listado, pero deberia estar en el context, me lo traigo de ahi.

```JSX
import React, { createContext, useState }  from "react";

export const CartContext = createContext();

export const CartProvider = ({children}) => {
  const list = [
    { id: 1, name: "shoes", price: 3000 },
    { id: 2, name: "shirt", price: 2600 },
    { id: 3, name: "t-shirt", price: 1900 },
  ];

  const [ listProducts, setListProducts ] = useState(list);

  return (
    <CartContext.Provider value={{ listProducts}}> {children}</CartContext.Provider>
  );
}
```
- Tenemos que englobar la App con este context para poder usarlo.

1. Lo importo: ```JSX import { CartProvider } from "./context/Cart.jsx";```

2. Encierro mi App en el ```<CartProvider>```

- Ahora desde **ListContainer** tengo que llamar a ese **context** con el hook **useContext**.


```JSX
const { listProducts } = useContext(CartContext);
```

Y lo que voy a renderizar mapeando es **listProducts**.

### :star: 1.7 - UseEffect

Hya que tomar el listado de productos (**listProducts**) que viene del context, filtrarlo, para que en DetailContainer lo mostremos.

Ya tenemos el **id** para poder filtrar el listado de productos.

Ahora hay que traer el contexto: ```JSX const { listProducts} = useContext(CartContext); ```

Filtro el listado de productos por el **id** con el hook ***useEffect** para utilizar el ciclo de vida **componenteDidMount** (una vez que se monta el componente, se ejecuta useEffect).

Voy a traer todo el listado y lo voy a filtrar por el id, recordar que de la URL viene como String y yo tengo el id en Number:
```JSX
let result = listProducts.filter((element) => element.id === Number(id));
```

Y para poder mostrarlo hay que **guardarlo en un estado**:
```JSX
const [ product, setProduct ] = useState({});
```

Lo setteo con el **useEffect**:
```JSX
useEffect(() => {
  let result = listProducts.filter((element) => element.id === Number(id));
  setProduct(result[0]]
}, []);
```

---

## :star2: 2. React Lazy & Suspense

---

## :star2: 3. NextJS

---

## :star2: 4. Graphql

---

## :star2: 5. Jest & React Testing Library

---

## :star2: 6. Manejo de errores

---
