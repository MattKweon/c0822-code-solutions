import React from 'react';

class AppDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { onClick: false };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ onClick: !this.state.onClick });
  }

  render() {
    return (
      <div>
        { this.state.onClick
          ? (
          <div>
              <div className='img-container'>
                <img src='../images/mr-fill.png' />
              </div>
              <div className='backdrop' onClick={ this.handleClick }></div>
              <div className='menu'>
                <div className='content'>
                  <h2>Doctor</h2>
                  <ul>
                    <li onClick={ this.handleClick }>GREEN</li>
                    <li onClick={ this.handleClick }>RED</li>
                    <li onClick={ this.handleClick }>YELLOW</li>
                    <li onClick={ this.handleClick }>ORANGE</li>
                    <li onClick={ this.handleClick }>BLUE</li>
                  </ul>
                </div>
              </div>
              <i className="fa-solid fa-bars" onClick={ this.handleClick }></i>
          </div>
            )
          : (
          <div>
              <div className='img-container'>
                <img src='../images/mr-fill.png'/>
              </div>
              <i className="fa-solid fa-bars" onClick={ this.handleClick }></i>
          </div>
            )}
      </div>
    );
  }
}

export default AppDrawer;
