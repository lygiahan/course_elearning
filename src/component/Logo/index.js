import React from 'react'
import Slider from "react-slick";
import classes from './Logo.module.scss';
export default function Logo() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 6,
        slidesToScroll: 6,
        autoplay: true,
       autoplaySpeed: 2000,
       cssEase: "linear",
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 6,
              slidesToScroll: 6,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 4,
              slidesToScroll:4,
              initialSlide: 4
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          }
        ]
      };
    return (
        <Slider {...settings} className={classes.logo__slider}>
                  <div className={classes.logo__img}>
                      <img src="./images/logo1.png"/>
                  </div>
                  <div className={classes.logo__img}>
                      <img src="./images/logo2.png"/>
                  </div>
                  <div className={classes.logo__img}>
                      <img src="./images/logo3.png"/>
                  </div>
                  <div className={classes.logo__img}>
                      <img src="./images/logo4.png"/>
                  </div>
                  <div className={classes.logo__img}>
                      <img src="./images/logo5.png"/>
                  </div>
                  <div className={classes.logo__img}>
                      <img src="./images/logo5.png"/>
                  </div>
                  <div className={classes.logo__img}>
                      <img src="./images/logo5.png"/>
                  </div>
                
        </Slider>
    )
}
