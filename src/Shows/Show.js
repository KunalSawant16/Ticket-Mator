import React from 'react'
import {  useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function Show() {
  const [input,setInput]=useState({
    id:'',
    address:"",
    Choosevechile:'',
    typeService:'', 
    place:'',
    payment:'',
  
  
    });
  const navigate = useNavigate();
    const movienext = (e) =>{
        e.preventDefault();
        localStorage.setItem("user3" ,JSON.stringify(input));
        navigate("/eventnext");
    }
  return (
    <div className='movies py-5 mt-3'>
      <div className='row my-5 py-5'>
        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 text-center'>
            <img src='./p2.jpg' className='w-75 '/><br></br>
            <form onSubmit={movienext}>
            <input type="checkbox" required  value="Comic Con India – Mumbai 2023"  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name='id'/><span>agree terms and policies</span><br></br>
            <button className=' btn btn-primary my-3 py-2 px-2' type='submit'>Book Now</button>
            </form>
          
        </div>
        <div className='col-lg-3 col-md-6 col-sm-12 col-xs-12 text-center'>
            <img src='p6.jpg' className='w-75 '/><br></br>
            <form onSubmit={movienext}>
            <input type="checkbox" required value="Bollywood Buzz with Shreya Ghoshal"  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} name='id'/><span>agree terms and policies</span><br></br>
            <button className=' btn btn-primary my-3 py-2 px-2' type='submit'>Book Now</button>
            </form>
          
        </div>
       
       
      </div>
    </div>
  )
}
