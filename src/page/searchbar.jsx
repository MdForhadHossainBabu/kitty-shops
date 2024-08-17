import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import Search from './search';

const SearchBar = () => {
  const [searchItem, setSearchItem] = useState([]);
  const [value, setValue] = useState('');
  const navigate = useNavigate();
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onSearch = (searchTerm) => {
    console.log('search', searchTerm);
    navigate('/search');
  };

  useEffect(() => {
    fetch('/categories.json')
      .then((res) => res.json())
      .then((data) => setSearchItem(data));
  }, []);
  // console.log(searchItem);
  return (
    <div className="flex items-center gap-0">
      <Input
        value={value}
        onChange={onChange}
        placeholder="Search Here*"
        name="search"
      />
      <Button onClick={() => onSearch(value)} className="pt-2 bg-slate-500">
        <FaSearch />
      </Button>
      <div className="">
        {/* {searchItem.map((item, index) => (
          <SearchBar key={index} value={item} />
        ))} */}
      </div>
    </div>
  );
};

export default SearchBar;
