import React, { Component } from 'react';
import {TimelineLite,TweenLite} from 'gsap';
import SplitText from '../libs/SplitText';
import Path from './path';
import Main from '../main'
import Panel from './Panel'

import Sound from './Sound';
import SoundBar from './SoundBar';

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
  mute(){
    const element = document.getElementById('mute');
    const audio = document.getElementById('audio');
      element.classList.toggle('mutedSound');
      audio.muted = true;
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
      {/*<audio>
        <source src="./img/bm.mp3" type="audio/mp3">
      </audio>*/}
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
        <div className="app__sound" id="mute" onClick={this.mute}>
          <div className="app__soundBar">
            <SoundBar/>
          </div>
          <div className="app__headset">
            <Sound/>
          </div>
        </div>  
      </section>
    );
  }
  
}
