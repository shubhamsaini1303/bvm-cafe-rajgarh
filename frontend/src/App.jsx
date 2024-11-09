
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainWeb from "./Pages/Website/MainWeb"
import Home from "./Pages/Website/Home"
import About from "./Pages/Website/About"
import Login from "./Pages/Website/Login"
import Register from "./Pages/Website/Register"
import Cart from "./Pages/Website/Cart"
import Order from "./Pages/Website/Order"
import Profile from "./Pages/Website/Profile"
import Address from "./Pages/Website/Address"
import Pay from "./Pages/Website/Pay"

const App = () => {

  const routes = createBrowserRouter([
    {
      path:"/",
      element:<MainWeb/>,
      children:[
        {
          path:"",
          element:<Home/>
        }
        ,
          {
            path:"about",
            element:<About/>
          },
          {
            path:"login",
            element:<Login />
          },
          {
            path:"register",
            element:<Register />
          },
          {
            path:"cart",
            element:<Cart />
          },
          {
            path:"order",
            element:<Order />
          },
          {
            path:"profile",
            element:<Profile />
          },
          {
            path:"address",
            element:<Address />
          },
          {
            path:"pay",
            element:<Pay/>
          }
      ]
    },
  
  ])

  return (
 <RouterProvider router={routes} />
  )
}

export default App