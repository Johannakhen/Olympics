import React, { Component } from 'react';
import './css/header.scss';
import sound from './img/denis.mp3';
import menu from './img/menu.png';

class Header extends Component {
  showPanel(){
    var element = document.getElementById('menuToggle');
    element.classList.add('opened');
    element.addEventListener('click', () => {
      element.classList.remove('opened');
    });
  }
  render() {
    return (
      <section>
        <nav role="navigation">
          <div id="menuToggle">
            <div className="menu__close">
              <img src={menu}/>
              <p>close</p>
            </div>
            <span>OUAG</span>
            <div id="menu">
              <div className="menu__wrapper">
                <div className="alignleft"><h3>About the project</h3></div>
                <div className="alignright">
                <strong>Proin gravida, eros at viverra euismod, felis dolor facilisis leo, ac pellentesque felis nulla luctus purus.</strong>
                <p>Aenean vel tristique libero. Ut tempus varius feugiat. Donec tempus nunc faucibus mi facilisis, sit amet accumsan nisi ullamcorper. Pellentesque eget egestas sem. Nulla sit amet porttitor mi, ac porttitor augue.

    Proin gravida, eros at viverra euismod, felis dolor facilisis leo, ac pellentesque felis nulla luctus purus. Phasellus hendrerit tortor ante, nec dapibus dolor ultrices eget.

    Cras aliquam lorem sit amet mollis lacinia. Suspendisse accumsan bibendum odio in eleifend. Morbi tincidunt aliquam eros, facilisis mattis orci vehicula eget.
    Sed ex nibh, aliquam a vestibulum sit amet, congue ac enim. </p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <header className="header" id="header">
        {/* <audio src={sound} autoPlay="true" id="audio"></audio> */}
        <section className="wrapper wrapper__medium">
          <li id="header__more" onClick={this.showPanel}>About</li>
          <div id="header__logo-wrapper">
            <a href="#linkToHome" id="header__logo">OUAG</a>
          </div>
        </section>
        </header>
      </section>
    );
  }
}

export default Header;