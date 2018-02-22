import React, { Component } from 'react';
// import Header from './Header';
// import './css/header.scss';
// import './css/intro.scss';
import {TimelineLite,TweenLite} from 'gsap';
import _gsScope from './libs/SplitText';
// import sound from './img/sound.svg';
// import soundBars from './img/sound-bars.svg';

export default class App extends Component {

  constructor (){
    super()
  }

  render() {
    return (
      <div className="app">
        <div className="app__nav">
          <ul className="app__navinside">
            <li><img src=""/></li>
            <li><a href="">About</a></li>
            <li><a href="">Ouag</a></li>  
          </ul>
        </div>
        <div className="app__intro">
          <p className="app__intro--text">At the outset, a sporting event is a gathering of persons sharing the same passion.
            What is supposed to be so neutral can be triggering real socio-political leverages.</p>
        </div>
      </div>
    );
  }
}
