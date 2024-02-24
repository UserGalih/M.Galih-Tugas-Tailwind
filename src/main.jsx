import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App.jsx';
import Home from './components/Home/Home.jsx';

const router = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },

  {
    path: "/tailwind",
    element: <App/>
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
