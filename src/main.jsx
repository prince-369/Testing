import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import Order from './components/Order'
import Cart from './components/Cart'
import './index.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import { CartProvider } from './context/Context'


const router = createBrowserRouter([{
 path: "/",
 element : <App/>,
 children: [{
  path: "order",
  element: <Order/>
 },
 {
  path: "cart",
  element: <Cart/>
 }

]
}])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    <RouterProvider router={router}/>
   
  </StrictMode>,
)
