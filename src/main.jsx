import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Welcome from './components/welcome.jsx'
import Welcome from './components/welcome';
import SignUp from './components/auth/signup.jsx'


const router = createBrowserRouter([
  {
    path: '/',
    element:<App />,
    children: [
      {
        path:'/',
        element:< Welcome/>
      }
    ]
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
