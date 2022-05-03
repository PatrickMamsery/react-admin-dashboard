import React from 'react';
import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';

import './assests/boxicons-2.1.2/css/boxicons.min.css';
import './assests/css/grid.css';
import './assests/css/index.css';

import Layout from './components/layout/Layout';

document.title = 'Dashboard';

ReactDOM.render(
  
    <React.StrictMode>
      <Layout />
    </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
