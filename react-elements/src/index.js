import React from 'react';
import ReactDOM from 'react-dom/client';

const container = document.querySelector('#root');

const newElement = React.createElement(
  'h1',
  null,
  ['Hello, React!']
);
console.log(newElement);

const root = ReactDOM.createRoot(container);

root.render(newElement);
