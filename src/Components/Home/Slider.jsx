import React, { useState } from 'react';
import './Scss/Slider.scss';
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';


// import required modules
import { FreeMode, Pagination } from 'swiper/modules';
import { projectsdata } from '../Data';







const Slider = () => {


  return (
    <div className="back-slider">
      <div className="width">
        <p>MY RECENT PROJECTS</p>
        <h1>
          Elevate your brand to new <br />
          heights with our portfolio expertise
        </h1>
        <div className='cards'>
          <Swiper
            freeMode={true}
            loop={true}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              992: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              993: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
      
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            {
              projectsdata.map((item) => {
                return (
                  <SwiperSlide style={{height:'360px'}}>
                    <div>
                      <div>
                        <img src={item.img} alt="" />
                      </div>
                      <div className='content'>
                        <h1>{item.title}</h1>
                        <a href={item.link} target='_blank' style={{textDecoration:'none'}}>
                        <div className="live">
                          <button> Go Live  </button>
                          <span>
                            <FaArrowUpRightFromSquare />
                          </span>
                        </div>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                )
              })
            }

          </Swiper>
        </div>

      </div>
    </div>
  );
};

export default Slider;
