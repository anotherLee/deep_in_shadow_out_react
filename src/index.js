import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
// import ClickCounter from './ClickCounter'
import ControlPanel from './chapter-02/controlpanel_with_summary/ControlPanel'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ControlPanel />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
