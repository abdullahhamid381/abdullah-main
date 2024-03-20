import React from 'react'
import './Scss/About.scss'
import { FiDownload } from "react-icons/fi";
import { Link } from 'react-router-dom';
const About = () => {
    return (
        <div className='about-parent'>
            <div className="about-grid">
                <div className='about-text'>
                    <div>
                        <h3>About Me</h3>
                        <h1>Transforming visions into
                            exceptional portfolios</h1>
                    </div>
                    <div className='about-info'>
                        <div className='button'>
                            <button></button>
                        </div>
                        <div className='about-detail-text'>
                            <p>Hello, I'm a dynamic Full Stack Developer with a passion for crafting seamless digital experiences. With a robust background in React.js and Node.js, I bring two years of hands-on expertise to the table. My journey in the world of web development has equipped me with a deep understanding of front-end intricacies and back-end functionalities. <Link to='/about' style={{textDecoration:'none'}}><span>More ...</span></Link></p>
                            <a href="Abdullah Hamid Cv.pdf" download='Abdullah Hamid Cv.pdf'>  <button className='download'>Download Cv <FiDownload /></button></a>
                        </div>
                    </div>
                </div>
                <div className='about-img'>
                    {/* <img src="./images/myimg.png" alt="" /> */}
                </div>
            </div>
        </div>
    )
}

export default About