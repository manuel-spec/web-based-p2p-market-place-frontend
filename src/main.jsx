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

const ProtectedRoute = ({ element: Component }) => {
  const cookies = new Cookies();
  const token = cookies.get("jwt");
  const navigate = useNavigate();

  useEffect(() => {
    // Check if JWT token exists
    if (!token) {
      // Redirect to sign-in page if token doesn't exist
      navigate("/auth/signin");
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
        element: <Products />
      }
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
