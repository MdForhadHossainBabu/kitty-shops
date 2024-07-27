import { Helmet } from "react-helmet-async";
import useAuth from "../../hooks/useAuth";
import HomeM from "./HomeM";
import { NavLink } from "react-router-dom";

const ManageAc = () => {
 const { user } = useAuth();
 return (
   <div className="flex md:px-6 lg:px-24 px-5 gap-2 font-nunito">
     <Helmet>
       <title>Manage My Account</title>
     </Helmet>
     <div className="w-64 text-balance h-auto">
       <div className="py-4">
         <h1 className="text-[13px] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
           Hello, {user.displayName}
         </h1>
       </div>
       <NavLink
         to="/manage-account"
         end
         className={({ isActive }) =>
           isActive ? 'text-cyan-500' : 'text-black'
         }
       >
         Manage My Account
       </NavLink>
       <div className="px-4 flex flex-col gap-1 mt-2">
         <NavLink
           to="/manage-account/my-profile"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-sm text-slate-800/90'
           }
         >
           My Profile
         </NavLink>
         <NavLink
           to="/manage-account/address-book"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-sm text-slate-800/90'
           }
         >
           Address Book
         </NavLink>
         <NavLink
           to="/manage-account/my-payment-options"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-sm text-slate-800/90'
           }
         >
           My Payment Options
         </NavLink>
       </div>
       <div className="mt-4">
         <NavLink
           to="/manage-account/my-orders"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-black'
           }
         >
           My Orders
         </NavLink>
       </div>
       <div className="px-4 flex flex-col gap-1 mt-2">
         <NavLink
           to="/manage-account/my-returns"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-sm text-slate-800/90'
           }
         >
           My Returns
         </NavLink>
         <NavLink
           to="/manage-account/my-cancellations"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-sm text-slate-800/90'
           }
         >
           My Cancellations
         </NavLink>
       </div>
       <div className="mt-4">
         <NavLink
           to="/manage-account/my-reviews"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-slate-600 font-medium'
           }
         >
           My Reviews
         </NavLink>
       </div>
       <div className="px-4 flex flex-col gap-1 mt-2">
         <NavLink
           to="/manage-account/my-wishlist-store"
           className={({ isActive }) =>
             isActive ? 'text-cyan-500' : 'text-sm text-slate-800/90'
           }
         >
           My Wishlist & <br />
           Stores
         </NavLink>
       </div>
     </div>

     <div className="w-full">
       <HomeM />
     </div>
   </div>
 );
};

export default ManageAc;