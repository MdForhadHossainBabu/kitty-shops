import { useLocation } from "react-router-dom";


const Cart = () => {
 const location = useLocation();
 console.log(location);
 return (
  <div>
   this is cart
  </div>
 );
};

export default Cart;