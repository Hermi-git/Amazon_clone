import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {img} from './img/data'
import classes from './Carousel.module.css'

function CarouselEffect() {
  return (
    <div>
        <Carousel    
        autoPlay={true}         
        infiniteLoop={true}     
        showIndicators={false}   
        showThumbs={false}               
        >

         {
           img.map((imageLink) =>{
            return <img src={imageLink} alt=''/>
           }) 
         }   
      </Carousel>
     <div className={classes.hero__img}></div>
    </div>
  )
}

export default CarouselEffect