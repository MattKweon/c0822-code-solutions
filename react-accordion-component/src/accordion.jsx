import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };
  }

  render() {
    return (
      <div className='headers'>
        <div data-header-id='1' className='topics'></div>
        <div data-header-id='2' className='topics'></div>
        <div data-header-id='3' className='topics'></div>
      </div>
    );
  }
}
