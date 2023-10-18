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
import Brand from './components/Brand';
import SpecificBrand from './components/SpecificBrand';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    
    children:[
      {
         path:'/',
         element:<Home></Home>,
         loader: ()=> fetch('http://localhost:5000/brands')
      },
      {
         path:'/addProduct',
         element:<AddProduct/>
      },
      {
         path:'/myCart',
         element:<MyCart/>
      },
      {
         path:'/brand',
         element:<Brand/>
      },
      {
         path:'/brands/:name',
         element:<SpecificBrand/>,
         loader: ({params})=> fetch(`http://localhost:5000/brands/${params.name}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
