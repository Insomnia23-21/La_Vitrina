import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import ContextProvider from "./components/ContextProvider";
import './index.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <App />
    </ContextProvider>
  </React.StrictMode>
);