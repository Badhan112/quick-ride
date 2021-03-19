import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { faFacebook, faGithub, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './LogInWithSocalMedia.css';

const LogInWithSocalMedia = () => {
    return (
        <Col lg={8} md={10} sm={12}>
            <Container>
                <Row className="socal-account-area">
                    <Col md={3}>
                        <FontAwesomeIcon icon={faFacebook} className="socal-icon" style={{ color: 'royalblue' }} />
                    </Col>
                    <Col md={9} style={{ textAlign: 'center' }}>
                        <h5>Continue with Facebook</h5>
                    </Col>
                </Row>
                <Row className="socal-account-area">
                    <Col md={3}>
                        <FontAwesomeIcon icon={faGoogle} className="socal-icon" style={{ color: 'saddlebrown' }} />
                    </Col>
                    <Col md={9} style={{ textAlign: 'center' }}>
                        <h5>Continue with Google</h5>
                    </Col>
                </Row>
                <Row className="socal-account-area">
                    <Col md={3}>
                        <FontAwesomeIcon icon={faGithub} className="socal-icon" />
                    </Col>
                    <Col md={9} style={{ textAlign: 'center' }}>
                        <h5>Continue with GitHub</h5>
                    </Col>
                </Row>
            </Container>
        </Col>
    );
};

export default LogInWithSocalMedia;