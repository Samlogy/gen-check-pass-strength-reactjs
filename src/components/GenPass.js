import React, { useState } from "react";
import generator from "generate-password";

const GenPass = () => {
  const [password, setPassword] = useState('');
  
  const initState = {length: 10, isLowerCase: true, isUpperCase: false, isNumbers: false, isSymbols: false}
  const [passSettings, setPassSettings] = useState(initState);

  const generatePassword = () => {
    const pwd = generator.generate({
      length: passSettings.length,
      lowercase: passSettings.isLowerCase,
      uppercase: passSettings.isUpperCase,
      numbers: passSettings.isNumbers,
      symbols: passSettings.isSymbols
    });
    setPassword(pwd);
  };


  return (
    <div className="generate-password-container">
        <div className='gen-password-options'>
            <div className='form-input'>
                <label> Length </label> 
                <input type='number' value={passSettings.length} min='1' onChange={e => setPassSettings({...passSettings, length: e.target.value})} />
            </div>

            <div className='form-input'>
                <label> LowerCase </label>
                <input type='checkbox' checked={passSettings.isLowerCase} onChange={() => setPassSettings({...passSettings, isLowerCase: !passSettings.isLowerCase})} />
            </div>

            <div className='form-input'>
                <label> UpperCase </label>
                <input type='checkbox' checked={passSettings.isUpperCase} onChange={() => setPassSettings({...passSettings, isUpperCase: !passSettings.isUpperCase})} />
            </div>

            <div className='form-input'>
                <label> Numbers </label>
                <input type='checkbox' checked={passSettings.isNumbers} onChange={() => setPassSettings({...passSettings, isNumbers: !passSettings.isNumbers})}/>
            </div>

            <div className='form-input'>
                <label> Symbols </label>
                <input type='checkbox' checked={passSettings.isSymbols} onChange={() => setPassSettings({...passSettings, isSymbols: !passSettings.isSymbols})} />
            </div>
        </div>

        <div className='form-input'> 
          <button className="btn btn-info" onClick={() => generatePassword()}> Generate PASSWORD </button>
          <button className="btn-outline btn-outline-info" onClick={() => setPassword('')}> Reset PASSWORD </button>
        </div>

        <div className='password-generated'>
           <p> PASSWORD is: {password} </p> 
        </div>
    </div>
  );
}

export default GenPass;