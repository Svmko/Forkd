import React, { useState } from 'react';
import { Card,Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios"
import "../../App.css"

function Sign_up(){
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [resturant, setRestName] = useState('');
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [zip, setZip] = useState('');
    const currentDate = new Date().toISOString().substring(0, 10);
    // toLocaleDateString('en-us', { year:"numeric", month:"short", day:"numeric"});



    const handleFirstNameChange = (event) => {
        setFirstName(event.target.value);
        };
    
    const handleLastNameChange = (event) => {
        setLastName(event.target.value);
        };
    
    const handleRestNameChange = (event) => {
        setRestName(event.target.value);
        };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
        };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
        };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
        };
    
    const handleStateChange = (event) => {
        setState(event.target.value);
        };
    
    const handleCityChange = (event) => {
        setCity(event.target.value);
        };
    
    const handleZipChange = (event) => {
        setZip(event.target.value);
        };


    

    // userName,password,email,firstName,lastName,city,state,zipCode,address,signupDate <<< this is the format for the sql
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(currentDate);
        Axios.post('http://localhost:3000/api/insert', 
        {userName: resturant,
        password: password,
        email: email,
        firstName: firstName,
        lastName: lastName, 
        city: city, 
        state: state, 
        zipCode: parseInt(zip), 
        address: address, 
        signupDate: currentDate,}).then(() => {
            console.log('success');
        });
    
    };

    return(

    <Card style={{height: '0rem', width: '20rem'}} onSubmit={handleSubmit}>
        <Card.Body>
        <Form>
            <br/>
            <Form.Group className='mb-3' controlId='firstName'>
            {/* <Form.Label> Enter First Name </Form.Label> */}
            <Form.Control size="md" type="text" placeholder="Enter your first name" value={firstName} onChange={handleFirstNameChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='lastName'>
            {/* <Form.Label> Enter Last Name </Form.Label> */}
            <Form.Control size="md" type="text" placeholder="Enter your last name" value={lastName} onChange={handleLastNameChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='resturant'>
            {/* <Form.Label> Enter Resturant Name </Form.Label> */}
            <Form.Control size="md" type="text" placeholder="Enter your resturant name" value={resturant} onChange={handleRestNameChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='email'>
            {/* <Form.Label> Email address </Form.Label> */}
            <Form.Control size="md" type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='password'>
            {/* <Form.Label> Password </Form.Label> */}
            <Form.Control size="md" type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='address'>
            {/* <Form.Label> Enter Address </Form.Label> */}
            <Form.Control size="md" type="text" placeholder="Enter your address" value={address} onChange={handleAddressChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='state'>
            {/* <Form.Label> Enter State </Form.Label> */}
            <Form.Control size="md" type="text" placeholder="Enter your state" value={state} onChange={handleStateChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='city'>
            {/* <Form.Label> Enter City </Form.Label> */}
            <Form.Control size="md" type="text" placeholder="Enter your city" value={city} onChange={handleCityChange}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='zip'>
            {/* <Form.Label> Enter Zip Code </Form.Label> */}
            <Form.Control size="md" type="number" placeholder="Enter your zip code" value={zip} onChange={handleZipChange}/>
            </Form.Group>
            <br/>
            <div style = {{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            }}
            >

            <Button variant="primary" type="submit" style={{ width: "400px"}} size ="md" >
            Submit
            </Button>

            </div>
        </Form>
        <br/>
        </Card.Body>
    </Card>
    );
    }

export default Sign_up;