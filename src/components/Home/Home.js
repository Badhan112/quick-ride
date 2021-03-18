import React from 'react';
import { Container, Row } from 'react-bootstrap';
import './Home.css';
import bike from '../../images/Frame.png';
import Vehicle from '../Vehicle/Vehicle';
import car from '../../images/Frame-2.png';
import bus from '../../images/Frame-1.png';
import train from '../../images/Group.png';

const Home = () => {
    return (
        <div className="home">
            <Container>
                <Row className="vehicle-area">
                    <Vehicle imgSrc={bike} title="BIKE" />
                    <Vehicle imgSrc={car} title="CAR" />
                    <Vehicle imgSrc={bus} title="BUS" />
                    <Vehicle imgSrc={train} title="TRAIN" />
                </Row>
            </Container>
        </div>
    );
};

export default Home;