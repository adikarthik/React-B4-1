import React from 'react';
import { FaTwitter, FaFacebookF, FaYoutube, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import './Footer.css';



function Footer() {
  return (

    <div id='footer'>
      <div className='footer-content'>
        <div className='get-in-touch'>
          <h1>GET IN TOUCH</h1>
          <p> <IoCall />+91 76192 21922</p>
          <p><IoCall />+91 89041 72505</p>
          <p><MdEmail />admin@amigosbusinesscorp.com</p>

          <div className='social-links'>
            <a href="/#" ><FaTwitter /></a>
            <a href="/#" ><FaFacebookF /></a>
            <a href="/#"><FaYoutube /></a>
            <a href="/#"><FaInstagram /></a>
            <a href="/#"><FaLinkedinIn /></a>
          </div>

        </div>
        <div className='links'>
          <h1>USEFUL LINK</h1>
          <a href="about.html">About Us</a> <br />
          <a href="story.html">Our Story</a> <br />
          <a href="services.html">Our Services</a> <br />
        </div>

        <div className='stay-updated'>
          <h1>STAY UPDATED</h1>
          <p>Watch here for more information on cources and trainings we conduct.</p>
        </div>

        <div className='contact-us'>
          <a href="contact.html">Contact Us</a>
        </div>
      </div>
    </div>
  )
}

export default Footer;
