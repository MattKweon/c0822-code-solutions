import React from 'react';
import ReactDOM from 'react-dom/client';

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(e) {
    const value = e.target.value;
    this.setState({ username: value });
  }

  handlePasswordChange(e) {
    const value = e.target.value;
    this.setState({ password: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log('state:', this.state);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor='username'>Username:</label>
        <input
          type='text'
          id='username'
          name='username'
          value={this.state.username}
          onChange={this.handleUsernameChange} />
        <label htmlFor='password'>Password</label>
        <input
          type='password'
          id='password'
          name='username'
          value={this.state.password}
          onChange={this.handlePasswordChange} />
        <button>Sign Up</button>
      </form>
    );
  }
}

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);

root.render(<RegistrationForm />);
