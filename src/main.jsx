import React from 'react'
import { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Welcome from './components/welcome.jsx'
import Welcome from './components/welcome';
import SignUp from './components/auth/signup.jsx'
import Login from './components/auth/login.jsx'
import Products from './components/products/products.jsx'
import Cookies from "universal-cookie";
import { useNavigate } from "react-router-dom";
import Profile from './components/profile/profile.jsx'
import About from './components/about/about';
import Contact from './components/contact/contact.jsx'
import Post from './components/post/post.jsx'
import verify from './components/post/verify';
import Verify from './components/post/verify'
import MyProducts from './components/products/my_products.jsx'

const ProtectedRoute = ({ element: Component }) => {
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT token exists
    if (!token) {
      // Redirect to sign-in page if token doesn't exist
      navigate("/auth/login");
    }
  }, [token, navigate]);

  return token ? <Component /> : null;
};


const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children: [
      {
        path:'/',
        element:< Welcome/>
      },
      {
        path: '/products',
           element: <ProtectedRoute element={Products} />,
      },
      {
        path: '/my-products',
           element: <ProtectedRoute element={MyProducts} />,
      },
      {
        path: '/me',
           element: <ProtectedRoute element={Profile} />,
      },
      {
        path: '/about',
           element: <About />,
      },
      {
        path: '/contact',
           element: <Contact />,
      },
      {
        path:'/add-product',
        element:< Post/>
      },
      {
        path:'/admin/verify',
        element:< Verify/>
      },
    ]
  },
  {
    path: '/auth/signup',
    element: <SignUp />
  },
  {
    path: '/auth/login',
    element: <Login />
  },
 
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
