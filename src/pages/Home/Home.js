import { useNavigate } from 'react-router-dom';
import './Home.css';
import Carousel from 'react-bootstrap/Carousel';
export default function Home() {
 const navigate=useNavigate();

 const pre=()=>{
  navigate('/Services')
 }
  return (
<div className='row homebg bg-dark'>
 
    <div className='jumbotron jumbotron-fluid content  bg-transparent text-center mx-auto '>
   <div className='row homebg'>
    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12 mx-auto content text-start mt-5 pt-5'>
    
      <p className='display-4  font-weight-bold font mx-5 mt-5 ' data-aos="zoom-in" data-aos-delay="1650">Ticket Mator</p>
      <p className='lead  text-white mx-5 font-weight-bold ' data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1800"
     data-aos-offset="0">Just One Click Away To Book!</p>
     
      <button onClick={pre} className='btn btn-primary text-center my-5 py-3  px-2 mx-5'data-aos="fade-zoom-in"
     data-aos-easing="ease-in-back"
     data-aos-delay="1900"
     data-aos-offset="0" >Book Now</button>
    </div>
    <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12  mt-5'> <Carousel>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="p1.jpg"
          alt="First slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="p2.jpg"
          alt="Second slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="p3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto "
          src="p4.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="p5.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="p6.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="s1.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="s2.jpg"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-50 mx-auto"
          src="s3.jpg"
          alt="Third slide"
        />
      </Carousel.Item>

    </Carousel></div>
    </div>
  </div>
  </div>
    )
}
