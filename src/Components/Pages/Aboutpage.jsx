import React from 'react'
import '../Home/Scss/About.scss'
import { FiDownload } from "react-icons/fi";
import Navbar from '../Home/Navbar';
import Footer from '../Home/Footer';
const AboutPage = () => {
    return (
        <div className='about-parent' style={{padding:"160px 0 0 0"}}>
            <Navbar/>
            <div className="about-grid">
                <div className='about-text'>
                    <div>
                        <h3>About Me</h3>
                        <h1>Transforming visions into
                            exceptional portfolios</h1>
                    </div>
                    <div className='about-info'>
                        <div>
                            <button></button>
                        </div>
                        <div className='about-detail-text'>
                            <p>Hello, I'm a dynamic Full Stack Developer with a passion for crafting seamless digital experiences. With a robust background in React.js and Node.js, I bring two years of hands-on expertise to the table. My journey in the world of web development has equipped me with a deep understanding of front-end intricacies and back-end functionalities.
                                <br /><br />
                                My proficiency in React.js extends beyond mere UI development, as I specialize in building intuitive and responsive front-end interfaces that enhance user experiences. On the back end, my expertise in Node.js enables me to create efficient and scalable server-side applications, ensuring optimal performance and reliability. I am well-versed in the entire development lifecycle, from conceptualization and design to implementation and deployment.
                                <br /><br />
                                With a keen eye for detail, I have successfully collaborated on diverse projects, contributing to the development of feature-rich and high-performance applications. My commitment to staying abreast of the latest industry trends and technologies ensures that I bring a forward-thinking approach to every project. Ready to tackle new challenges, I am excited to continue pushing the boundaries of web development and delivering innovative solutions that make a lasting impact.
                            </p>
                            <a href="Abdullah Hamid Cv.pdf" download='Abdullah Hamid Cv.pdf'>  <button className='download'>Download Cv <FiDownload /></button></a>
                        </div>
                    </div>
                </div>
                <div className='about-img'>
                    <img src="./images/myimg.png" alt="" />
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default AboutPage