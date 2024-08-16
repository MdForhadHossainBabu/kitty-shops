import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
 return (
  <>
  <div className="text-center flex flex-col ">
   <h1 className="text-[14rem] bg-gradient-to-r from-blue-600 to-rose-500 text-transparent bg-clip-text inline-block  font-bold  font-sevilana">Opps.</h1>
   </div>
   <Link className="flex items-center justify-center">
   <Button>Go Home</Button>
   </Link>
  </>
 );
};

export default ErrorPage;