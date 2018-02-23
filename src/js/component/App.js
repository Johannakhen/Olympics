import React, { Component } from 'react';
import {TimelineLite,TweenLite} from 'gsap';
import SplitText from '../libs/SplitText';
import Path from './path';
import Main from '../main'
import Panel from './Panel'

// import sound from './img/sound.svg';
// import soundBars from './img/sound-bars.svg';

export default class App extends Component {

  constructor (){
    super()
    this.close = this.close;
    this.start = this.start.bind(this)
    this.gl = new Main();
  }

  animate(){
    var tl = new TimelineLite();
    var mySplitText = new SplitText.SplitText(".app__intro--text", {type:"words,chars"}),
    chars = mySplitText.chars; //an array of all the divs that wrap each character
    TweenLite.set(".app__intro__text", {perspective:400});
    tl.staggerFrom(chars, 0.8, {opacity:0, scale:0}, 0.01, "+=0");
  }
  start(){
    const intro = document.getElementById('intro')
    const app__map = document.getElementById('app__map')
    intro.classList.add("slideUp")
    app__map.classList.add("active")
    var that = this
    setTimeout(function(){
      console.log(that)
      that.gl.animate()
    },800)
  }

  show(){
  
    event.preventDefault();
    const panel = document.getElementById('panel')
    const link =  document.getElementById('link')
    panel.classList.toggle('show')
    link.classList.toggle('active')
    if (link.classList.contains("active")) {
      link.innerHTML = "Close";
    } else {
        link.innerHTML = "About";
    }
  }


  render() {
    return (
      <section>
       <div className="app__nav">
          <ul className="app__navinside">
            <li><img src=""/></li>
            <li><a href="#" id="link" onClick={this.show}>About</a></li>
            <li><a href="">Ouag</a></li> 
          </ul>
        </div>
        <Panel/>
        <div className="app" id="intro" onLoad={this.animate}>
          <div className="app__intro" >
            <p className="app__intro--text">At the outset, a sporting event is a gathering of persons sharing the same passion.
              What is supposed to be so neutral can be triggering real socio-political leverages.</p>
              <button id="showMap" onClick={this.start}>Show map</button>
          </div>
        </div>
        <div className="app__map" id="app__map">
          <Path/>
        </div>
      </section>
    );
  }
  
}
