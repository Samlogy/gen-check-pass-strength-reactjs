import React, { useState } from "react";
import PasswordStrengthBar from 'react-password-strength-bar';

const CheckPass = () => {
    const [password, setPassword] = useState('');
    
    return (
        <div className='check-password-container'>
            <input type="password" placeholder="Enter Password" value={password}
                    onChange={e => setPassword(e.target.value)} />
            <PasswordStrengthBar password={password} />
        </div>
    )
}

export default CheckPass;
