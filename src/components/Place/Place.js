import { faPlaneArrival, faPlaneDeparture } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useState } from 'react';
import { Col, Container } from 'react-bootstrap';
import { VehicleContext } from '../../App';
import './Place.css';

const Place = () => {
    const [place, setPlace] = useState({});
    const [selectedVehicle] = useContext(VehicleContext);

    const selectedPlace = {
        pickFrom: '',
        pickTo: '',
    };

    const handlePlaceInput = event => {
        selectedPlace[event.target.name] = event.target.value;
    }

    const handlePlaceForm = event => {
        console.log(selectedPlace);
        setPlace(selectedPlace);
        event.preventDefault();
    }

    return (
        <Col sm={12} md={5} lg={4}>
            <Container className="place-area">
                <form onSubmit={handlePlaceForm}>
                    <label htmlFor="pickFrom">Pick From</label>
                    <input type="text" name="pickFrom" onBlur={handlePlaceInput} className="place-input-field" />
                    <label htmlFor="pickTo">Pick To</label>
                    <input type="text" name="pickTo" onBlur={handlePlaceInput} className="place-input-field" />
                    <input type="submit" value="Search" className="submit-button" />
                </form>
            </Container>
            <Container className="place-area">
                <div className="selected-place-area">
                    <h4><FontAwesomeIcon icon={faPlaneDeparture} className="place-icon" /> {place.pickFrom}</h4>
                    <h4><FontAwesomeIcon icon={faPlaneArrival} className="place-icon" /> {place.pickTo}</h4>
                    <h4>{selectedVehicle}</h4>
                </div>
            </Container>
        </Col>
    );
};

export default Place;