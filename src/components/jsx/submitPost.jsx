import React, { useState, useEffect } from 'react';
import { Card,Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Dropbox} from 'dropbox';
import Axios from 'axios';

const accessToken = '';

const dbx = new Dropbox({accessToken: accessToken,});

function Submit_post(){

  

    const [location, setLocation] = useState({});

    const [postcaption,setPostCaption] = useState('');

    const [imageURL, setImageURL] = useState('');
    const [imageFile, setImageFile] = useState('');
    const [imageSrc, setImageSrc] = useState(null);
    const currentDate = new Date().toISOString().substring(0, 10);

    var longitude = location.longitude;
    var latitude = location.latitude;


    useEffect(() => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          position => {
            setLocation({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude
            });
          },
          error => {
            console.log(error);
          }
        );
      } else {
        console.log("Geolocation is not supported by this browser.");
      }
    }, []);

    const handleUpload = async (event) => {
        
        var file = event.target.files[0];
        // setImageFile(file);

        

        dbx.filesUpload({
            path: '/Forkd_Images/' + file.name,
            contents: file,
          }).then(function(response) {
                console.log(response);
                setImageURL(response.result.id);
          })
    };


    const handleCaptionUpload = (event) => {
        setPostCaption(event.target.value);
    };



  const handleSubmit = (event) => {
    event.preventDefault();
    Axios.post('http://localhost:3000/api/submit',{
  
        caption: postcaption,
        imageURL: imageURL,
        date: currentDate,
        longitude: longitude,
        latitude: latitude,}).then(() => {
        console.log('success');
        }); 
      };
    // });


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
       Post Something!</Card.Header>
    <Card.Body>

        <Form>
            <br/>
            <Form.Group className='mb-3' controlId='formFile'>
            <Form.Label>Default file input example</Form.Label>
            <Form.Control type="file" onChange={handleUpload}/>
            </Form.Group>

            <Form.Group className='mb-3' controlId='postcaption'>
            <Form.Label> Caption </Form.Label>
            <Form.Control type="text" placeholder="Enter Caption" value={postcaption} onChange = {handleCaptionUpload} />
            </Form.Group>


            <div style = 
             {{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",}}>
            <Button variant="primary" type="submit">
            Submit
            </Button>
          </div>

          </Form>
    </Card.Body>

  </Card>
  
);
}
export default Submit_post;