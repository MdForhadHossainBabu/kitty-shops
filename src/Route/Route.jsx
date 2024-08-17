import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main/Main";
import Root from "../layout/Root";
import Login from "../layout/Login/Login";
import Register from "../layout/Register/Register";
import Cart from "../layout/Cart/Cart";
import ProtectRoute from "./Protect";
import ManageAc from "../layout/ManageAc/ManageAc";
import Management from "../layout/ManageAc/Management";
import ErrorPage from "../page/ErrorPage/ErrorPage";
import MyOrder from "../page/MyOrder/MyOrder";
import MyReviews from "../page/MyReviews/MyReviews";
import MyProfile from "../layout/ManageAc/MyProfile/MyProfile";
import AddressBook from "../layout/ManageAc/AddressBook/AddressBook";
import MyPaymentOptions from "../layout/ManageAc/MyPaymentOptions/MyPaymentOptions";
import MyReturns from "../page/MyOrder/MyReturns/MyReturns";
import MyCancellations from "../page/MyOrder/MyCancellations/MyCancellations";
import MyWishlist from "../page/MyReviews/MyWishlist/MyWishlist";
import Search from "@/page/search";
import CartInfo from "@/layout/Just/CartInfo";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Root />,
      },
      {
        path: `/shop/:_id`,
        element: <CartInfo />,
        loader: ({params})=>fetch(`${import.meta.env.VITE_BASE_URL}/product/${params._id}`)
      },
      {
        path: '/search',
        element: <Search/>
      },
      {
        path: '/login',
        element: <Login />,
      },
      {
        path: '/register',
        element: <Register />,
      },
      {
        path: '/cart',
        element: (
          <ProtectRoute>
            <Cart />
          </ProtectRoute>
        ),
      },
      {
        path: '/manage-account',
        element: (
          <ProtectRoute>
            <ManageAc />
          </ProtectRoute>
        ),
        children: [
          {
            index: true,
            element: <Management />,
          },
          {
            path: '/manage-account/my-orders',
            element: <MyOrder />,
          },
          {
            path: '/manage-account/my-reviews',
            element: <MyReviews />,
          },
          {
            path: '/manage-account/my-profile',
            element: <MyProfile />,
          },
          {
            path: '/manage-account/address-book',
            element: <AddressBook />,
          },
          {
            path: '/manage-account/my-payment-options',
            element: <MyPaymentOptions />,
          },
          {
            path: '/manage-account/my-returns',
            element: <MyReturns />,
          },
          {
            path: '/manage-account/my-cancellations',
            element:<MyCancellations/>
          },
          {
            path: '/manage-account/my-wishlist-store',
            element:<MyWishlist/>
          }
        ],
      },
    ],
  },
]);