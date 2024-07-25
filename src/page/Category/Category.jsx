

const Category = () => {
 const category = [1, 2, 3, 4,5 ,6, 7, 8]
 const category2 = [1, 2, 3, 4,5 ,6,7,8]
 return (
   <div className="px-24 my-4 relative mt-12">
     <h1 className="text-3xl text-slate-900/90 font-semibold font-nunito">
       Categories
     </h1>
     <span className="absolute top-6 text-rose-700">=============</span>
     <div className="grid grid-cols-8 text-balance  items-center mt-4">
       {category.map((item, index) => (
         <div
           key={index}
           className="border-x bg-slate-50 duration-300 hover:shadow-xl hover:drop-shadow-xl hover:border-slate-500/60 border-b h-48  flex flex-wrap md:flex-nowrap"
         >
           name
         </div>
       ))}
       {category2.map((item, index) => (
         <div
           key={index}
           className="border-x bg-slate-50 duration-300 hover:shadow-xl hover:drop-shadow-xl hover:border-slate-500/60 border-b h-48  flex flex-wrap md:flex-nowrap"
         >
           name
         </div>
       ))}
     </div>
   </div>
 );
};

export default Category;