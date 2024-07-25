import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Main from "../layout/Main/Main";
import Home from "../layout/Home/Home";

export const router = createBrowserRouter([
 {
  path: '/',
  element: <Main />,
  errorElement: <div>404</div>, 
  children: [
   {
    index: true,
    element: <Home/>
   }
  ]
 }
])