import React, { Component } from 'react';
import './css/header.scss';

class Header extends Component {
  showPanel(){
    var element = document.getElementById('close');
    element.classList.add('opened');
    element.addEventListener('click', () => {
      element.classList.remove('opened');
    });
  }
  render() {
    return (
      <header className="header" id="header">
      <section className="wrapper wrapper__medium">
        <nav role="navigation">
          <div id="menuToggle">
            <input id="close" />
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
        <li id="header__more" onClick={this.showPanel}>About</li>
        <div id="header__logo-wrapper">
          <a href="#linkToHome" id="header__logo">OUAG</a>
        </div>
      </section>
      </header>
    );
  }
}

export default Header;