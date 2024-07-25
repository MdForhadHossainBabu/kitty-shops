import { useState } from "react";
import Headroom from "react-headroom";
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { Link } from "react-router-dom";


const Navbar = () => {
 const [theme, setTheme] = useState(true);

 return (
   <div>
     <Headroom
       className="fixed w-full h-15 z-20"
       style={{
         webkitTransition: 'all .5s ease-in-out',
         mozTransition: 'all .5s ease-in-out',
         oTransition: 'all .5s ease-in-out',
         transition: 'all .5s ease-in-out',
       }}
     >
       {/* main div */}

       <div className="flex items-center justify-between px-4 md:px-24 bg-rose-600 text-white font-nunito  pb-3">
         <Link to='/'>
           <h1 className="font-sevilana text-2xl md:text-4xl  text-slate-100">Kitty-Shops</h1>
         </Link>
         <div className="flex items-center">
           <div className="flex items-center">
             <Link to='/login' className="flex items-center gap-2  px-4 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300">
               <FaUserAlt />{' '}
               <span className="font-semibold text-sm font-nunito md:ml-2">
                 Login
               </span>
             </Link>
             <div>|</div>
             <Link to='/register' className=" px-4 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300">
               sign up
             </Link>
           </div>
           <div className="text-xl mx-2" onClick={() => setTheme(!theme)}>
             {theme ? <FaSun /> : <FaMoon />}
           </div>
           <Link to='/cart' className="duration-300 rounded-lg px-5 py-1 hover:bg-slate-500/60">
             <HiOutlineShoppingCart className="text-2xl" />
           </Link>
         </div>
       </div>
     </Headroom>
   </div>
 );
};

export default Navbar;