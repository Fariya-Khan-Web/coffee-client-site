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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    children: [
      {
        path:'/',
        element: <Home/>,
        loader: ()=> fetch('http://localhost:2000/coffee')
      },
      {
        path:'/addcoffee',
        element: <AddCoffee/>
      },
      {
        path:'/updatecoffee/:id',
        element: <UpdateCoffee/>,
        loader: ({params})=> fetch(`http://localhost:2000/coffee/${params.id}`)
      }
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
