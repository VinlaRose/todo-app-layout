import React from 'react';
import ReactDOM from 'react-dom/client';
import './others/index.css';
import App from './App';
import reportWebVitals from './others/reportWebVitals';
import { BrowserRouter as Router } from 'react-router-dom';
import { TodoContext, TodoContextProvider } from './contexts/Context';


export {TodoContext}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <TodoContextProvider><App /></TodoContextProvider>
        </Router>
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
