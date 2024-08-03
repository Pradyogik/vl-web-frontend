import React from 'react';
import './FeatureComponent.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleUp, faBolt } from '@fortawesome/free-solid-svg-icons';

import serviceMap from '../../Assets/serviceMap.jpg';
// import bolt from '../../Assets/thunder.png';
import Marquee from 'react-fast-marquee';

function Discovery() {


  return (<>
  <div className='container-fluid discoveryContainer p-0' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">

    <div className='discoveryWrapper'>
        <h4> <i> <FontAwesomeIcon icon={faBolt} style={{color: "#FFD43B",}} /> </i> Features</h4> 

        <h1 style={{color : '#ffc107'}}>Discover Our Capabilities</h1>

        <h5 style={{color : 'rgb(79, 88, 116)'}}>Unveiling our comprehensive range of services to cultivate your brand's potential and <br/> reach even more success.</h5>
    </div>

    <div className='container py-3 lastMarquee p-0'>
        <Marquee speed={30}>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
        </Marquee>
    </div>

    <div className='container py-3 lastMarquee p-0'>
        <Marquee speed={30} direction='right'>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
            <span className='btn btn-lg  rounded-pill '> <FontAwesomeIcon icon={faArrowCircleUp}  /> AI generation </span>
        </Marquee>
    </div>

    <div className='container p-0'>
        <img style={{width: '100%' , height: '100%', objectFit: 'contain'}} src={serviceMap} />
    </div>

  </div>
  </>)
}


export default React.memo(Discovery);