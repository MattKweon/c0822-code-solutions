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
    const id = e.target.getAttribute('data-id');
    this.setState({
      onClick: !this.state.onClick,
      currentTab: id
    });
  }

  render() {
    const { onClick } = this.state;
    const className = 'topic-content';
    const itemList = accordionData.map(item => {
      return (
        <div key={item.id} className="item" onClick={this.handleClick}>
          <div data-id={item.id} className="topic-name">{item.name}</div>
          {onClick && <div className={className}>{item.content}</div>}
        </div>
      );
    });
    return (
      <ul className="container">{itemList}</ul>
    );
  }
}

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
