import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Root from "../layout/Root";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import Cart from "../layout/Cart/Cart";
import ProtectRoute from "./Protect";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <div>404</div>, 
  children: [
   {
    index: true,
    element: <Root/>
   },
   {
    path: '/login',
    element: <Login/>
   }, 
   {
    path: '/register',
    element: <Register/>
   },
   {
    path: '/cart',
    element:<Cart/>
      }
  ]
 }
])