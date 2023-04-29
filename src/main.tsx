import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './error-page.jsx';
import Products from './components/Products/Products.tsx';
import About from './components/About.tsx';
import Vip from './components/Vip.tsx';
import OurTeam from './components/OurTeam/OurTeam.tsx';
import Cart from './components/Cart.tsx';

const router = createBrowserRouter([
  { path: '/', element: <App />, errorElement: <ErrorPage /> },
  {
    path: 'products',
    element: <Products />,
  },
  {
    path: 'vip',
    element: <Vip />,
  },
  {
    path: 'about',
    element: <About />,
  },
  {
    path: 'team',
    element: <OurTeam />,
  },
  {
    path: 'cart',
    element: <Cart />,
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
