import { useState } from "react";
import Headroom from "react-headroom";
import { FaMoon, FaSun, FaUserAlt } from "react-icons/fa";
import { HiOutlineShoppingCart } from "react-icons/hi";


const Navbar = () => {
 const [theme, setTheme] = useState(true);

 return (
   <div>
     <Headroom
       className="fixed w-full h-15"
       style={{
         webkitTransition: 'all .5s ease-in-out',
         mozTransition: 'all .5s ease-in-out',
         oTransition: 'all .5s ease-in-out',
         transition: 'all .5s ease-in-out',
       }}
     >
       {/* main div */}

       <div className="flex items-center justify-between px-4 md:px-24 bg-rose-600 text-white font-nunito  pb-3">
         <div>
           <h1 className="font-sevilana md:text-4xl  text-white">Kitty-Shops</h1>
         </div>
         <div className="flex items-center">
           <div className="flex items-center">
             <div className="flex items-center gap-2  px-4 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300">
               <FaUserAlt />{' '}
               <span className="font-semibold text-sm font-nunito md:ml-2">
                 Login
               </span>
             </div>
             <div>|</div>
             <div className=" px-4 py-2 rounded-lg hover:bg-[#d8b1bd] duration-300">
               sign up
             </div>
           </div>
           <div className="text-xl mr-4" onClick={() => setTheme(!theme)}>
             {theme ? <FaSun /> : <FaMoon />}
           </div>
           <div>
             <HiOutlineShoppingCart className="text-2xl" />
           </div>
         </div>
       </div>
     </Headroom>
   </div>
 );
};

export default Navbar;