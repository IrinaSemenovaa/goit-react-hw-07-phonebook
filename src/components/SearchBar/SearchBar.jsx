import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import {SearchInputStyles } from './SearchBarStyles';

export default function SearchBar() {
  const dispatch = useDispatch();

  // отримала значеняя filter стану сховища
  const filter = useSelector(selectFilter);

  const handleFilterChange = e => {
    const filterValue = e.target.value;
    //  відправила нове значення у сховище
    dispatch(setFilter(filterValue));
  };

  return (
    <div>
      <h2>Contacts</h2>
      <SearchInputStyles
        type="text"
        onChange={handleFilterChange}
        value={filter}
      />
    </div>
  );
}
