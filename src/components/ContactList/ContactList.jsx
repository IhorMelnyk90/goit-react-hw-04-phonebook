import React from 'react';
import PropTypes from 'prop-types';
import {ListLi, ListBtnDelete} from './ContactForm.styled'

export default function ContactList({ items, removeContact }) {
  const elements = items.map(({ name, number, id }) => {
    return (
      <ListLi key={id}>
        {name} {number}
        <ListBtnDelete onClick={() => removeContact(id)}>
          Delete
        </ListBtnDelete>
      </ListLi>
    );
  });
  return (
    <>
      <ul>{elements}</ul>
    </>
  );
}

ContactList.defaultProps = {
  items: [],
};

ContactList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
  ),
  removeContact: PropTypes.func.isRequired,
};
