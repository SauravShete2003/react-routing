import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter , RouterProvider } from 'react-router-dom';
import Home from'./view/Home/Home'
import About from './view/About/About'
import Login from './view/Login/Login'


const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Home/>,
    },
      {
        path : '/about',
        element : <About/>
      },
      {
        path : '/login',
        element : <Login/>
      }
])

root.render(<RouterProvider router={router}/>)

