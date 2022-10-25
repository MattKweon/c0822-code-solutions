import React from 'react';

class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClicked: 0 };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    let x = this.state.onClicked;
    x++;
    this.setState({ onClicked: x });
  }

  render() {
    if (this.state.onClicked > 3 && this.state.onClicked <= 6) {
      return (
        <button className="lvl-2" onClick={ this.handleClick }>
          Hot Button
        </button>
      );
    } else if (this.state.onClicked > 6 && this.state.onClicked <= 9) {
      return (
        <button className='lvl-3' onClick={ this.handleClick }>
          Hot Button
        </button>
      );
    } else if (this.state.onClicked > 9 && this.state.onClicked <= 12) {
      return (
        <button className='lvl-4' onClick={ this.handleClick }>
          Hot Button
        </button>
      );
    } else if (this.state.onClicked > 12 && this.state.onClicked <= 15) {
      return (
        <button className='lvl-5' onClick={ this.handleClick }>
          Hot Button
        </button>
      );
    } else if (this.state.onClicked > 15) {
      return (
        <button className='lvl-6' onClick={ this.handleClick }>
          Hot Button
        </button>
      );
    } else {
      return (
        <button onClick={ this.handleClick}>
          Hot Button
        </button>
      );
    }
  }
}

export default HotButton;
