import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Main = () => {
 return (
   <div>
     <div className="h-14">
       <Navbar />
     </div>
     <div className="md:max-w-screen-2xl lg:max-w-screen-3xl mx-auto">
       <Outlet />
     </div>
   </div>
 );
};

export default Main;