import React from 'react';
import './FeatureComponent.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

 function FeatureComponent(props) {
    
  return (<>
  <div className={`container featureCompContainer py-5 ${props.direction}`}>


  <div className='featureCompImg '>
        <img src={props.img} />
    </div>

    <div className='featureCompContent p-3'>
    <span data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span></span> FEATURES </span>
    <h1 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> {props.headingPart1}  using <span style={{color: "#ffc107", backgroundColor: 'transparent' , display: 'inline-block' , fontSize: 'inherit'}}> {props.highlight} </span> {props.headingPart2}</h1>

    <h5 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">{props.para}</h5>

    <button class="btn mt-4" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Get early access <i><FontAwesomeIcon icon={faArrowRight} style={{color: 'white'}} /> </i></button>

    </div>

    

    </div>
  </>)
}
export default React.memo(FeatureComponent);


export function SecondFeaturedComponent(props){

    return(<>
    <div className={`container featureCompContainer py-5  ${props.direction}` }>


    <div className='featureCompContent p-2'>
    <span data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> <span></span> FEATURES </span>
    <h1 className='pt-4' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true"> {props.heading2}  using <span style={{color: "#ffc107", backgroundColor: 'transparent' , display: 'inline-block' , fontSize: 'inherit'}}> {props.highlight2} </span> {props.heading2part2}</h1>

    <h5 className='pt-4 ' data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">{props.para2}</h5>

    <button class="btn mt-4" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-duration="1000" data-aos-once="true">Get early access <i><FontAwesomeIcon icon={faArrowRight} style={{color: 'white'}} /> </i></button>

    </div>


  <div className='featureCompImg '>
        <img src={props.secondImg} />
    </div>

    

    

    </div>
    </>)
}