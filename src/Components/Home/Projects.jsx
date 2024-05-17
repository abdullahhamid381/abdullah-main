import React from "react";
import "./Scss/project.scss";

import { Swiper, SwiperSlide } from "swiper/react";
import { FiExternalLink } from "react-icons/fi";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import "./Scss/Review.scss";

// import required modules
import { FreeMode } from "swiper/modules";
import { projects } from "../Data";

const Projects = () => {
  return (
    <div className="projects-back-parent" id="skill">
      <div className="skill-width">
        <div>
          <div className="section">
            <h3>Projects </h3>
            <h2>Some Things I’ve Built</h2>
          </div>

       <div className="slide">
       <Swiper 
            slidesPerView={2}
            spaceBetween={40}
            loop={true}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            {projects.map((item) => {
              return (
                <SwiperSlide>
               <a href={item.link}>
               <div >
                    <div className="project-img">
                      <img src={item.img} alt="" />
                    </div>
                    <div className="content">
                      <div className="text">
                        <h1>Featured Project</h1>
                        <h2>{item.h1}</h2>
                        <p>
                         {item.para}
                        </p>
                        <div className="tech">
                          <span>Next.js</span>
                          <span>Next.js</span>
                          <span>Next.js</span>
                          <span>Next.js</span>
                        </div>
                        <div className="link">
                          <a href="">
                            <FiExternalLink />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
               </a>
                </SwiperSlide>
              );
            })}
          </Swiper>
       </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
