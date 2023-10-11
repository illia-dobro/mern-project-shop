import React from 'react';

import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from './App.tsx';
import './index.css';
import HomeScreen from './bundles/common/screens/home-screen.tsx';
import ProductScreen from './bundles/products/screens/product-screen.tsx';

import { store } from '~/framework/store/store.ts';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <HomeScreen />,
      },
      {
        path: '/product/:id',
        element: <ProductScreen />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
