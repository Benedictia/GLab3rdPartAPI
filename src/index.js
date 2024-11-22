import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';  // Import global styles (optional)
import App from './App';  // Import the App component
import reportWebVitals from './reportWebVitals';  // Optional, for performance measuring

// Render the App component inside the 'root' div in index.html
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// Optional: You can log web vitals for performance tracking
reportWebVitals();
