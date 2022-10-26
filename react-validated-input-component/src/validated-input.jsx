import React from 'react';

class ValidatedInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { password: '' };

    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(e) {
    const val = e.target.value;
    this.setState({ password: val });
  }

  render() {
    if (!this.state.password) {
      return (
        <form>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={ this.state.password }
            onChange={ this.handlePasswordChange } />
          <i className="x fa-solid fa-xmark"></i>
          <span className='empty-msg'>A password is required</span>
        </form>
      );
    } else if (this.state.password.length < 8) {
      return (
        <form>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={ this.state.password }
            onChange={ this.handlePasswordChange } />
          <i className="x fa-solid fa-xmark"></i>
          <span className='too-short-msg'>Your password is too short</span>
        </form>
      );
    } else {
      return (
        <form>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            name='password'
            value={ this.state.password }
            onChange={ this.handlePasswordChange } />
          <i className="check fa-solid fa-check"></i>
        </form>
      );
    }
  }
}

export default ValidatedInput;
