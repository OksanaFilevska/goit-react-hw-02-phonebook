import React from 'react';
import s from './Filter.module.css';
import shortid from 'shortid';

const filterInputId = shortid.generate();

const Filter = ({ filter, onChangeFilter }) => {
  return (
    <label htmlFor={filterInputId}>
      <span className={s.span}>Find contacts by name and number</span>
      <input
        className={s.input}
        type="text"
        value={filter}
        onChange={onChangeFilter}
        id={filterInputId}
      />
    </label>
  );
};

export default Filter;
