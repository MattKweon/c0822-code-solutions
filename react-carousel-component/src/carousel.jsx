import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0
    };

    this.handleClickRight = this.handleClickRight.bind(this);
    this.handleClickLeft = this.handleClickLeft.bind(this);
    this.handleClickDot = this.handleClickDot.bind(this);
  }

  handleClickRight() {
    const currentIndex = this.state.currentIndex;
    if (currentIndex === 4) {
      this.setState({ currentIndex: 0 });
    } else {
      this.setState({ currentIndex: currentIndex + 1 });
    }
  }

  handleClickLeft() {
    const currentIndex = this.state.currentIndex;
    if (currentIndex === 0) {
      this.setState({ currentIndex: 4 });
    } else {
      this.setState({ currentIndex: currentIndex - 1 });
    }
  }

  handleClickDot(e) {
    const id = Number(e.target.getAttribute('data-dot'));
    this.setState({ currentIndex: id });
  }

  render() {
    const { currentIndex } = this.state;
    const pokemonList = carouselImg.map(img => {
      return (
        <div key={img.id}>
        {currentIndex === img.id &&
          <img src={img.src} alt={img.alt} />
        }
        </div>
      );
    });
    return (
      <div className="container">
        <div className="row">
          <div className="col-third">
            <i
              data-button="left"
              className="fa-solid fa-chevron-left icon-margin"
              onClick={this.handleClickLeft}>
            </i>
          </div>
          <div className="col-third">{pokemonList}</div>
          <div className="col-third right-align">
            <i
              data-button="right"
              className="fa-solid fa-chevron-right icon-margin"
              onClick={this.handleClickRight}>
            </i>
          </div>
        </div>
        <div className="row">
          <div className="dot-container col-full text-center">
            {carouselImg.map((img, i) => {
              return (
                <i
                  key={i}
                  data-dot={i}
                  className={currentIndex === i
                    ? 'fa-solid fa-square'
                    : 'fa-light fa-square'}
                  onClick={this.handleClickDot}>
                </i>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const carouselImg = [
  {
    id: 0,
    src: '../images/001.png',
    alt: 'Baulbasuar'
  },
  {
    id: 1,
    src: '../images/004.png',
    alt: 'Charmander'
  },
  {
    id: 2,
    src: '../images/007.png',
    alt: 'Squirtle'
  },
  {
    id: 3,
    src: '../images/025.png',
    alt: 'Pikachu'
  },
  {
    id: 4,
    src: '../images/039.png',
    alt: 'Jigglypuff'
  }
];
