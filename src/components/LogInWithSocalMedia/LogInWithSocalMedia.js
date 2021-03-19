import React, { useContext } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LogInWithSocalMedia.css';
import { googleSignIn } from '../../data/firebaseManager';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';

const LogInWithSocalMedia = () => {
    const [user, setUser] = useContext(UserContext);
    const userData = {
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        photo: '',
    }
    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handleFacebookSignIn = () => {
        console.log('Facebook');
    }
    const handleGoogleSignIn = () => {
        googleSignIn().then(res => {
            console.log(res);
            const {displayName, email, photoURL} = res;
            userData.name = displayName;
            userData.email = email;
            userData.photo = photoURL;
            setUser(userData);
            history.replace(from);
        })
    }
    const handleGitHubSignIn = () => {
        console.log('GitHub');
    }

    return (
        <Col lg={8} md={10} sm={12}>
            <Container>
                <Row className="socal-account-area" onClick={handleFacebookSignIn}>
                    <Col md={3}>
                        <FontAwesomeIcon icon={faFacebook} className="socal-icon" style={{ color: 'royalblue' }} />
                    </Col>
                    <Col md={6} style={{ textAlign: 'center' }}>
                        <h5>Continue with Facebook</h5>
                    </Col>
                </Row>

                <Row className="socal-account-area" onClick={handleGoogleSignIn}>
                    <Col md={3}>
                        <FontAwesomeIcon icon={faGoogle} className="socal-icon" style={{ color: 'saddlebrown' }} />
                    </Col>
                    <Col md={6} style={{ textAlign: 'center' }}>
                        <h5>Continue with Google</h5>
                    </Col>
                </Row>

                <Row className="socal-account-area" onClick={handleGitHubSignIn}>
                    <Col md={3}>
                        <FontAwesomeIcon icon={faGithub} className="socal-icon" />
                    </Col>
                    <Col md={6} style={{ textAlign: 'center' }}>
                        <h5>Continue with GitHub</h5>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
};

export default LogInWithSocalMedia;