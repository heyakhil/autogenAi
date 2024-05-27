import React, { useState } from "react";
import Slider from "react-slick";
import classes from "./styles.module.css";
import { SlArrowRight, SlArrowLeft  } from "react-icons/sl";

const LinearSlider = () => {

    const [activeDot, setActiveDot] = useState(1)

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 4000,
    cssEase: "linear",
    nextArrow: <SlArrowRight size={30} color="#fff" />,
    prevArrow: <SlArrowLeft size={30} color="#fff" />,
    appendDots: (dots:any) => (
        <div
          style={{
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
           {dots} 
        </div>
      ),
    beforeChange: (prev:any, next:any) => {
        setActiveDot(next)
      },
    customPaging: (i:any) => (
        <div
          style={{
            width: "14px",
            height:'14px',
            color: "blue",
            border: "1px transparent solid",
            background:'#B9B9B9',
            borderRadius:'7px',
            display:'flex',
            justifyContent:'center',
            alignItems:'center'
          }}
        >
          {i === activeDot && <div style={{padding:'5px', background:'#272727', borderRadius:'5px'}} />}
        </div>
      ),
      responsive: [
        {
            breakpoint: 700,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode:true,
            }
        }
      ]
  };

  return (
    <div className={`row ${classes.slidecontainer}`}>
      <Slider {...settings}>
        <div>
          <img src="/slideimg/slidelong.png" className={classes.slideimg} />
        </div>
        <div>
          <img src="/slideimg/slidelong.png" className={classes.slideimg} />
        </div>
        <div>
          <img src="/slideimg/slidelong.png" className={classes.slideimg} />
        </div>
        <div>
          <img src="/slideimg/slidelong.png" className={classes.slideimg} />
        </div>
        <div>
          <img src="/slideimg/slidelong.png" className={classes.slideimg} />
        </div>
        <div>
          <img src="/slideimg/slidelong.png" className={classes.slideimg} />
        </div>
      </Slider>
    </div>
  );
};

export default LinearSlider;
