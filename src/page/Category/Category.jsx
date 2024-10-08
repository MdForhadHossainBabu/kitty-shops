import 'react-tooltip/dist/react-tooltip.css';
import { Link } from 'react-router-dom';
import useAxiosPublic from '@/hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { ThreeCircles } from 'react-loader-spinner';
import { Skeleton } from '@/components/ui/skeleton';

const Category = () => {
  // const [category, setCategory] = useState([]);
  const axiosPublic = useAxiosPublic();
  const { data: category = [], isLoading } = useQuery({
    queryKey: ['carts'],
    queryFn: async () => {
      const res = await axiosPublic.get('/category');
      return res.data;
    },
  });

  //   if (isLoading) {
  //   return <div className="flex items-center flex-col my-[15em]">
  //       <ThreeCircles
  //         visible={true}
  //         height="100"
  //         width="100"
  //         color="#db2777"
  //         ariaLabel="three-circles-loading"
  //         wrapperStyle={{}}
  //         wrapperClass=""
  //       />
  //     </div>

  // }

  return (
    <div className="md:px-24 px-5 my-4 mt-12">
      <h1 className="text-2xl text-slate-900/90 font-nunito">Categories</h1>

      <div className="grid md:grid-cols-8 grid-cols-2 text-balance items-center mt-4">
        {category.map((item, index) => (
          <Link
            key={index}
            className="border-x bg-slate-50 duration-300 hover:shadow-xl hover:drop-shadow-xl hover:border-slate-500/60 border-b h-48 "
          >
            {isLoading ? (
              <Skeleton className=" h-[125px] w-[250px] rounded-xl" />
            ) : (
              <div data-tooltip-id="item" data-tooltip-content={item?.name}>
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
              </div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
