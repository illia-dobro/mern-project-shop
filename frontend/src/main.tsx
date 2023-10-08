import React from 'react'

import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.tsx'
import './index.css'
import HomeScreen from './bundles/common/components/screens/home-screen.tsx';
import ProductScreen from './bundles/products/screens/product-screen.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomeScreen/>,
      },
      {
        path: "/product/:id",
        element: <ProductScreen/>,
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)