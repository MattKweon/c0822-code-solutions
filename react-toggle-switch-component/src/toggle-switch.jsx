import React from 'react';

class ToggleBtn extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ onClick: !this.state.onClick });
  }

  render() {
    if (this.state.onClick) {
      return (
        <div onClick={ this.handleClick }>
          <div className='switch'>
            <div className='slider-off'></div>
            <div className='btn-off'></div>
          </div>
          <label htmlFor='switch'>OFF</label>
        </div>
      );
    }
    return (
      <div onClick={ this.handleClick }>
        <div className='switch'>
          <div className='slider-on'></div>
          <div className='btn-on'></div>
        </div>
        <label htmlFor='switch'>ON</label>
      </div>
    );
  }
}

export default ToggleBtn;
