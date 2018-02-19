import React, { Component } from 'react';
import './css/header.scss';

class Header extends Component {
  render() {
    return (
      <section className="wrapper wrapper__medium">
        <a href="#no-link" className="header__more">About</a>
        <div className="header__logo-wrapper">
          <a href="#linkToHome" className="header__logo">OUAG</a>
        </div>
      </section>
    );
  }
}

export default Header;