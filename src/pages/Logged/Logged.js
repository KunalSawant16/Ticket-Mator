import React from 'react'
import { useState } from 'react';
import Aos from 'aos';
import { useEffect } from 'react';
import './logged.css'
import emailjs from '@emailjs/browser';
import { useNavigate } from 'react-router-dom';
export default function Logged() {
  useEffect(()=>{
    Aos.init();
  },[])
  const userName =JSON.parse(localStorage.getItem("user"));
  const navigate=useNavigate();

  const [input,setInput]=useState({
  address:"",
  Choosevechile:'',
  typeService:'', 
  place:'',
  payment:'',


  });
 

  const sendEmail =(e) => {
    e.preventDefault();
    localStorage.setItem("user1" ,JSON.stringify(input));
    
   
    
   
   
    if(input.payment === 'paynow' && input.email_from === userName.email){
      navigate("/Payment");
        
    }
     else if(input.payment === 'cod'){
      alert("successfull booked");
      navigate("/thankyou");
      emailjs.sendForm('service_tjcpxjl','template_7wb1f01',e.target,'gJ2MwNS_MU47DN3GZ');
    }
    else{
      alert("enter valid email address");
    }
  
   
    
  }
  
  return (
    
     
    <div className='container-fluid logged-c '>
      
      <div className='row '>
        <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  py-1 mb-5 logged-nav'><h1></h1></div>
        <div className='col-lg-6 col-md-6 col-sm-12 text-center  h-25' data-aos="fade-right" data-aos-delay="1000"><h1 className='text-white mx-auto  my-5'>Welcome - {userName.name} !</h1>
        <form className='bg-dark row h-100 pt-5 w-75 mx-auto pb-5 borderr rounded-5 mb-5' onSubmit={sendEmail} >
          <caption className='text-center fs-2 mb-4'>Book your Appointment</caption>
          <input className=' emaili mb-4  w-75  mx-auto ' required placeholder='email' type="email" name='email_from' value={input.email} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
        <input className=' emaili mb-4  w-75 address mx-auto ' required placeholder='address' type="text" name='address' value={input.address} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
       
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosevechile' value={input.Choosevechile}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} >
          <option defaultValue={1} className='text-center '>Choose your vechile</option>
        <option value="Maruti Suzuki">Maruti Suzuki</option>
    <option value="Honda">Honda</option>
    <option value="Hundyai">Hundyai</option>
    <option value="Datsun">Datsun</option>
    <option value="Renault">Renault</option>
    <option value="Nissan">Nisaan</option>
    <option value="Audi">Audi</option>
    <option value="BMW">BMW</option>
    <option value="Mercedes">Mercedes</option>
    <option value="Toyota">Toyota</option>
        </select>
        <caption className='text-center fs-5'>Date and Time</caption>
        <input type="date" className='emaili w-75 mx-auto' required name='date' value={input.date} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
        <select className=' form-select-md w-75 mx-auto emaili mt-4' required name='typeService' value={input.typeService}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} >
          <option defaultValue={1} className='text-center '>Type of service</option>
        <option value="1st service">1st service</option>
    <option value="2nd service">2nd service</option>
    <option value="3rd service">3rd Service</option>
    <option value="Full services">Full Service</option>
    <option value="Washing">Washing</option>
    <option value="Denting">Denting</option>
    <option value="Coloring" >Coloring</option>
    <option value="PPF">PPF</option>
    <option value="Custom">Custom</option>
    <option value="Other">Other</option>
        </select>
      <select className='form-select-md w-75 mx-auto emaili mt-4' required name='place' value={input.place} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>select showroom</option>
        <option value="Bhavna Autostore,shiravne">Bhavna Autostore,shiravne</option>
        <option value="Anzen Suzuki,seawoods">Anzen Suzuki,seawoods</option>
        <option value="Sahil Autogarage,nerul">Sahil Autogarage,nerul</option>
        <option value="R.S ,vashi">R.S ,vashi</option>

      </select>
        <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paynow">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
        
        <div>
        <input type="checkbox" className="my-4" required/><span className='text-white' > agree the terms & policies</span>
        </div>
        <button className='btn btn-pri  w-50 mx-auto mt-3 text-white fs-6' type='submit'>Done</button>
        <script src="https://smtpjs.com/v3/smtp.js"></script>
        </form>
        
        </div>
        <div className='col-lg-6 col-md-6 col-sm-12 text-center h-25 ' data-aos="flip-right" data-aos-duration="1000"><img src='./pic2.png' className='h-100 w-100 mt-5 ' alt='not found'/></div>
        

      </div>
      
    </div>
    
    
  )
}
