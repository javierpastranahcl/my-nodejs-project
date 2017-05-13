import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const title = 'Welcome to React';

ReactDOM.render(
  <App title={title} />,
  document.getElementById('root')
);