# <img src="https://img.icons8.com/bubbles/30/null/react.png"/> React Avanzado

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

## :star: 1. Introducción


## 1.1 - Introoducción teórica

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

```JSX

```
## 1.2 - Componentes

## 1.3 - Routing

## 1.4 - Estados y técnicas de rendering

## 1.5 - useParams

## 1.6 - useContext

## 1.7 - UseEffect

---

## :star: 2. React Lazy & Suspense

---

## :star: 3. NextJS

---

## :star: 4. Graphql

---

## :star: 5. Jest & React Testing Library

---

## :star: 6. Manejo de errores

---
