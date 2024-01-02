import React from 'react'
import './event.css'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import userEvent from '@testing-library/user-event';
export default function Eventnext() {
  const navigate=useNavigate();
  
  
  const userName =JSON.parse(localStorage.getItem("user3"));
  const userName1 =JSON.parse(localStorage.getItem("user"));
  
  const [input,setInput]=useState({
    email:'',
    seat:'',
    payment:'',
    name:'',
    mobileno:'',
    Choosethetre:'',
   
  
    });
    const [open,setOpen]=useState({});
    const handleshowhide=(e)=>{
     const getuser =e.target.value;
      setOpen(getuser);
     
    }
    const nexttt=async(e)=>{
      e.preventDefault();

      const {email,seat,Choosethetre,name,number}=input;
      const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
    {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
         
          email,
          seat,
          Choosethetre,
          name,
          number,
         
        })
     })

      navigate('/thankyou');
    }
  
  







      /*---------------------------------------------MOVIESstart--------------------------------------------*/
      if(userName.id=="ved(Movie)"){
        const handleshowhide=(e)=>{
       
          const getuser =e.target.value;
          setOpen(getuser);
          e.preventDefault();
        }
       
        const nexttt = async (e) => {
          e.preventDefault();
          console.log("true");
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,Choosethetre,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              Choosethetre,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
         console.log("true1");
         emailjs.sendForm('service_oy987ch','template_gq8lpox',e.target,'G0HNjNcDoEqbtzixM');
         if(input.payment == "paid"){
          navigate('/payment');
         }
         else{
        navigate('/thankyou');
         }
          }
      else{
            alert("choose valid event");
          }
          localStorage.setItem("user4" ,JSON.stringify(input));
        }
        
       
        return(
          <div className=' mt-5 eventnext container-fluid pt-5'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='p3.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" placeholder='email'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" placeholder='No of seat' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="pathan(Movie)">pathan(Movie)</option>
      <option value="ved(Movie)">ved(Movie)</option>
      <option value="valavi(Movie)">valavi(Movie)</option>
      <option value="Jaggu ani juliet(Movie)">Jaggu ani juliet(Movie)</option>
     
          </select>
       

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your show time</option>
          <option value="9AM-11:30AM">9AM-11:30AM</option>
      <option value="12PM-2:30PM">12PM-2:30PM</option>
      <option value="5PM-7:30PM">5PM-7:30PM</option>
      <option value="8PM-10:30AM">8PM-10:30AM</option>
     
          </select>
    
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone}  onChange={(e)=>(handleshowhide(e))}><br></br>
            <option defaultValue={1} className='text-center '>Choose your zone</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
  
          {
            open === 'Mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Bahar Cinema: Vile Parle (E)">Bahar Cinema: Vile Parle (E)</option>
      <option value="Cinepolis: Fun Republic Mall, Andheri (W)">Cinepolis: Fun Republic Mall, Andheri (W)</option>
      <option value="G7 Multiplex: Bandra (W)">G7 Multiplex: Bandra (W)</option>
      <option value="Gold Cinema: Santacruz (W)">Gold Cinema: Santacruz (W)</option>
          </select>
            )
          }
           {
            open === 'Thane' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}   onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Anand Cinema: Thane">Anand Cinema: Thane</option>
      <option value="Cinepolis: Viviana Mall, Thane">Cinepolis: Viviana Mall, Thane</option>
      <option value="INOX: Insignia at R Mall, Thane">INOX: Insignia at R Mall, Thane</option>
      <option value="MovieMax: Eternity Mall, Thane">MovieMax: Eternity Mall, Thane</option>
          </select>
            )
          }
           {
            open === 'Navi mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Balaji Movieplex: Kopar Khairane">Balaji Movieplex: Kopar Khairane</option>
      <option value="INOX: Raghuleela Mall, Vashi">INOX: Raghuleela Mall, Vashi</option>
      <option value="INOX: VIP Raghuleela Mall, Vashi">INOX: VIP Raghuleela Mall, Vashi</option>
      <option value="Cinepolis: Nexus Seawoods, Navi Mumbai">Cinepolis: Nexus Seawoods, Navi Mumbai</option>
          </select>
            )
          }
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }



      if(userName.id=="pathan(Movie)"){
        const handleshowhide=(e)=>{
       
          const getuser =e.target.value;
          setOpen(getuser);
          e.preventDefault();
        }
       
        const nexttt = async (e) => {
          e.preventDefault();
          console.log("true");
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,Choosethetre,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              Choosethetre,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
         console.log("true1");
          emailjs.sendForm('service_oy987ch','template_gq8lpox',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        
      }
    else{
          alert("choose valid event");
        }
      }
        
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='p1.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" placeholder='email'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" placeholder='No of seat' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="pathan(Movie)">pathan(Movie)</option>
      <option value="ved(Movie)">ved(Movie)</option>
      <option value="valavi(Movie)">valavi(Movie)</option>
      <option value="Jaggu ani juliet(Movie)">Jaggu ani juliet(Movie)</option>
     
          </select>


          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your show time</option>
          <option value="9AM-11:30AM">9AM-11:30AM</option>
      <option value="12PM-2:30PM">12PM-2:30PM</option>
      <option value="5PM-7:30PM">5PM-7:30PM</option>
      <option value="8PM-10:30AM">8PM-10:30AM</option>
     
          </select>
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone}  onChange={(e)=>(handleshowhide(e))}><br></br>
            <option defaultValue={1} className='text-center '>Choose your zone</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
  
          {
            open === 'Mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Bahar Cinema: Vile Parle (E)">Bahar Cinema: Vile Parle (E)</option>
      <option value="Cinepolis: Fun Republic Mall, Andheri (W)">Cinepolis: Fun Republic Mall, Andheri (W)</option>
      <option value="G7 Multiplex: Bandra (W)">G7 Multiplex: Bandra (W)</option>
      <option value="Gold Cinema: Santacruz (W)">Gold Cinema: Santacruz (W)</option>
          </select>
            )
          }
           {
            open === 'Thane' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}   onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Anand Cinema: Thane">Anand Cinema: Thane</option>
      <option value="Cinepolis: Viviana Mall, Thane">Cinepolis: Viviana Mall, Thane</option>
      <option value="INOX: Insignia at R Mall, Thane">INOX: Insignia at R Mall, Thane</option>
      <option value="MovieMax: Eternity Mall, Thane">MovieMax: Eternity Mall, Thane</option>
          </select>
            )
          }
           {
            open === 'Navi mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Balaji Movieplex: Kopar Khairane">Balaji Movieplex: Kopar Khairane</option>
      <option value="INOX: Raghuleela Mall, Vashi">INOX: Raghuleela Mall, Vashi</option>
      <option value="INOX: VIP Raghuleela Mall, Vashi">INOX: VIP Raghuleela Mall, Vashi</option>
      <option value="Cinepolis: Nexus Seawoods, Navi Mumbai">Cinepolis: Nexus Seawoods, Navi Mumbai</option>
          </select>
            )
          }
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }
     


      if(userName.id=="Jaggu ani juliet(Movie)"){
        const handleshowhide=(e)=>{
       
          const getuser =e.target.value;
          setOpen(getuser);
          e.preventDefault();
        }
        const nexttt = async (e) => {
          e.preventDefault();
          console.log("true");
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,Choosethetre,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              Choosethetre,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
         console.log("true1");
          emailjs.sendForm('service_oy987ch','template_gq8lpox',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        }
        else{
          alert("choose valid event");
        }
        }
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='p5.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" placeholder='email'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" placeholder='No of seat' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="pathan(Movie)">pathan(Movie)</option>
      <option value="ved(Movie)">ved(Movie)</option>
      <option value="valavi(Movie)">valavi(Movie)</option>
      <option value="Jaggu ani juliet(Movie)">Jaggu ani juliet(Movie)</option>
     
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your show time</option>
          <option value="9AM-11:30AM">9AM-11:30AM</option>
      <option value="12PM-2:30PM">12PM-2:30PM</option>
      <option value="5PM-7:30PM">5PM-7:30PM</option>
      <option value="8PM-10:30AM">8PM-10:30AM</option>
     
          </select>
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone}  onChange={(e)=>(handleshowhide(e))}><br></br>
            <option defaultValue={1} className='text-center '>Choose your zone</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
  
          {
            open === 'Mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Bahar Cinema: Vile Parle (E)">Bahar Cinema: Vile Parle (E)</option>
      <option value="Cinepolis: Fun Republic Mall, Andheri (W)">Cinepolis: Fun Republic Mall, Andheri (W)</option>
      <option value="G7 Multiplex: Bandra (W)">G7 Multiplex: Bandra (W)</option>
      <option value="Gold Cinema: Santacruz (W)">Gold Cinema: Santacruz (W)</option>
          </select>
            )
          }
           {
            open === 'Thane' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}   onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Anand Cinema: Thane">Anand Cinema: Thane</option>
      <option value="Cinepolis: Viviana Mall, Thane">Cinepolis: Viviana Mall, Thane</option>
      <option value="INOX: Insignia at R Mall, Thane">INOX: Insignia at R Mall, Thane</option>
      <option value="MovieMax: Eternity Mall, Thane">MovieMax: Eternity Mall, Thane</option>
          </select>
            )
          }
           {
            open === 'Navi mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Balaji Movieplex: Kopar Khairane">Balaji Movieplex: Kopar Khairane</option>
      <option value="INOX: Raghuleela Mall, Vashi">INOX: Raghuleela Mall, Vashi</option>
      <option value="INOX: VIP Raghuleela Mall, Vashi">INOX: VIP Raghuleela Mall, Vashi</option>
      <option value="Cinepolis: Nexus Seawoods, Navi Mumbai">Cinepolis: Nexus Seawoods, Navi Mumbai</option>
          </select>
            )
          }
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }




      if(userName.id=="valavi(Movie)"){
        const handleshowhide=(e)=>{
       
          const getuser =e.target.value;
          setOpen(getuser);
          e.preventDefault();
        }
        const nexttt = async (e) => {
          e.preventDefault();
          console.log("true");
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,Choosethetre,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              Choosethetre,
              number,
              name,
              Chooseevent,
              Chooseslot
            })
         })
         console.log("true1");
          emailjs.sendForm('service_oy987ch','template_gq8lpox',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        }
        else{
          alert("choose valid event");
        }
        }
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='p4.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" placeholder='email'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" placeholder='No of seat' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="pathan(Movie)">pathan(Movie)</option>
      <option value="ved(Movie)">ved(Movie)</option>
      <option value="valavi(Movie)">valavi(Movie)</option>
      <option value="Jaggu ani juliet(Movie)">Jaggu ani juliet(Movie)</option>
     
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your show time</option>
          <option value="9AM-11:30AM">9AM-11:30AM</option>
      <option value="12PM-2:30PM">12PM-2:30PM</option>
      <option value="5PM-7:30PM">5PM-7:30PM</option>
      <option value="8PM-10:30AM">8PM-10:30AM</option>
     
          </select>
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone}  onChange={(e)=>(handleshowhide(e))}><br></br>
            <option defaultValue={1} className='text-center '>Choose your zone</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
  
          {
            open === 'Mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Bahar Cinema: Vile Parle (E)">Bahar Cinema: Vile Parle (E)</option>
      <option value="Cinepolis: Fun Republic Mall, Andheri (W)">Cinepolis: Fun Republic Mall, Andheri (W)</option>
      <option value="G7 Multiplex: Bandra (W)">G7 Multiplex: Bandra (W)</option>
      <option value="Gold Cinema: Santacruz (W)">Gold Cinema: Santacruz (W)</option>
          </select>
            )
          }
           {
            open === 'Thane' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}   onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Anand Cinema: Thane">Anand Cinema: Thane</option>
      <option value="Cinepolis: Viviana Mall, Thane">Cinepolis: Viviana Mall, Thane</option>
      <option value="INOX: Insignia at R Mall, Thane">INOX: Insignia at R Mall, Thane</option>
      <option value="MovieMax: Eternity Mall, Thane">MovieMax: Eternity Mall, Thane</option>
          </select>
            )
          }
           {
            open === 'Navi mumbai' && (
            <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your thetre</option>
          <option value="Balaji Movieplex: Kopar Khairane">Balaji Movieplex: Kopar Khairane</option>
      <option value="INOX: Raghuleela Mall, Vashi">INOX: Raghuleela Mall, Vashi</option>
      <option value="INOX: VIP Raghuleela Mall, Vashi">INOX: VIP Raghuleela Mall, Vashi</option>
      <option value="Cinepolis: Nexus Seawoods, Navi Mumbai">Cinepolis: Nexus Seawoods, Navi Mumbai</option>
          </select>
            )
          }
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }
  
  
       /*---------------------------------------------MOVIESend--------------------------------------------*/
  
  
       
       /*---------------------------------------------Sportsstart--------------------------------------------*/
  
  
       if(userName.id=="Online Housie by kasa kai Mumbai"){
        const nexttt=async(e)=>{
          e.preventDefault()
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
        emailjs.sendForm('service_oy987ch','template_f3ihnwd',e.target,'G0HNjNcDoEqbtzixM');
        if(input.payment == "paid"){
          navigate('/payment');
         }
         else{
        navigate('/thankyou');
         }
        }
        else{
          alert("choose valid event");
        }
        }
        return(
          <div className=' mt-5 eventnext '>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='s1.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" required placeholder='email' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" required placeholder='No of seat' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="Online Housie by kasa kai Mumbai">Online Housie by kasa kai Mumbai</option>
      <option value="Chatrapati Shivaji Maharaj Marathon">Chatrapati Shivaji Maharaj Marathon</option>
      <option value="Mumbai City FC vs East Bengal FC">Mumbai City FC vs East Bengal FC</option>
      
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your time slot</option>
          <option value="9AM-10AM">9AM-10AM</option>
      <option value="12PM-1PM">12PM-1PM</option>
      <option value="3PM-4PM">3PM-4PM</option>
      <option value="6PM-7AM">6PM-7AM</option>
     
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Where are you from</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }
  
  
      if(userName.id=="Chatrapati Shivaji Maharaj Marathon"){
        const nexttt=async(e)=>{
          e.preventDefault()
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
          emailjs.sendForm('service_oy987ch','template_f3ihnwd',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        }
        else{
          alert("choose valid event");
        }
        }
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='s2.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" required placeholder='email' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" required placeholder='No of seat' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="Online Housie by kasa kai Mumbai">Online Housie by kasa kai Mumbai</option>
      <option value="Chatrapati Shivaji Maharaj Marathon">Chatrapati Shivaji Maharaj Marathon</option>
      <option value="Mumbai City FC vs East Bengal FC">Mumbai City FC vs East Bengal FC</option>
      
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your time slot</option>
          <option value="9AM-10AM">9AM-10AM</option>
      <option value="12PM-1PM">12PM-1PM</option>
      <option value="3PM-4PM">3PM-4PM</option>
      <option value="6PM-7AM">6PM-7AM</option>
     
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Where are you from</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }



      if(userName.id=="Mumbai City FC vs East Bengal FC"){
        const nexttt=async(e)=>{
          e.preventDefault()
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
          emailjs.sendForm('service_oy987ch','template_f3ihnwd',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        }
        else{
          alert("choose valid event")
        }
        }
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='s3.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" required placeholder='email' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" required placeholder='No of seat' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
          <option value="Online Housie by kasa kai Mumbai">Online Housie by kasa kai Mumbai</option>
      <option value="Chatrapati Shivaji Maharaj Marathon">Chatrapati Shivaji Maharaj Marathon</option>
      <option value="Mumbai City FC vs East Bengal FC">Mumbai City FC vs East Bengal FC</option>
      
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your time slot</option>
          <option value="9AM-10AM">9AM-10AM</option>
      <option value="12PM-1PM">12PM-1PM</option>
      <option value="3PM-4PM">3PM-4PM</option>
      <option value="6PM-7AM">6PM-7AM</option>
     
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Where are you from</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }
       /*---------------------------------------------Sportsend--------------------------------------------*/
  


        /*---------------------------------------------Showsstart--------------------------------------------*/
       if(userName.id=="Comic Con India – Mumbai 2023"){
        const nexttt=async(e)=>{
          e.preventDefault()
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
          emailjs.sendForm('service_oy987ch','template_f3ihnwd',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        }
        else{
          alert("choose valid event")
        }
        }
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='p2.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" required placeholder='email' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" required placeholder='No of seat' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
            <option value="Comic Con India – Mumbai 2023">Comic Con India – Mumbai 2023</option>
      <option value="Bollywood Buzz with Shreya Ghoshal">Bollywood Buzz with Shreya Ghoshal</option>
      
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your time slot</option>
            <option value="5PM-10PM">5PM-10PM</option>
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Where are you from</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
      <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
     
          </select>
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }
  
     

      if(userName.id=="Bollywood Buzz with Shreya Ghoshal"){
        const nexttt=async(e)=>{
          e.preventDefault()
          localStorage.setItem("user4" ,JSON.stringify(input));
          if(userName.id == input.Chooseevent){
          const {email,seat,payment,number,name,Chooseevent,Chooseslot}=input;
          const res = await fetch("https://ticketmator-97b27-default-rtdb.firebaseio.com/userrdata.json",
        {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
             
              email,
              seat,
              payment,
              number,
              name,
              Chooseevent,
              Chooseslot,
            })
         })
          emailjs.sendForm('service_oy987ch','template_f3ihnwd',e.target,'G0HNjNcDoEqbtzixM');
          if(input.payment == "paid"){
            navigate('/payment');
           }
           else{
          navigate('/thankyou');
           }
        }
        else{
          alert("choose valid event")
        }
        }
        return(
          <div className=' mt-5 eventnext'>
        <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
        <img src='p6.jpg' className='h-25'/>
        <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
        <form className='mx-auto text-center' onSubmit={nexttt}>
        <input type="email" value={input.email} name="email" required placeholder='email' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="phone" value={input.number} name="number" maxLength={10} placeholder='mobile no' required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="text" value={input.name} name="name" placeholder='enter name'required className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        <input type="number" value={input.seat} name="seat" required placeholder='No of seat' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
        
        
  
        <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseevent' value={input.Chooseevent}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}><br></br>
            <option defaultValue={1} className='text-center '>Choose your event</option>
      <option value="Comic Con India – Mumbai 2023">Comic Con India – Mumbai 2023</option>
      <option value="Bollywood Buzz with Shreya Ghoshal">Bollywood Buzz with Shreya Ghoshal</option>
      
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Chooseslot' value={input.Chooseslot} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Choose your time slot</option>
            <option value="6PM-11PM">6PM-11PM</option>
          </select>

          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
            <option defaultValue={1} className='text-center '>Where are you from</option>
          <option value="Mumbai">Mumbai</option>
      <option value="Thane">Thane</option>
      <option value="Navi mumbai">Navi mumbai</option>
     
          </select>
          <select className='form-select-md w-75 mx-auto emaili mt-4' required name='payment' value={input.payment}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}>
        <option defaultValue={1}>payment mode</option>
        <option value="paid">Paynow</option>
        <option value='cod'>Cash</option>
        </select>
           <br></br>
          <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
        </form>
      </div>
        )
      }
      

  
  
       /*---------------------------------------------Showsend--------------------------------------------*/









  
  return (
    <div className=' mt-5 eventnext'>
      <h1 className='text-dark  text-center'>Welcome {userName1.name} !</h1>
      <h1 className='text-dark  text-center'>Selected :{userName.id}</h1>
      <form className='mx-auto text-center' onSubmit={nexttt}>
      <input type="email" value={input.email} name="email" placeholder='email' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      <input type="text" value={input.name} name="name" placeholder='name' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      <input type="text" value={input.mobileno} name="mobileno" placeholder='mobile no' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      <input type="number" value={input.seat} name="seat" placeholder='No of seat' className='emaili mx-2' onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}/>
      <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosezone' value={input.Choosezone} onChange={(e)=>(handleshowhide(e))}><br></br>
          <option defaultValue={1} className='text-center '>Choose your zone</option>
        <option value="Mumbai">Mumbai</option>
    <option value="Thane">Thane</option>
    <option value="Navi mumbai">Navi mumbai</option>
   
        </select>

        {
          open === 'Mumbai' && (
          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre}  onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} ><br></br>
          <option defaultValue={1} className='text-center '>Choose your thetre</option>
        <option value="Bahar Cinema: Vile Parle (E)">Bahar Cinema: Vile Parle (E)</option>
    <option value="Cinepolis: Fun Republic Mall, Andheri (W)">Cinepolis: Fun Republic Mall, Andheri (W)</option>
    <option value="G7 Multiplex: Bandra (W)">G7 Multiplex: Bandra (W)</option>
    <option value="Gold Cinema: Santacruz (W)">Gold Cinema: Santacruz (W)</option>
        </select>
          )
        }
         {
          open === 'Thane' && (
          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}  ><br></br>
          <option defaultValue={1} className='text-center '>Choose your thetre</option>
        <option value="Anand Cinema: Thane">Anand Cinema: Thane</option>
    <option value="Cinepolis: Viviana Mall, Thane">Cinepolis: Viviana Mall, Thane</option>
    <option value="INOX: Insignia at R Mall, Thane">INOX: Insignia at R Mall, Thane</option>
    <option value="MovieMax: Eternity Mall, Thane">MovieMax: Eternity Mall, Thane</option>
        </select>
          )
        }
         {
          open === 'Navi mumbai' && (
          <select className=' form-select-md w-75 mx-auto emaili mt-2' required name='Choosethetre' value={input.Choosethetre} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})}  ><br></br>
          <option defaultValue={1} className='text-center '>Choose your theatre</option>
        <option value="Balaji Movieplex: Kopar Khairane">Balaji Movieplex: Kopar Khairane</option>
    <option value="INOX: Raghuleela Mall, Vashi">INOX: Raghuleela Mall, Vashi</option>
    <option value="INOX: VIP Raghuleela Mall, Vashi">INOX: VIP Raghuleela Mall, Vashi</option>
    <option value="Cinepolis: Nexus Seawoods, Navi Mumbai">Cinepolis: Nexus Seawoods, Navi Mumbai</option>
        </select>
          )
        }<br></br>
        <button type='submit' className='btn btn-primary1 my-4 text-white'>BOOK !</button>
      </form>
    </div>
  )
}
