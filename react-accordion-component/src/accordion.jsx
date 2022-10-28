import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };
  }

  render() {
    return (
      <div className='headers'>
        <HeaderList topicNames={topicNames} />
      </div>
    );
  }
}

function HeaderList(props) {
  const names = props.topicNames;
  const listItems = names.map(name => {
    return <li key={name.id} className='topics'>{name.name}</li>;
  });
  return (
    <ul>{ listItems }</ul>
  );

}

const topicNames = [
  { id: '1', name: 'Hypertext Markup Language' },
  { id: '2', name: 'Cascading Style Sheets' },
  { id: '3', name: 'JavaScript' }
];

// const topicTextContent = [
//   {
//     id: '1', content: `Hypertext Markup Language (HTML) is the standard markup
//                        language for creating web pages and wev applications. With
//                        Cascading Style Sheets (CSS) and JavaScript, it forms a
//                        triad of cornerstone technologies for the World Wide Web.`
//   },
//   {
//     id: '2', content: `Cascading Style Sheets (CSS) is a style sheet language used
//                        for describing the presentation of a document written in a
//                        markup language like HTML. CSS is a cornerstone technology
//                        of the World Wide Web alongside HTML and JavaScript.`
//   },
//   {
//     id: '3', content: `JavaScript often abbreviated as JS, is a high-level,
//                        interpreted programing language that conforms to the
//                        ECMAScript specification. JavaScript has curly-bracket
//                        syntax, dynamic typing, prototype-based object-oriented,
//                        and first-class functions.`
//   }
// ];
