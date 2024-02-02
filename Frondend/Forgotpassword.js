import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function ForgotPassword() {
    const [emailId, setemailId] = useState('');
    const [newpassword, setNewpassword] = useState('');
    const [confirmNewPassword, setConfirmNewPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [newPasswordError, setNewPasswordError] = useState('');
    const [confirmNewPasswordError, setConfirmNewPasswordError] = useState('');
    const [passwordChanged, setPasswordChanged] = useState(false);
    const navigate = useNavigate();

    const validateEmail = () => {
        if (!emailId) {
            setEmailError('Registered emailID is required');
        } else if (!/\S+@\S+\.\S+/.test(emailId)) {
            setEmailError('Registered emailID is invalid');
        } else {
            setEmailError('');
        }
    };
    const handleLogin = () => {
        navigate('/')
    }

    const validateNewPassword = () => {
        if (!newpassword) {
            setNewPasswordError('New Password is required');
        } else if (newpassword.length < 6) {
            setNewPasswordError('New Password must be at least 6 characters');
        } else {
            setNewPasswordError('');
        }
    };

    const validateConfirmNewPassword = () => {
        if (newpassword !== confirmNewPassword) {
            setConfirmNewPasswordError('Password do not match');
        } else {
            setConfirmNewPasswordError('');
        }
    };
    //let password= newPassword
    // let ConfirmPassword=confirmNewPassword
    const updateData = async () => {
        try {
            const data = {
                emailId,
                password: newpassword,

            };

            const response = await axios.put('http://localhost:3001/updatepassword/', data);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        validateEmail();
        validateNewPassword();
        validateConfirmNewPassword();

        // If all validations pass, you can proceed with form submission.
        if (!emailError && !newPasswordError && !confirmNewPasswordError) {
            // Here, you can perform your password change logic.
            // Assuming the password change is successful:
            updateData()
            setPasswordChanged(true);
        }
    };

    return (
        <div className="login_form_container">
            <div className="login_form">
                <center>
                    <h5>Reset Password</h5>
                </center>
                <div className="form" onSubmit={handleSubmit}>
                    <div class="inputs" >
                        <Label for="exampleEmail">Registered Mail ID</Label>
                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="emailId"
                            value={emailId}
                            onChange={(e) => setemailId(e.target.value)}
                            onBlur={validateEmail}
                            class="inputs"
                        />
                        {emailError && <div className="validation-error">{emailError}</div>}
                    </div>
                    <div class="inputs">
                        <Label for="newPassword">New Password</Label>
                        <Input
                            type="password"
                            name="newPassword"
                            id="newPassword"
                            placeholder="****"
                            value={newpassword}
                            onChange={(e) => setNewpassword(e.target.value)}
                            onBlur={validateNewPassword}
                            class="inputtext"
                        />
                        {newPasswordError && <div className="validation-error">{newPasswordError}</div>}
                    </div>
                    <div class="inputs">
                        <Label for="confirmNewPassword">Confirm New Password</Label>
                        <Input
                            type="password"
                            name="confirmNewPassword"
                            id="confirmNewPassword"
                            placeholder="****"
                            value={confirmNewPassword}
                            onChange={(e) => setConfirmNewPassword(e.target.value)}
                            onBlur={validateConfirmNewPassword}
                        />
                        {confirmNewPasswordError && (
                            <div className="validation-error">{confirmNewPasswordError}</div>
                        )}
                    </div>
                    <div  >
                        
                            
                        
                        <div className="fotter">
                        <Button color='primary'   type="submit" onClick={updateData}>
                                Submit
                            </Button>
                            {passwordChanged && <div className="success-message">Password changed successfully</div>}
                            &nbsp;&nbsp;
                            <Button color='primary' onClick={handleLogin}  >Login</Button>
                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForgotPassword;
