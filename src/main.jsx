import React from 'react';
import ReactDOM from 'react-dom/client';

// FIXED PATHS — change @/ to relative imports
import App from './App.jsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
