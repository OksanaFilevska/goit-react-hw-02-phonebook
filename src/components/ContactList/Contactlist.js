import React from 'react';
import s from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => (
  <ul className="s.list">
    {contacts.map(({ id, name, number }) => (
      <li key={id} className={s.item}>
        <p className="s.contacts">
          {name}: <span>{number}</span>
        </p>
        <button type="button" className={s.btnList} onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </li>
    ))}
  </ul>
);

export default ContactList;
