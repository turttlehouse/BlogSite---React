import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ContactPage.css'

const ContactPage = () => {

     // Defining my social media profile URLs here
     const mysocialmedialinks = {
        facebook: 'https://www.facebook.com/vishaljimee',
        twitter: 'https://twitter.com/yourhandle',
        github: 'https://github.com/turttlehouse?tab=repositoriese',
        // Add more social media profiles as needed
      };




  return (
    <div>
        <Navbar/>

        <div className="social-media-container">

      <a href={mysocialmedialinks.facebook} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-facebook"></i>
      </a>

      <a href={mysocialmedialinks.twitter} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-twitter"></i>
      </a>

      <a href={mysocialmedialinks.github} target="_blank" rel="noopener noreferrer">
        <i className="fa fa-github"></i>
      </a>


    </div>
  
        </div>
  )
}

export default ContactPage