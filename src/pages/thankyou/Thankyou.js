import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Thank.css'
import { useEffect } from 'react';
import Aos from 'aos';
export default function Thankyou() {
  useEffect(()=>{
    Aos.init();
  },[])
  const navigate=useNavigate();
  const redirect =(e)=>{
    navigate("/");
  }

  return (
    <div className='container-fluid bg-dark  thank '>
      <h1 className='text-white text-center py-5 thankh' data-aos="zoom-in-up">Thank <span data-aos="flip-up">you</span> </h1>
      <button className='btn btn-primary fs-5 my-5' onClick={redirect} data-aos="fade-down" data-aos-delay="500">Home</button>
    </div>
  )
}
