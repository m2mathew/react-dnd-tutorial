// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Internal Dependencies
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Board from './Board';

// Render to the DOM
ReactDOM.render(
  <Board knightPosition={[0, 0]} />,
  document.getElementById('root')
);

registerServiceWorker();
