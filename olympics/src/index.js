import './css/normalize.css';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './Header';
import Intro from './Intro';

ReactDOM.render(<Header />, document.getElementById('header'));
ReactDOM.render(<Intro />, document.getElementById('root'));
