import { Card } from '@/components/ui/card';
import { CardContent } from '@mui/material';
import { useLoaderData } from 'react-router-dom';
import banner from './../../../public/Forhad.jpg';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CartInfo = () => {
  const data = useLoaderData();
  const [value, setValue] = useState([]);
  console.log(data);
  const {
    category,
    description,
    price,
    productCreationDateTime,
    // productImage,
    productName,
    ratings,
    // _id,
  } = data;

  const handleAddToCart = () => {
    fetch(`${import.meta.env.VITE_BASE_URL}/carts`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => setValue(data));
  };

  // const val = value.insertedId === true;
  console.log(value);

  return (
    <div className="lg:px-24 pt-4 grid grid-cols-1 md:grid-cols-2 gap-5">
      <Card>
        <CardContent className="h-full w-full">
          <img className="h-full w-full" src={banner} alt="image" />
        </CardContent>
      </Card>
      <div>
        <h1 className="text-2xl font-medium bg-gradient-to-tr from-violet-800 to-blue-400 inline-block text-transparent bg-clip-text">
          {description}
        </h1>
        <h1 className="uppercase font-medium bg-gradient-to-r from-rose-500 to-indigo-400 inline-block text-transparent bg-clip-text ">
          Name : {productName}
        </h1>
        <h1 className="uppercase font-medium">Category : {category}</h1>
        <h1 className="uppercase text-sm py-2">
          Category : {productCreationDateTime}
        </h1>
        <span>{ratings}</span>
        <div className="flex items-center gap-1 text-xl font-bold">
          <span className="text-violet-700">${price}</span>
          <span>-</span>
          <span className="line-through font-normal">$230</span>
        </div>
        <div className="mt-12 text-2xl font-medium bg-gradient-to-r from-sky-500 to-indigo-400 inline-block text-transparent bg-clip-text">
          <h4>Size : </h4>
          <RadioGroup defaultValue="comfortable">
            <div className="flex items-center space-x-2 mt-6">
              <RadioGroupItem value="default" id="r1" />
              <span className="mb-2">
                {' '}
                <small>
                  {' '}
                  <strong>M</strong>
                </small>
              </span>
            </div>
            <div className="flex items-center  space-x-2">
              <RadioGroupItem value="L" id="r2" />
              <span className="mb-1">
                {' '}
                <small>
                  {' '}
                  <strong>L</strong>
                </small>
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="X" id="r3" />
              <span className="mb-1">
                {' '}
                <small>
                  {' '}
                  <strong>XL</strong>
                </small>
              </span>
            </div>
          </RadioGroup>
        </div>
        {/* button */}
        <div className="mt-8 flex items-center gap-12">
          <Button variant="destructive" className="uppercase px-12">
            Buy Now
          </Button>
          <button
            onClick={() => handleAddToCart()}
            disabled={value.insertedId === true}
            className={`uppercase px-12 border py-2 rounded-md bg-blue-500 text-white font-medium `}
          >
            Add to Cart
          </button>
        </div>
        <div>
          <h1 className="mt-4 text-2xl font-medium bg-gradient-to-r from-rose-500 to-indigo-400 inline-block text-transparent bg-clip-text">
            Product Description :
          </h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default CartInfo;
