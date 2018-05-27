import React from 'react';
import ReactDOM from 'react-dom';
import { configure } from 'mobx';
import App from './App';
import './assets/favicon.ico';

ReactDOM.render(<App />, document.getElementById('root'));

configure({
    enforceActions: true
});