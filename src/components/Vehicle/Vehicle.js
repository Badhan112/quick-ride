import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { useHistory } from "react-router-dom";

const Vehicle = ({imgSrc, title}) => {
    const history = useHistory();
    const handleVehicleSelection = () => {
        history.push("/destination");
    }
    return (
        <Col lg={3} md={4} sm={6} xs={12} style={{marginTop: '20px'}}>
            <Card style={{padding: '20px', boxShadow: '5px 5px 10px grey', cursor: 'pointer', backgroundColor: 'rgba(255, 255, 255, 0.7)'}} onClick={handleVehicleSelection}>
                <Card.Img variant="top" src={imgSrc} style={{padding: '20px'}}/>
                <Card.Body style={{textAlign: 'center'}}>
                    <Card.Title>{title}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Vehicle;