import React from "react";
import ReactDOM from "react-dom";

// alternativa
// const element = React.createElement('a', { href: 'https://www.platzi.com'}, 'Hola! Soy los children');

// const name = 'Alice';
// const element = React.createElement('h1', {}, `Hola, soy ${name}`);

// const jsx = <h1>Hola soy, {__expresiones__}</h1>;

const element = (
  <div>
    <h1>Hola, soy Alice</h1>
    <p>Soy Front-end Developer</p>
  </div>
);

// const element = React.createElement(
//     'div',
//     {},
//     React.createElement('h1', {}, 'Hola, soy Alice.'),
//     React.createElement('p', {}, 'Soy Front-end Developer.')
// );

const container = document.getElementById("app");

// ReactDOM.render(__qué__, __dónde__);
ReactDOM.render(element, container);
