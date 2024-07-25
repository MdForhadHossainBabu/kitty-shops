import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar";


const Main = () => {
 return (
   <div>
     <div className="h-14">
       <Navbar />
     </div>
     <div>
       <Outlet />
     </div>
   </div>
 );
};

export default Main;