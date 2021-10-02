import React, { Component } from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './ContactForm.module.css';

class ContactForm extends Component {
  static defaultProps = {};

  static propTypes = {
    name: PropTypes.string,
    number: PropTypes.string,
  };

  state = {
    name: '',
    number: '',
  };

  nameInputId = shortid.generate();
  numberInputId = shortid.generate();

  handleChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    this.reset();
  };

  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    const { name, number } = this.state;

    return (
      <form className={s.form} onSubmit={this.handleSubmit}>
        <label htmlFor={this.nameInputId}>
          <span className={s.span}>Name</span>

          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            id={this.nameInputId}
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
          />
        </label>

        <label htmlFor={this.numberInputId}>
          <span className={s.span}>Number</span>

          <input
            className={s.input}
            type="tel"
            name="number"
            value={number}
            onChange={this.handleChange}
            id={this.numberInputId}
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
          />
        </label>
        <br />

        <button className={s.btn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}

export default ContactForm;
