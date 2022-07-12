import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/styles/index.css';
import './assets/fonts/font-style.css';
import 'antd/dist/antd.css';
import { BrowserRouter, Route, Routes } from "react-router-dom"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>

      <Routes>
        
        <Route path='/*' element={<App />} />

      </Routes>


    </BrowserRouter>
  </React.StrictMode>
);

