import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: null
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    const id = e.target.getAttribute('data-id');
    if (this.state.onClick === id) {
      this.setState({ onClick: null });
    } else {
      this.setState({
        onClick: id
      });
    }
  }

  render() {
    const { onClick } = this.state;
    const itemList = this.props.accordionData.map(item => {
      return (
        <div
          key={item.id}
          className="item"
          onClick={this.handleClick}>
          <div
            data-id={item.id}
            className="topic-name">
              {item.name}
          </div>
          {onClick === item.id &&
          <div className="topic-content">{item.content}</div>}
        </div>
      );
    });
    return (
      <ul className="container">{itemList}</ul>
    );
  }
}
