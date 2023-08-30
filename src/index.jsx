import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import DateRefresh from './DateRefresh';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <DateRefresh />
    <DateRefresh />
    <DateRefresh />
  </React.StrictMode>
);
