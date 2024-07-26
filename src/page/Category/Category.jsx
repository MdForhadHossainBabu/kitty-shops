import { useEffect } from "react";
import { useState } from "react";
import 'react-tooltip/dist/react-tooltip.css';
import { Tooltip } from 'react-tooltip';
import { Link } from "react-router-dom";


const Category = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch('categories.json').then(res => res.json()).then(data => setCategory(data))
  },[])
 return (
   <div className="md:px-24 px-5 my-4 relative mt-12">
     <h1 className="text-3xl text-slate-900/90 font-semibold font-nunito">
       Categories
     </h1>
     <span className="absolute top-6 text-rose-700">=============</span>
     <Tooltip id="items" />

     <div className="grid md:grid-cols-8 grid-cols-1 text-balance  items-center mt-4">
       {category.map((item, index) => (
         <Link
           key={index}
           className="border-x bg-slate-50 duration-300 hover:shadow-xl hover:drop-shadow-xl hover:border-slate-500/60 border-b h-48 "
         >
           <a data-tooltip-id="items" data-tooltip-content={item.name}>
             <div className="w-full h-36 border-b-2 hover:border-b-black duration-200 border-b-slate-400 p-2">
               <img
                 className="w-full h-full border-4 hover:scale-105 duration-300 p-2 rounded-lg"
                 src={item.image}
                 alt={item.name}
               />
             </div>
             <h1 className="font-nunito text-sm py-2 px-2 font-semibold">
               {item.name}
             </h1>
           </a>
         </Link>
       ))}
     </div>
   </div>
 );
};

export default Category;