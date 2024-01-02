import { useState } from 'react';
import {Container, Button , Alert} from 'react-bootstrap'; 
import React from 'react'
import { useEffect } from 'react';
import Aos from 'aos';

import './contact.css'

export default function Contact() {
  useEffect(()=>{
    Aos.init();
  },[])
  
  const [show, setShow] = useState(false)  ;

  if (show){  
    return (  
      <div className="App">  
     <Container className='p-4 my-5'>  
     <Alert variant="success" onClose={() => setShow(false)} dismissible >  
     <Alert.Heading>Hurrayy!</Alert.Heading>  
     <p>  
       We will contact ASAP....</p>  
     </Alert>  
  </Container>  
      </div>  
    );  
  }  

  return (
    <div className='container-fluid bg-dark pb-5'>
      <div className='row'>
      <div className='con col col-lg-6 col-md-6 col-sm-12 col-xs-12  d-none d-sm-block' data-aos="fade-up">
      <h1 className='text-center text-white email'>ON MAP</h1>
      <iframe className="map container "   src="https://maps.google.com/maps?width=400&amp;height=30&amp;hl=en&amp;q=juinagarstation%20navimumbai+()&amp;t=p&amp;z=13&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe><a href='https://maps-generator.com/'></a>


      </div>
      <div className='con col-lg-3 col-md-3 col-sm-3 col-xs-12     ' data-aos="fade-down">
        <h1 className='email text-white mb-5 headmeet'>MEET US</h1>
        <p className=' my-5 fs-5  meettext text-left ps-5'><span><img src='./faii1.png' className='fai'/></span>   +91 9876543210</p>
        <p className=' my-5 fs-5 meettext text-left ps-5' ><span><img src='./faii2.png' className='fai'/></span>  ticketmator01@gmail.com</p>
        <p className=' my-5 fs-5 meettext text-left ps-5'><span><img src='./faii3.png' className='fai'/></span>  Juinagar  Navi Mumbai ,400706</p>
      </div>
      <div className=' con col-lg-3 col-md-3 col-sm- col-xs-12  text-center' data-aos="fade-up">
      <h1 className='email text-white '>EMAIL US</h1>
      <form className='text-center row w-75 mx-auto' onSubmit={() => setShow(true)}>
        <input type="email" placeholder="Enter Your Email" required className='emaili my-5'/>
        <input type="text" maxLength={10} placeholder="Enter Your Number" required className='number'/>
        <button className='btn btn-primary my-5 mx-auto py-3 px-3 w-50' type='submit' variant='primary' >Submit</button>
       
        </form>
      </div>
    </div>
    </div>
  )
}
