import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Import BrowserRouter for routing
import App from './App';  // Import your main App component
import './index.css';  // Import your CSS (Tailwind should be configured here)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App /> {/* Render the main App component */}
    </BrowserRouter>
  </React.StrictMode>
);
