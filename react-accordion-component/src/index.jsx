import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './accordion';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

const accordionData = [
  {
    id: '1',
    name: 'Hypertext Markup Language',
    content: `Hypertext Markup Language (HTML) is the standard markup
              language for creating web pages and wev applications. With
              Cascading Style Sheets (CSS) and JavaScript, it forms a
              triad of cornerstone technologies for the World Wide Web.`
  },
  {
    id: '2',
    name: 'Cascading Style Sheets',
    content: `Cascading Style Sheets (CSS) is a style sheet language used
              for describing the presentation of a document written in a
              markup language like HTML. CSS is a cornerstone technology
              of the World Wide Web alongside HTML and JavaScript.`
  },
  {
    id: '3',
    name: 'JavaScript',
    content: `JavaScript often abbreviated as JS, is a high-level,
              interpreted programing language that conforms to the
              ECMAScript specification. JavaScript has curly-bracket
              syntax, dynamic typing, prototype-based object-oriented,
              and first-class functions.`
  }
];

root.render(<App accordionData={accordionData} />);
