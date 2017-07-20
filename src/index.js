// External Dependencies
import React from 'react';
import ReactDOM from 'react-dom';

// Internal Dependencies
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import Knight from './Knight';
import Square from './Square';

// Render to the DOM
ReactDOM.render(
  <Square black>
    <Knight />
  </Square>,
  document.getElementById('root')
);

registerServiceWorker();
