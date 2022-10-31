import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: false,
      currentTab: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    if (e.target.matches('li')) {
      // const id = e.target.getAttribute('data-id');
    }
  }

  render() {
    return (
      <div className='headers' onClick={this.handleClick}>
      </div>
    );
  }
}

// function ListItem(props) {
//   const value = props
// }

// function TopicList(props) {
//   const topics = props.topicData
//   const listItems = topics.map(item => {
//     return (
//       <ListItem key={item.id} topics={topicData} />
//     )
//   })
//   return (
//     <ul></ul>
//   )
// }

// const topicData = [
//   {
//     id: '1',
//     name: 'Hypertext Markup Language',
//     content: `Hypertext Markup Language (HTML) is the standard markup
//               language for creating web pages and wev applications. With
//               Cascading Style Sheets (CSS) and JavaScript, it forms a
//               triad of cornerstone technologies for the World Wide Web.`
//   },
//   {
//     id: '2',
//     name: 'Cascading Style Sheets',
//     content: `Cascading Style Sheets (CSS) is a style sheet language used
//               for describing the presentation of a document written in a
//               markup language like HTML. CSS is a cornerstone technology
//               of the World Wide Web alongside HTML and JavaScript.`
//   },
//   {
//     id: '3',
//     name: 'JavaScript',
//     content: `JavaScript often abbreviated as JS, is a high-level,
//               interpreted programing language that conforms to the
//               ECMAScript specification. JavaScript has curly-bracket
//               syntax, dynamic typing, prototype-based object-oriented,
//               and first-class functions.`
//   }
// ];
