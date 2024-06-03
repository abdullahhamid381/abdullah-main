import React from 'react'
import './Scss/Footer.scss'
import { Footerdata } from '../Data'
import { FaGithub,FaLinkedin,FaWhatsapp   } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
const Footer = () => {
  return (
  <div className='footer-back'>
<div className="width-section">
<div className="width">
<div className="grid">
{
    Footerdata.map((item)=>{
   return(
    <div className='item-flex'>
   <div className='img-div'>
   <img src={item.img} alt="" />
   </div>
   <div>
   <h1>{item.add}</h1>
    <p>{item.para}</p>
   </div>
</div>
   )
    })
   }
</div>

 </div>
 <div className='copyright'>
  <span> © Abdullah Dev 2024 | All Rights Reserved </span>
<div className="icons">
<a href="https://github.com/abdullahhamid381" target="_blank">
<span> <FaGithub /> </span>
</a>
<a href="https://www.linkedin.com/in/abdullah-reactjs-developer-a83420241/" target='_blank'>
<span><FaLinkedin />
</span>
</a>
<a href="https://wa.me//03107956685" target='_blank'>   <span>
   <FaWhatsapp />

</span></a>

</div>
  </div>
</div>
 
  </div>
  )
}

export default Footer