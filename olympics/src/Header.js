import React, { Component } from 'react';
import './css/header.scss';

class Header extends Component {
  render() {
    return (
      <header className="header">
      <section className="wrapper wrapper__medium">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <a href="#"><li>Home</li></a>
              <a href="#"><li>About</li></a>
              <a href="#"><li>Info</li></a>
              <a href="#"><li>Contact</li></a>
            </ul>
          </div>
        </nav>
        <a href="#no-link" className="header__more">About</a>
        <div className="header__logo-wrapper">
          <a href="#linkToHome" className="header__logo">OUAG</a>
        </div>
      </section>
      </header>
    );
  }
}

export default Header;