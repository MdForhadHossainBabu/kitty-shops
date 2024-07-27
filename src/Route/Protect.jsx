import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { ThreeCircles } from "react-loader-spinner";


const ProtectRoute = ({ children }) => {
 const location = useLocation();
 const { user, loading } = useAuth();
 if (loading) {
  return (
    <div className="flex items-center flex-col my-[15em]">
      <ThreeCircles
        visible={true}
        height="100"
        width="100"
        color="#db2777"
        ariaLabel="three-circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
 }
 if (user) {
  return children;
 }
 return <Navigate to='/login' state={{from: location}} replace />
};

export default ProtectRoute;