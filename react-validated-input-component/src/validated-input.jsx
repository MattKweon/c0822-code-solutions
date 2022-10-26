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
    return (
      <div>
        { this.state.password
          ? (
          <div>
            <form>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={ this.handlePasswordChange } />
              <i className="check fa-solid fa-check"></i>
            </form>
          </div>
            )
          : (
          <div>
            <form>
              <label htmlFor='password'>Password</label>
              <input
                type='password'
                id='password'
                name='password'
                value={ this.handlePasswordChange } />
                <i className="x fa-solid fa-xmark"></i>
                <span className='empty-msg'>A password is required</span>
            </form>
          </div>
            )}
      </div>
    );
  }
}

export default ValidatedInput;
