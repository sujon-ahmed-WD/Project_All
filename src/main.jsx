import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
 
import ErrorPage from './Pages/ErrorPage';
import Root from './Components/Root';
 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement:<ErrorPage/>
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
