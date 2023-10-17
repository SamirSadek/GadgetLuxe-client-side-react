import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root';
import Home from './pages/Home';
import AddProduct from './pages/AddProduct';
import MyCart from './pages/MyCart';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children:[
      {
         path:'/',
         element:<Home></Home>
      },
      {
         path:'/addProduct',
         element:<AddProduct/>
      },
      {
         path:'/myCart',
         element:<MyCart/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
