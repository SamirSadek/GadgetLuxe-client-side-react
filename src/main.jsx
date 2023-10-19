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
import UpdateProduct from './pages/UpdateProduct';
import DetailsProduct from './pages/DetailsProduct';
import Login from './Auth/pages/login';
import SignUp from './Auth/pages/SignUp';
import AuthProvider from './Auth/provider/AuthProvider';
import PrivateRoute from './Auth/components/PrivateRoute';
import ErrorPage from './pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>,
    
    children:[
      {
         path:'/',
         element:<Home></Home>,
         loader: ()=> fetch('http://localhost:5000/brands')
      },
      {
         path:'/addProduct',
         element:<PrivateRoute><AddProduct/></PrivateRoute>
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
         path:'/login',
         element:<Login/>
      },
      {
         path:'/signup',
         element:<SignUp/>
      },
      {
         path:'/brands/:name',
         element:<SpecificBrand/>,
         loader: ({params})=> fetch(`http://localhost:5000/brands/${params.name}`)
      },
      {
         path:'/updateProduct/:id',
         element:<PrivateRoute><UpdateProduct/></PrivateRoute>,
         loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
      {
         path:'/detailsProduct/:id',
         element:<PrivateRoute><DetailsProduct/></PrivateRoute>,
         loader: ({params})=> fetch(`http://localhost:5000/products/${params.id}`)
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
