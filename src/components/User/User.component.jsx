import React, { useState } from 'react';
import './User.styles.scss';

const User = ({ password, handleLogout, handlePasswordChange }) => {
    const [change, setChange] = useState(false);
    const [passwordChange, setPasswordChange] = useState("");
    const handleChangingPassword = () => {
        setChange(false);
        handlePasswordChange(passwordChange);
    }
    
    return (
        <div className="user-container">
            <h1>Username: {localStorage.getItem("email")}</h1>
            {
                change
                ?   <div className="change-password-container">
                        <h1>New Password : </h1>
                        <input type="text" placeholder="Enter New Password" onChange={e => setPasswordChange(e.target.value)} />
                    </div>
                :   <h1 className="password-text">Password: <span type="password">{passwordChange ? passwordChange : password}</span></h1>
            }
            <div className="button-container">
                {
                    change
                    ?   <button id="save-password-button" onClick={e => handleChangingPassword()}>Save Password</button>
                    :   <button id="change-password-button" onClick={e => setChange(true)}>Change Password</button>
                }
                <button id="logout-button" onClick={e => handleLogout(e)}>Logout</button>
            </div>
        </div>
    );
}

export default User;