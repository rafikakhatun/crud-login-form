import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './component/Register.jsx'
import Login from './component/Login.jsx'






const router = createBrowserRouter([
  
  {
    path:"/",
    element:<App></App>
  },

  {
    path:"/Register",
    element:<Register></Register>
  },

  {
    path:"/login",
    element:<Login></Login>
  }












])









createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
