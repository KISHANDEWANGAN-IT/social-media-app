import React from "react";
import "./Rightbar.css";
import Gift from "../images/gift.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Images} from '../carouselData'


function Rightbar() {
  return (
    <div className="rightbar">
      <div className="bday-container">
        <img src={Gift} alt="" />
        <span>
          <b>aarav</b> and <b>3 other friends</b> have a birthday today.
        </span>
      </div>
      <div className="adContainer">
        <Slider style={{width:'23rem',marginTop:'2rem'}} autoplay autoplaySpeed={2000} >
    {Images.map((item, idx) => {
          return (
            <div key={item.id}>
              <div className="carousel-img">
                <img src={item.img} alt="" />
              </div>
            </div>
          );
        })}
    </Slider>
                
                
      </div>
    </div>
       
  );
}

export default Rightbar;
