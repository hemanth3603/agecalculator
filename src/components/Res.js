import PropTypes from 'prop-types';

const Res = ({ age }) => {
    return (
        <h4 className=''>
            You are {age.years} years, {age.months} months, and {age.days} days old.
        </h4>
    );
};

Res.propTypes = {
    age: PropTypes.shape({
        years: PropTypes.number.isRequired,
        months: PropTypes.number.isRequired,
        days: PropTypes.number.isRequired,
    }),
};

export default Res;