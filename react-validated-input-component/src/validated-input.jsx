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
              <label>
                Password
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={ this.handlePasswordChange } />
              </label>
            </form>
          </div>
            )
          : (
          <div>
            <form>
              <label>
                Password
                <input
                  type='password'
                  id='password'
                  name='password'
                  value={ this.handlePasswordChange } />
              </label>
            </form>
          </div>
            )}
      </div>
    );
  }
}

export default ValidatedInput;
