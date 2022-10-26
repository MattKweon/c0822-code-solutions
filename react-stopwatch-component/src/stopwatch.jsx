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
  }

  handleClick() {
    if (this.state.onClick) {
      clearInterval(this.state.intervalID);
      this.setState({ onClick: !this.state.onClick });
    } else {
      let count = this.state.count;
      const intervalID = setInterval(() => {
        this.setState({ count: count++ });
      }, 1000);
      this.setState({
        onClick: !this.state.onClick,
        intervalID
      });
    }
    // if (!this.state.onClick) {
    //   clearInterval(intervalID);
    // }
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
            <i className="fa-solid fa-pause" onClick={this.handleClick}></i>
          </div>
            )
          : (
          <div>
            <div className='container'>
              <h2>{this.state.count}</h2>
            </div>
            <i className="fa-solid fa-play" onClick={this.handleClick}></i>
          </div>
            )}
      </div>
    );
  }
}

export default Stopwatch;
