import React from 'react'
import "./ButtonSection.css";
import MailIcon from '../../assets/Mail.png';
import LinkedinIcon from '../../assets/linkedin.png';

const ButtonSection = () => {
  return (
    <div className='ButtonSection'>
        <button className='email-btn btn'>
          <img src={MailIcon} alt='mail icon'/>
          Email
        </button>
        <button className='linkedin-btn btn'>
          <img src={LinkedinIcon} alt='linkedin icon'/>
          Linkedin
        </button>
    </div>
  )
}

export default ButtonSection
