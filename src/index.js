import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import MainLayout from './Compenent/Layout/MainLayout';
import "@fontsource/montserrat/400.css";
import "@fontsource/montserrat/700.css";
import "@fontsource/montserrat/900.css";



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MainLayout>
      <App />
    </MainLayout>
  </React.StrictMode>
);