import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
import Main from './main'


var app = new Main();
app.animate();

ReactDOM.render(<App/>,document.getElementById('root'));
