import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './components/Root';
import AddCoffee from './components/AddCoffee';
import UpdateCoffee from './components/UpdateCoffee';
import Home from './components/Home';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import AuthProvider from './provider/AuthProvider';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:2000/coffee')
      },
      {
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/addcoffee',
        element: <AddCoffee />
      },
      {
        path: '/updatecoffee/:id',
        element: <UpdateCoffee />,
        loader: ({ params }) => fetch(`http://localhost:2000/coffee/${params.id}`)
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
