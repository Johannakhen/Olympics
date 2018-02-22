import React, { Component } from 'react';
import {TimelineLite,TweenLite} from 'gsap';
import SplitText from '../libs/SplitText';
// import sound from './img/sound.svg';
// import soundBars from './img/sound-bars.svg';

export default class App extends Component {

  constructor (){
    super()
  }

  animate(){
    var tl = new TimelineLite();

    var mySplitText = new SplitText.SplitText(".app__intro--text", {type:"words,chars"}),
    chars = mySplitText.chars; //an array of all the divs that wrap each character
    TweenLite.set(".app__intro__text", {perspective:400});
    tl.staggerFrom(chars, 0.8, {opacity:0, scale:0}, 0.01, "+=0");
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
        <div className="app__intro" onClick={this.animate}>
          <p className="app__intro--text">At the outset, a sporting event is a gathering of persons sharing the same passion.
            What is supposed to be so neutral can be triggering real socio-political leverages.</p>
        </div>
      </div>
    );
  }
}
