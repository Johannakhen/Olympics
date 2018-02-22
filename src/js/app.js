import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
import Main from './main'


var app = new Main();
window.app = app

ReactDOM.render(<App/>,document.getElementById('root'));
