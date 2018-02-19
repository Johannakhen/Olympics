import React, { Component } from 'react';
import './css/header.scss';

class Header extends Component {
  render() {
    return (
      <section className="wrapper wrapper__medium">
        <div className="header__more">About</div>
        <div className="header__logo-wrapper">
          <span className="header__logo">OUAG</span>
        </div>
      </section>
    );
  }
}

export default Header;