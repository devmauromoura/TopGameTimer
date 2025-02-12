import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './config/navigation/Router';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
