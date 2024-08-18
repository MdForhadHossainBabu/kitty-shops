import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Dropdown from 'rc-dropdown';
import 'rc-dropdown/assets/index.css';
import banner1 from '../../assets/banner1.avif';
import banner2 from '../../assets/banner2.avif';
import banner3 from '../../assets/banner3.avif';

const Home = () => {
  const menuItems = [
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Clothing
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Shoes
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Muslims Wear
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Accessories
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Bags
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Watches
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Eyewear
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Jewellery
    </button>,
  ];
  // menu item electronics
  const menuItems1 = [
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Audio
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Wearable
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Gadgets
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Computer Accessories
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      storage
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Printers
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Computer Components
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Network Components
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Software
    </button>,
    <button
      key="1"
      className="py-1 rounded-full w-full px-12 hover:bg-slate-500"
    >
      Camera Accessories
    </button>,
  ];
  const menu = (
    <div className="flex flex-col rounded-xl items-center bg-slate-700 text-white space-y-2 py-4">
      {menuItems}
    </div>
  );
  const menu1 = (
    <div className="flex flex-col rounded-xl items-center bg-slate-700 text-white space-y-2 py-4">
      {menuItems1}
    </div>
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6  lg:grid-cols-4 lg:px-24 px-5 font-nunito  font-semibold">
      <div className="border rounded-xl  bg-gray-100 px-2 py-1 h-[20em] drop-shadow-lg shadow-lg text-xs">
        <div className="space-y-3 ">
          <Dropdown overlay={menu}>
            <button className="w-full hover:bg-white flex px-3 rounded-full bg-slate-200/40 justify-start py-1">
              Mens & Boys Fashion
            </button>
          </Dropdown>
          <Dropdown overlay={menu1}>
            <button className="w-full hover:bg-white flex px-3 py-1 rounded-full bg-slate-200/40 justify-start">
              Electronic Device
            </button>
          </Dropdown>
        </div>
      </div>
      <div className="md:col-span-2 lg:col-span-3 border h- px-6 ">
        <Carousel>
          <CarouselContent>
            <CarouselItem>
              <img className="h-64 w-full" src={banner1} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img className="h-64 w-full" src={banner2} alt="" />
            </CarouselItem>
            <CarouselItem>
              <img className="h-64 w-full" src={banner3} alt="" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default Home;
