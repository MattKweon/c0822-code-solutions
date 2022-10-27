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

// function HeaderList(props) {
//   const names = props.topicNames.names;

// }

// const topicNames = [
//   { id: '1', name: 'Hypertext Markup Language' },
//   { id: '2', name: 'Cascading Style Sheets' },
//   { id: '3', name: 'JavaScript' }
// ]
