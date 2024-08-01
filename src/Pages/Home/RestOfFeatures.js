import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Marquee from 'react-fast-marquee';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import Aos from 'aos';
import 'aos/dist/aos.css';
import serviceMap from '../../Assets/serviceMap.jpg';

 function RestOfFeatures() {

  return (<>
  <div className='container-fluid discoverContainer' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">
  <div class="discoverContent py-5 text-center">
        <div class="badge"> <i><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="rgba(252, 189, 1, 0.8)" style={{userSelect: "none", width: "20%", height: "20%", display: "inline", fill: "rgba(252, 189, 1, 0.8)", color: "rgba(252, 189, 1, 0.8)",}}><g color="rgba(252, 189, 1, 0.8)" weight="regular"><path d="M215.79,118.17a8,8,0,0,0-5-5.66L153.18,90.9l14.66-73.33a8,8,0,0,0-13.69-7l-112,120a8,8,0,0,0,3,13l57.63,21.61L88.16,238.43a8,8,0,0,0,13.69,7l112-120A8,8,0,0,0,215.79,118.17ZM109.37,214l10.47-52.38a8,8,0,0,0-5-9.06L62,132.71l84.62-90.66L136.16,94.43a8,8,0,0,0,5,9.06l52.8,19.8Z"></path></g></svg></i>  Features</div>
        <h1 style={{color: '#ffc107' , fontWeight: '400', fontSize: '3.5rem'}} className='head1'>Discover Our Capabilities</h1>
        <h5 style={{color: '#4F5874'}}>Unveiling our comprehensive range of services to cultivate your brand's potential and <br/> reach even more success.</h5> 

        
    </div>

    <div className='container py-3'>
        <Marquee speed={30}>
            <span className='btn btn-lg btn-primary rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-danger rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-success rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-warning rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-info rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-primary rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-danger rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-success rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-warning rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-info rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
        </Marquee>
    </div>
    
    <div className='container py-3'>
        <Marquee direction='right' speed={30}>
            <span className='btn btn-lg btn-primary rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-danger rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-success rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-warning rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-info rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-primary rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-danger rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-success rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-warning rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg btn-info rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
        </Marquee>
    </div>

    <div className='container'>
        <img style={{width: '100%' , height: '100%', objectFit: 'contain'}} src={serviceMap} />
    </div>
  </div>
  </>)
}
export default React.memo(RestOfFeatures);