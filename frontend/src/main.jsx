import React, { Children, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/Home.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blogs from './pages/Blogs.jsx'
import Services from './pages/Services.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import BlogDetails from './Components/BlogDetails.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children:[
      {
        path : '',
        element: <Home />
      },
      {
        path:'blogs',
        element : <Blogs />
      },
      {
        path :'services',
        element : <Services />
      },
      {
        path: 'about',
        element :<About />
      },
      {
        path : 'contact',
        element : <Contact />
      },
      {
        path : '/blogs/:id',
        element : <BlogDetails />
      }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>,
)
