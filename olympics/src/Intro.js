import React, { Component } from 'react';
import './css/intro.scss';

class Intro extends Component {
  render() {
    return (
      <section className="intro">
        <div className="overlay"></div>
        <div className="intro__wrapper center">
          <p className="intro__text">At the outset, a sporting event is a gathering of persons sharing the same passion.
          What is supposed to be so neutral can be triggering real socio-political leverages.
          </p>
        </div>
      </section>
    );
  }
}

export default Intro;