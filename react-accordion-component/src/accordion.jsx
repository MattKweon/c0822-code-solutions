import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };
  }

  render() {
    return (
      <div className='headers'>
        <HeaderList topicNames={topicNames} />
      </div>
    );
  }
}

function HeaderList(props) {
  const names = props.topicNames;
  const listItems = names.map(name => {
    return <li key={name.id} className='topics'>{name.name}</li>;
  });
  return (
    <ul>{ listItems }</ul>
  );

}

const topicNames = [
  { id: '1', name: 'Hypertext Markup Language' },
  { id: '2', name: 'Cascading Style Sheets' },
  { id: '3', name: 'JavaScript' }
];
