import React from 'react';
import ReactDOM from 'react-dom';
import App from './pages/App';
import 'antd/dist/antd.css';
import '@simonwep/pickr/dist/themes/classic.min.css';   // 'classic' theme

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


