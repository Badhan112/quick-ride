import React, { useState } from 'react';
import { Col } from 'react-bootstrap';
import './LogInForm.css';

const LogInForm = () => {
    const [isNewUser, setIsNewUser] = useState(false);

    const handleFormSubmit = event => {

        event.preventDefault();
    }

    return (
        <Col lg={8} md={10} sm={12} className="login-form">
            <h1>{isNewUser ? 'Create an Account' : 'Login'}</h1>
            <form onSubmit={handleFormSubmit}>
                {
                    isNewUser
                    && <input type="text" name="name" id="" placeholder="Name" className="input-field" />
                }
                <input type="email" name="email" placeholder="Email" className="input-field" />
                <input type="password" name="password" placeholder="Password" className="input-field" />
                {
                    isNewUser
                    && <input type="password" name="confrimPassword" placeholder="Confrim Password" className="input-field" />
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