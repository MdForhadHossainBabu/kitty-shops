import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";


const Management = () => {
 const { user } = useAuth();
 return (
   <div className="h-auto font-nunito">
     <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-500 via-indigo-500 to-cyan-500 inline-block text-transparent bg-clip-text pt-3 font-sevilana tracking-wider">
       {' '}
       Manage My Account
     </h1>
     <div className="pt-3 grid grid-cols-3 gap-4 ">
       <div className="border bg-slate-200 pt-4 pb-12 px-2">
         <div className="flex items-center gap-2">
           <h1 className="text-lg font-nunito font-light">Personal Profile</h1>
           <span>|</span>
           <Link
             to="/edit-profile"
             className="uppercase text-sm bg-gradient-to-r from-rose-500 to-cyan-400 inline-block text-transparent bg-clip-text"
           >
             edit
           </Link>
         </div>
         <div className="space-y-2 my-3 py-1">
           <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
             {user.displayName}
           </h1>
           <h4 className="text-sm text-slate-900/90">{user.email}</h4>
         </div>
         <a
           href="https://youtube.com/@yesforhad"
           target="_blank"
           className="tracking-[0.14em] text-sm visited:text-orange-400 "
         >
           Subscribe to our chanel
         </a>
       </div>
       <div className="col-span-2 border">a</div>
     </div>
   </div>
 );
};

export default Management;