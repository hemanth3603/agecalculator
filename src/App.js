import { useState } from 'react';
import Form from './components/Form.js';
import Res from './components/Res.js';
import Header from './components/Header.js';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css';
import {
  differenceInDays,
  differenceInMonths,
  differenceInYears,
} from 'date-fns';

function App() {
  const [age, setAge] = useState(null);

  const calculateAge = (birthDate) => {
    const today = new Date();
    const birthDateObj = new Date(birthDate);
    const ageYears = differenceInYears(today, birthDateObj);
    const ageMonths = differenceInMonths(today, birthDateObj) % 12;
    let ageDays = differenceInDays(
      today,
      new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate())
    );
    if (ageDays < 0) {
      ageDays =differenceInDays(new Date(today.getFullYear(), today.getMonth(), birthDateObj.getDate()),today);
    }

    setAge({
      years: ageYears,
      months: ageMonths,
      days: ageDays,
    });
  };

  return (
    <div style={{height:'100%',background:"linear-gradient(135deg, violet, orange)"}}>
      <Header></Header>
      <div className='container-fluid  border border-dark' style={{ width: '1000px', borderRadius: '15px',background:"linear-gradient(45deg,orange, red)"}}>
        <div className='d-flex justify-content-center flex-column align-items-center mt-5 mb-4 '>
          <h1 className='text-bold text-decoration-underline  mb-5'>
            Age Calculator
          </h1>
          <Form calculateAge={calculateAge} />
          {age && <Res age={age} />}
        </div>
      </div>
    </div>
  );
}

export default App;