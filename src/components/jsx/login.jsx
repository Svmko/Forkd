import React, { useState } from 'react';
import { Card,Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Axios from "axios"

function Login_page(){
  const [email,setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  function handleSubmit (event) {
    event.preventDefault();

    Axios.post('http://localhost:3000/api/login',{
      password: password,
      email: email,}).then(() => {
        console.log("success");
    })

  };

  return(

    <Card style={{ width: '30rem', boxShadow: '5px 5px 10px rgba(0,0,0,0.16)'}} onSubmit={handleSubmit}>
      <Card.Header style={{ 
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "5vh", 
        backgroundColor: '#333738',
        color: 'white'
        }}>
        Welcome Back!</Card.Header>
      <Card.Body>
        <Form>
          <Form.Group className='mb-3' controlId='email'>
            <Form.Label> Email Address </Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={handleEmailChange}/>
          </Form.Group>

          <Form.Group className='mb-3' controlId='password'>
            <Form.Label> Password </Form.Label>
            <Form.Control type="password" placeholder="Enter password" value={password} onChange={handlePasswordChange}/>
          </Form.Group>

          <div style = {{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>

            <Button variant="primary" type="submit">
            Submit
            </Button>
          </div>

          <br/>

          <div style = {{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}>
            <Card.Link href="#">Forgot Password?</Card.Link>
          </div>
        </Form>
      </Card.Body>
       
    </Card>
  );
}

export default Login_page;