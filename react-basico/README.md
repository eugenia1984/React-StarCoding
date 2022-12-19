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

Es un entonrno de ejecución de JavaScript que permite ser ejecutado en la computadora, fuera del navegador, gracias al motor v8.

Con nodejs podemos **instalar módulos** y así utulizar las **librerías** con sus módulos adicionales, gracias a **npm** (**node package manager**).

Se descarga desde [https://nodejs.org/en/](https://nodejs.org/en/), siempre la versión **LTS**


Para asegurarnos de que tenemos Nodejs instalado, desde la consola: ``` node --version```, si nos da la version es que ya la tenemos.

Además de tener **Node.js** debemos tener **npm**, asi que también por consola hacemos: ```npm --version```, si nos da el número de la versión es que se instaló bien.

### 1.3 - Creación de nuestra primer create-react-app

---

 ## :star: 2 - Componentes y Eventos
 
 ### 2.1 - Componentes y componentes de presentación
 
 ### 2.2 - Componentes contenedores
 
 ### 2.3 - Eventos


 ---

 ## :star: 3 - Hooks
 
 ### 3.1 - hooks
 
 ### 3.2 - ¿qué son los hooks?

 ---

## :star: 4. Miscelaneos

### 4.1 - Ciclos de vida 

### 4.2 - Técnicas de rendering

---


## :star:  5 - Apis

#### 5.1 - Consumiendo APIs

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
 