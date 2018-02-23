import React, { Component } from 'react';
import {TimelineLite,TweenLite} from 'gsap';
import SplitText from '../libs/SplitText';
import Path from './path';
// import sound from './img/sound.svg';
// import soundBars from './img/sound-bars.svg';

export default class App extends Component {

  constructor (){
    super()
    this.close = this.close;
  }

  animate(){
    var tl = new TimelineLite();
    var mySplitText = new SplitText.SplitText(".app__intro--text", {type:"words,chars"}),
    chars = mySplitText.chars; //an array of all the divs that wrap each character
    TweenLite.set(".app__intro__text", {perspective:400});
    tl.staggerFrom(chars, 0.8, {opacity:0, scale:0}, 0.01, "+=0");
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
      <div className="app" onLoad={this.animate}>
        <div className="app__nav">
          <ul className="app__navinside">
            <li><img src=""/></li>
            <li><a href="#" id="link" onClick={this.show}>About</a></li>
            <li><a href="">Ouag</a></li> 
          </ul>
        </div>
        <div className="app__intro" >
          <p className="app__intro--text">At the outset, a sporting event is a gathering of persons sharing the same passion.
            What is supposed to be so neutral can be triggering real socio-political leverages.</p>
        </div>
        <div className="app__map">
          <Path/>
        </div>
        <div id="panel">
        {/* <a href="#" id="show" onClick={this.close}>close</a> */}
          <div id="panel__wrapper">
            <div className="align__left">about the project</div>
            <div className="align__right">
              <strong>Once Upon A Game aka OUAG, is an interactive website born from a school project which tells the story of the Olympic Games from a socio-political point of view.</strong>
              <p>Through several milestones such as the Games of Antwerp (1920), Berlin (1936), Melbourne (1956), Moscow (1980), Mexico (1968) or Montreal (1976), we tried to demonstrate the following problem: "How does a sporting event exacerbate and expose tensions within the organizing country and in the world? ".
              In order to achieve this, we carried out a long journalistic work that we transcribed and synthesized while mixing it with a dark graphic aspect.</p>
              <small>6 month project, 5 contributors: Johanna Khen, Gaoussou Koné, Florian Planchenault, Jade Mihami, Tiffanie Train.</small>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
}
