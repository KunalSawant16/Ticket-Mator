import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Aos from 'aos';





export default function Payment() {
  useEffect(()=>{
    Aos.init();
  },[])
  const navigate =useNavigate();
  const userName =JSON.parse(localStorage.getItem("user"));
  const userName1 =JSON.parse(localStorage.getItem("user4"));
 
  const [input,setInput]=useState({
    cardholder:'',
    cardnumber:'',
    expiry:'',
    cvv:'',
    
    
    }); 

  const Done= (e)=>{
    e.preventDefault();
    navigate("/thankyou");
    
  }


/*for mention the servie detail in payment page */
if(userName1.Chooseevent == "ved(Movie)"){
  userName1.Chooseevent="ved(Movie):pay 200/-";
}
else if(userName1.Chooseevent == "valavi(Movie)"){
  userName1.Chooseevent="valavi(Movie):pay 220/-";
}
else if(userName1.Chooseevent == "pathan(Movie)"){
  userName1.Chooseevent="pathan(Movie):pay 230/-";
}
else if(userName1.Chooseevent == "Jaggu ani juliet(Movie)"){
  userName1.Chooseevent="Jaggu ani juliet(Movie):pay 250/-";
}
else if(userName1.Chooseevent == "Online Housie by kasa kai Mumbai"){
  userName1.Chooseevent="Online Housie by kasa kai Mumbai:pay 500/-";
}
else if(userName1.Chooseevent == "Chatrapati Shivaji Maharaj Marathon"){
  userName1.Chooseevent="Chatrapati Shivaji Maharaj Marathon:pay 520/-";
}
else if(userName1.Chooseevent == "Mumbai City FC vs East Bengal FC"){
  userName1.Chooseevent="Mumbai City FC vs East Bengal FC:pay 500/-";
}
else if(userName1.Chooseevent == "Comic Con India – Mumbai 2023"){
  userName1.Chooseevent="Comic Con India – Mumbai 2023:pay 700/-";
}
else if(userName1.Chooseevent == "Bollywood Buzz with Shreya Ghoshal"){
  userName1.Chooseevent="Bollywood Buzz with Shreya Ghoshal:pay 800/-";
}

  return (
    <div className='container-fluid logged-c '>
      
    <div className='row  '>
      <div className='col-lg-12 col-md-12 col-sm-12 col-xs-12  py-1 mb-5 logged-nav'><h1>fgdg</h1></div>
      <div className='col-lg-12 col-md-12 col-sm-12 text-center h-25 mb-5'><h1 className='text-white mx-auto  my-5' data-aos="flip-up" data-aos-duration="500">Welcome - {userName.name} !</h1>
      <form className='bg-dark h-100 pt-5 mx-auto w-25 text-center mx-auto pb-5 borderr rounded-5 mb-5 row' data-aos="fade-up" data-aos-duration="500"   onSubmit={Done}>
        <caption className='text-center fs-2 mb-4'>PAYMENT</caption>
        <input className=' emaili mb-4  w-75  mx-auto  ' required placeholder='card holder name' type="text" name='cardholder' value={input.cardholder} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
      <input className=' emaili mb-4  w-75 mx-auto ' required placeholder='card number' type="text" name='cardnumber' maxLength={16} value={input.cardnumber} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
      <input className=' emaili mb-4  w-75 mx-auto ' required placeholder='expiry' type="text" name='expiry' maxLength={5} value={input.expiry} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
      <input className=' emaili mb-4  w-75 mx-auto ' required placeholder='cvv/cvc'  type="password" name='cvv' maxLength={3} value={input.cvv} onChange={(e)=>setInput({...input,[e.target.name]:e.target.value})} />
      <h5 className='text-white'>{userName1.Chooseevent}</h5>
      <button className='btn btn-pri  w-50 mx-auto mt-3 text-white fs-6' type='submit'>Pay</button>
      <script src="https://smtpjs.com/v3/smtp.js"></script>
      </form>
      
      </div>
      
      

    </div>
    
  </div>
  )
}
