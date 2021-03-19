import React, { useContext, useState } from 'react';
import { Col } from 'react-bootstrap';
import { UserContext } from '../../App';
import { initializeFirebase } from '../../data/firebaseManager';
import './LogInForm.css';

const LogInForm = () => {
    initializeFirebase();
    const [user, setUser] = useContext(UserContext);
    const [isNewUser, setIsNewUser] = useState(false);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [isPasswordMatched, setIsPasswordMatched] = useState(true);
    const userData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
    }

    const isValid = e => {
        if(e.target.name === 'email'){
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value) ? setIsEmailValid(true) : setIsEmailValid(false);
        }
        if(e.target.name === 'password'){
            userData.password.length >= 8 ? setIsPasswordValid(true) : setIsPasswordValid(false);
        }
        if(e.target.name === 'confirmPassword'){
            userData.password !== userData.confirmPassword ? setIsPasswordMatched(false) : setIsPasswordMatched(true);
        }
    }

    const handleInputField = event => {
        userData[event.target.name] = event.target.value;
        isValid(event);
    }
    
    const handleFormSubmit = event => {
        console.log('form Submitting');
        if(isEmailValid && isPasswordValid && isPasswordMatched){
            setUser(userData);
        }
    }

    return (
        <Col lg={8} md={10} sm={12} className="login-form">
            <h1>{isNewUser ? 'Create an Account' : 'Login'}</h1>
            <form onSubmit={handleFormSubmit}>
                {
                    isNewUser
                    && <input type="text" name="name" onBlur={handleInputField} placeholder="Name" className="input-field" required />
                }

                <input type="email" name="email" onBlur={handleInputField} placeholder="Email" className="input-field" required />
                {
                    !isEmailValid && <p className="warning-text">Please Enter Valid Email Address</p>
                }

                <input type="password" name="password" onBlur={handleInputField} placeholder="Password" className="input-field" required />
                {
                    !isPasswordValid && <p className="warning-text">Password must be Greater then or equal to 8 Charecter</p>
                }

                {
                    isNewUser
                    && <input type="password" name="confirmPassword" onBlur={handleInputField} placeholder="Confrim Password" className="input-field" required />
                }
                {
                    !isPasswordMatched && <p className="warning-text">Re-Enter Your Password</p>
                }
                {
                    isNewUser
                        ? <input type="submit" value="Create an Account" className="submit-button" />
                        : <input type="submit" value="Login" className="submit-button" />
                }
            </form>
            <p style={{ textAlign: 'center' }}>{isNewUser ? 'Already have an account?' : "Don't have an account?"} <span onClick={() => setIsNewUser(!isNewUser)} className="link-text">{isNewUser ? 'Login' : 'Create an Account'}</span> </p>
        </Col>
    );
};

export default LogInForm;