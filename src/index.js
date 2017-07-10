import React from 'react';
import ReactDOM from 'react-dom';
import 'whatwg-fetch';
import App from './App';
import './styles/index.css';

ReactDOM.render(
  <App organisation="internet4000" user="hugurp"/>,
  document.getElementById('root')
);
