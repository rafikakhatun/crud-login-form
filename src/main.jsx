import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Register from './component/Register.jsx'






const router = createBrowserRouter([
  
  {
    path:"/",
    element:<App></App>
  },
  
  {
    path:"/Register",
    element:<Register></Register>
  }












])









createRoot(document.getElementById('root')).render(
  <StrictMode>
   <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
