/* eslint-disable react/prop-types */
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
// import useAuth from '@/hooks/useAuth';

// eslint-disable-next-line react/prop-types
const SingleInfo = ({ info }) => {
  // console.log(info);
  // const { loading } = useAuth();
  const {
    // category,
    // description,
    // price,
    // productCreationDateTime,
    productImage,
    productName,
    // ratings,
    _id,
  } = info;
  return (
    <Link to={`/shop/${_id}`}>
      <Card>
        <CardContent>
          <img className='h-53 w-full' src={productImage} alt="image" />
        </CardContent>
        <div className="flex flex-col gap-1 px-2 mb-3">
          <div>{productName}</div>
          <div className="flex items-center gap-2 text-lg ">
            <span>$10</span>
            <span className="font-bold text-xl">-</span>
            <span className="line-through opacity-80">$200</span>
          </div>
          <div>rating</div>
        </div>
      </Card>
    </Link>
  );
};

export default SingleInfo;
