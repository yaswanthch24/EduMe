import React, { useState } from 'react';
import { Button, Input, Label } from 'reactstrap';
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import "./Login.css"

function Login1() {
    const [emailId, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const passwordInputType = showPassword ? 'text' : 'password';

    const validateEmail = () => {
        if (!emailId) {
            setEmailError('Email is required');
        } else if (!/\S+@\S+\.\S+/.test(emailId)) {
            setEmailError('Email is invalid');
        } else {
            setEmailError('');
        }
    };

    const validatePassword = () => {
        if (!password) {
            setPasswordError('Password is required');
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters');
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = async () => {
        try {
            const response = await axios.get(`http://localhost:3001/login/${emailId}/${password}`);
            if (emailId === response.data.emailId && password === response.data.password) {
                console.log('Success');
                navigate('/HomePage')
            }
            else {
                console.log('Invalid Credentials');
                alert("Invalid Credentials");
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        validateEmail();
        validatePassword();

        if (!emailError && !passwordError) {
            // Perform your form submission logic here.
        }
    };

    return (<>

        <div className="login_form_container">
            <div className="login_form">
                <h2>Log-In</h2>
                <div onSubmit={handleSubmit}>
                    <div class="inputs" >
                        <Label for="exampleEmail">Username</Label>

                        <Input
                            type="email"
                            name="email"
                            id="exampleEmail"
                            placeholder="example@example.com"
                            value={emailId}
                            onChange={(e) => setEmail(e.target.value)}
                            onBlur={validateEmail}
                            class="inputs"
                        />

                    </div>
                    <div class="inputs">
                        <Label for="examplePassword">Password</Label>

                        <Input
                            type="password"
                            name="password"
                            id="examplePassword"
                            placeholder="********"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            onBlur={validatePassword}
                            class="inputtext"
                        />

                    </div >
                    <div class="inputs" ><Button color="primary" class="button_group" id="login_button" onClick={handleLogin}>Login</Button>
                    </div>

                </div >
                <div className='fotter'>
                    <p><a href='/Forgotpassword'>ForgotPassword</a><br/></p> {/* Add a link for "Forgot Password" */}
                    <p>New User? <a href="/Register ">Register</a></p>
                </div>
            </div>
        </div>
    </>
    );
};



export default Login1;