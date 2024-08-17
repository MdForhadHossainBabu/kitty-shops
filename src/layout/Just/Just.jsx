import { useEffect, useState } from 'react';
import SingleInfo from './SingleInfo';

const Just = () => {
  const [data, setData] = useState([]);
 useEffect(() => {
   try {
    fetch('/product.json').then(res=> res.json()).then(data => setData(data))
   } catch (error) {
    console.log(error);
   }
  }, [data]);
  return (
    <div className="md:px-24 px-5 my-4 mt-12">
      <h1 className="text-2xl font uppercase my-5">just for you {data.length}</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
     {
    data.map(item => <SingleInfo key={item.id} info={item}/>)
    }</div>
    </div>
  );
};

export default Just;
