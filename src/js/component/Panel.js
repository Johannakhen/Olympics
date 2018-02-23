import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Panel extends Component {

	// show() {
	//     const panel = document.getElementById('panel')
	//     panel.classList.toggle('show')
	// }

	render() {
		return (
			<div id="panel">
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
			)
		}
	}