import React from 'react';
import { nanoid } from 'nanoid';
import PropTypes from 'prop-types';
import { FilterForm } from './Filter.styled';

export default function Filter({ title, value, onChange }) {
  const filterId = nanoid();
  return (
    <div>
      <label htmlFor="filterId">{title}</label>
      <FilterForm
        id={filterId}
        type="text"
        name="filter"
        onChange={onChange}
        value={value}
        placeholder="Enter name to search"
      />
    </div>
  );
}

Filter.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
