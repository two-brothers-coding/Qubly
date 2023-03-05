import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import Home from './pages/home/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Pricing from './pages/pricing/Pricing';

const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        path:'/',
        element:<Home />
      },
      {
        path:'/pricing',
        element:<Pricing />
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
);


