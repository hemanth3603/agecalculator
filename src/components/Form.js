import { useState } from 'react';
import PropTypes from 'prop-types';

const Form = ({ calculateAge }) => {
  const [birthDate, setBirthDate] = useState('');

  const handleChangeDate = (e) => {
    setBirthDate(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    calculateAge(birthDate);
  };

  return (
    <form onSubmit={handleSubmit} className='row g-3'>
      <div className='col-auto'>
        <label htmlFor='birthDate' className='visually-hidden'>Birth Date</label>
        <input
          type='date'
          className='form-control'
          value={birthDate}
          id='birthDate'
          onChange={handleChangeDate}
        />
      </div>
      <div className='col-auto'>
        <button
          className='btn btn-primary  ms-2'
          disabled={!birthDate}
          type='submit'
        >
          Calculate Age
        </button>
      </div>
    </form>

  );
};

Form.propTypes = {
  calculateAge: PropTypes.func.isRequired,
};

export default Form;