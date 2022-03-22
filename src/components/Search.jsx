import React from 'react';
import {useEffect, useMemo, useState} from 'react';
import debounce from 'lodash.debounce';
import {useDispatch} from 'react-redux';
import {getBands} from '../redux/thunks';

const Search = () => {
  const dispatch = useDispatch();
  const [searchValue, setSearchValue] = useState('');

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    dispatch(getBands(e.target.value));
  };
  const debouncedResults = useMemo(() => debounce(handleChange, 500), []);

  useEffect(() => debouncedResults.cancel());

  return (
    <input
      className="search"
      placeholder="Search Band"
      onChange={debouncedResults}
    />
  );
};

export default Search;
