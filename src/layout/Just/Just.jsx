import { useEffect, useState } from 'react';
import SingleInfo from './SingleInfo';

const Just = () => {
  const [data, setData] = useState([]);
  const [{ count }, setCount] = useState([]);
  const [itemsPerpage, setItemPerPage] = useState(8);
  const [currentPage, setCurrentPage] = useState(0);

  // const itemsPerpage = 8;
  const numberOfPages = Math.ceil(count / itemsPerpage);

  // const pages = [...Array(numberOfPages).keys()];
  const pages = [];
  for (let i = 0; i < numberOfPages; i++) {
    pages.push(i);
  }
  console.log(pages);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BASE_URL}/productCount`)
      .then((res) => res.json())
      .then((data) => setCount(data));
  }, []);
  // console.log(count);
  useEffect(() => {
    try {
      fetch(
        `${import.meta.env.VITE_BASE_URL}/product?page=${parseInt(
          currentPage
        )}&size=${parseInt(itemsPerpage)}`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNextPage = () => {
    if (currentPage > pages.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="md:px-24 px-5 my-4 mt-12">
      <div className="text-center">
        <h1 className="text-2xl text-center font-bold uppercase bg-gradient-to-tr from-purple-800 to-violet-300 inline-block text-transparent bg-clip-text ">
          Daily Deals
        </h1>
      </div>
      <p className="text-center mb-8 mt-2 opacity-90">
        Best selers of those products
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        {data.map((item) => (
          <SingleInfo key={item._id} info={item} />
        ))}
      </div>
      <div className="flex items-center gap-4 my-6">
        <button
          onClick={handlePrevPage}
          className="border rounded-md mt-4 px-4 py-1"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            onClick={() => setCurrentPage(page)}
            className={`border ${
              currentPage === page && 'bg-rose-300'
            } rounded-md mt-4 px-4 py-1`}
            key={page}
          >
            {page}
          </button>
        ))}
        <button
          onClick={() => handleNextPage()}
          className="border rounded-md mt-4 px-4 py-1"
        >
          Next{' '}
        </button>
      </div>
    </div>
  );
};

export default Just;
