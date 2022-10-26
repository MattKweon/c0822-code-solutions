import React from 'react';
import ReactDOM from 'react-dom/client';
import ToggleBtn from './toggle-switch';

const element = (
  <div>
    <ToggleBtn />
  </div>
);
const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(element);
