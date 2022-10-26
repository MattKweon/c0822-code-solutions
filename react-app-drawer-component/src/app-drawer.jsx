import React from 'react';

class AppDrawer extends React.Component {
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
        { this.state.onClick
          ? (
          <div>
              <i className="fa-solid fa-bars" onClick={this.handleClick}></i>
              <div className='img-container'>
                <img src='../images/mr-fill.png' />
              </div>
              <div className='backdrop'></div>
          </div>
            )
          : (
          <div>
              <i className="fa-solid fa-bars" onClick={ this.handleClick }></i>
              <div className='img-container'>
                <img src='../images/mr-fill.png'/>
              </div>
          </div>
            )}
      </div>
    );
  }
}

export default AppDrawer;
