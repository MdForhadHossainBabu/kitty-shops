/* eslint-disable react/prop-types */
import { Card, CardContent } from '@/components/ui/card';
// import useAuth from '@/hooks/useAuth';

// eslint-disable-next-line react/prop-types
const SingleInfo = ({ info }) => {
  console.log(info);
  // const { loading } = useAuth();
  const { name } = info;
  return (
    <div>
      <Card>
        <CardContent>
          <img src="./public/Forhad.jpg" alt="image" />
        </CardContent>
        <div className="flex flex-col gap-1 px-2 mb-3">
          <div>{name}</div>
          <div className="flex items-center gap-2 text-lg ">
            <span>$10</span>
            <span className="font-bold text-xl">-</span>
            <span className="line-through opacity-80">$200</span>
          </div>
          <div>rating</div>
        </div>
      </Card>
    </div>
  );
};

export default SingleInfo;
