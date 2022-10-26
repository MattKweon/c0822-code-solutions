import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onClick: false,
      count: 0,
      intervalID: 0
    };

    this.handleClick = this.handleClick.bind(this);
    this.handleClickReset = this.handleClickReset.bind(this);
  }

  handleClick() {
    if (this.state.onClick) {
      clearInterval(this.state.intervalID);
      this.setState({ onClick: !this.state.onClick });
    } else {
      const intervalID = setInterval(() => {
        this.setState({ count: this.state.count + 1 });
      }, 1000);
      this.setState({
        onClick: !this.state.onClick,
        intervalID
      });
    }
  }

  handleClickReset() {
    this.setState({ count: 0 });
  }

  render() {
    return (
      <div>
        {this.state.onClick
          ? (
          <div>
            <div className='container'>
              <h2>{this.state.count}</h2>
            </div>
            <i className="fa-solid fa-pause" onClick={ this.handleClick }></i>
          </div>
            )
          : (
          <div>
            <div className='container' onClick={ this.handleClickReset }>
              <h2>{this.state.count}</h2>
            </div>
            <i className="fa-solid fa-play" onClick={ this.handleClick }></i>
          </div>
            )}
      </div>
    );
  }
}

export default Stopwatch;
