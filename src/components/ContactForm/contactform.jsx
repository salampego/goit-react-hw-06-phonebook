import { useState } from 'react';
import PropTypes from 'prop-types';

export function ContactForm({ submit }) {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputCorrect = e => {
    const value = e.target.value;
    const name = e.target.name;

    switch (name) {
      case 'name':
        setName(value);
        console.log(value);
        break;
      case 'number':
        console.log(value);
        setNumber(value);
        break;

      default:
    }
    return;
  };

  const onSubmit = e => {
    e.preventDefault();
    console.log(name, number);
    submit({ name, number });
    reset();
  };

  const reset = () => {
    setName('');
    setNumber('');
  };
  return (
    <form onSubmit={onSubmit} className="form">
      <label>
        <p> Name</p>
        <input
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={inputCorrect}
          value={name}
          required
        />
      </label>
      <label>
        <p> Number</p>
        <input
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={inputCorrect}
          required
        />
      </label>
      <br />
      <button type="submit" className="btn-form">
        Submit
      </button>
    </form>
  );
}

ContactForm.propTypes = {
  submit: PropTypes.func.isRequired,
};
