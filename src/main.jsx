import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider, 
} from "react-router-dom";
import Home from './Pages/Home';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home>Hello world!</Home>,
    errorElement:<ErrorPage/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
