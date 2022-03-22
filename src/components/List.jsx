import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {rotateList} from '../utils/rotateList';

const List = () => {
  const [initialArray, setArray] = useState(['A', 'B', 'C', 'D', 'E']);
  const albums = useSelector((state) => state.albums);

  useEffect(() => {
    const interval = setInterval(() => {
      setArray(rotateList(initialArray, albums));
    },1000);
    return () => clearInterval(interval);
  });

  return (
    <ul className="list">
      {initialArray.map((item, i) => <li className="listItem" key={item + i}>{item}</li>)}
    </ul>
  );
};

export default List;
