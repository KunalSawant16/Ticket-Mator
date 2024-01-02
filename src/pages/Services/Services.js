import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './services.css';
import { useNavigate } from 'react-router-dom';
export default function Services() {
  const navigate=useNavigate();
  const userName1 =JSON.parse(localStorage.getItem("user"));
  const directt=()=>{
    if(userName1 === null){
      navigate('/Signup');
    }
    else{
    navigate('/Movies') 
    }
  }

  const directt1=()=>{
    if(userName1 === null){
      navigate('/Signup');
    }
    else{
    navigate('/Sports')
    }
  }

  const directt2=()=>{
    if(userName1 === null){
      navigate('/Signup');
    }
    else{
    navigate('/Show')
    }
  }
  return (

    <div className='container-fluid bg-dark py-5'>
      <h1 className='text-white text-center mt-5 pt-5 mb-3'>SERVICES</h1>
      <div className='row text-center mx-auto'>
      <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='card-bg  '>
        <Card.Title className='text-dark cardtitle my-4'>Movies</Card.Title>
        <Card.Text className='text-dark  w-auto cardtext my-4'>
         Just in one click you are ready for joy.
         fill detail mandatory.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4 btn-primary1' onClick={directt}>Book Now</Button>
      </Card.Body>
    </Card>
        </div>
        
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='card-bg  '>
        <Card.Title className='text-dark cardtitle my-4'>Sports and e-sports</Card.Title>
        <Card.Text className='text-dark w-auto cardtext my-4'>
        Just in one click you are ready for joy.
         fill detail mandatory.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4  btn-primary1' onClick={directt1}>Book Now</Button>
      </Card.Body>
    </Card>
        </div>
       
        </div>
        <div className='row text-center mx-auto'>
        
        <div className='col-lg-3 col-md-6 col-sm-12 mx-auto' data-aos="flip-left">
        <Card style={{ width: '18rem' }} className='border border-0 border-light cardd'>
      
      <Card.Body className='card-bg  '>
        <Card.Title className='text-dark cardtitle my-4'>Shows</Card.Title>
        <Card.Text className='text-dark w-auto cardtext my-4'>
        Just in one click you are ready for joy.
         fill detail mandatory.
        </Card.Text>
        <Button variant="primary" className='w-50 mt-4  btn-primary1' onClick={directt2}>Book Now</Button>
      </Card.Body>
    </Card>
        </div>
       
        </div>
       

      </div>
    
  )
}
