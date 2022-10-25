import React from 'react';

class Stopwatch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ onClick: true });
  }

  render() {
    return (
      <div>
        <div className='container'>
          <h2>0</h2>
        </div>

      </div>
    );
  }
}

export default Stopwatch;
