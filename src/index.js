import React from 'react';
import ReactDOM from 'react-dom/client';
import { BoardContextProvider } from './context/BoardContext';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

