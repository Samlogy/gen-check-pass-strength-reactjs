import { useState } from 'react'

import './App.css';
import { CheckPass, GenPass } from './components'

const App = () => {
  const [val, setVal] = useState('');

  const checkOption = () => {
    return val === 'check' ? <CheckPass /> :
           val === 'gen' ? <GenPass /> :
           console.log('Please select between generate and check password !');
  };

  return (
    <div className="App">
      <h2> Choose generate or check password strength </h2>
      <select onChange={e => setVal(e.target.value)}> 
        <option> Choose </option>
        <option value='gen'> Generate Password </option>
        <option value='check'> Check Password </option>
      </select>

      <div className='option-container'>
        { (val && val) && checkOption() }
      </div>
    </div>
  );
}

export default App;
