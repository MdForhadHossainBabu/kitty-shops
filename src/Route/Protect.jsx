import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";


const Protect = ({ children }) => {
 const location = useLocation();
 const { user, loading } = useAuth();
 if (loading) {
  return (
   <p>Loading....</p>
  )
 }
 if (user) {
  return children;
 }
 return <Navigate to='login' state={{from: location}} replace />
};

export default Protect;