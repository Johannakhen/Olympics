import './js/split.js';
import React, { Component } from 'react';
import Header from './Header';
import './css/header.scss';
import './css/intro.scss';
import {TimelineLite,TweenLite} from 'gsap';
import SplitText from './js/split';

class Intro extends Component {
  constructor (){
    super()
    this.animate = this.animate;
  }
  animate(){
    var tl = new TimelineLite(),
    mySplitText = new SplitText(".intro__text", {type:"words,chars"}),
    chars = mySplitText.chars; //an array of all the divs that wrap each character

  TweenLite.set(".intro__text", {perspective:400});

  tl.staggerFrom(chars, 0.8, {opacity:0, scale:0, y:80, rotationX:180, transformOrigin:"0% 50% -50"}, 0.01, "+=0");

  }
  render() {
    return (
      <div>
        <Header></Header>
        <section className="intro">
          <div className="overlay">
          {/* <button onClick={this.animate}>Activate Lasers</button> */}
          </div>
          <div className="intro__wrapper center">
            <p className="intro__text">At the outset, a sporting event is a gathering of persons sharing the same passion.
            What is supposed to be so neutral can be triggering real socio-political leverages.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default Intro;