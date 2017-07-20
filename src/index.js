// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Internal Dependencies
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Board from './Board';
import { observe } from './Game';

const rootEl = document.getElementById('root');

// Render to the DOM
observe(knightPosition =>
  ReactDOM.render(
    <Board knightPosition={knightPosition} />,
    rootEl,
  )
);

registerServiceWorker();
