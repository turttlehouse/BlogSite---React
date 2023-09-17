import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './ContactPage.css'
import Footer from '../../components/Footer/Footer'

const ContactPage = () => {

     // Defining my social media profile URLs here
     const mysocialmedialinks = {
        facebook: 'https://www.facebook.com/vishaljimee',
        twitter: 'https://twitter.com/jimee0007',
        linkedin:'https://www.linkedin.com/in/bishal-yakkha-77990526b/',
        github: 'https://github.com/turttlehouse?tab=repositoriese',
       
      };




  return (
    <div>
        <Navbar/>

      <div className="contact-container">
      <h2>Contact Us</h2>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>


        <h3 style={{textAlign:'center',color:'orange', fontFamily:'sans-serif'}}>Stay Connected</h3>

                <div className="social-media-container">

                    <a href={mysocialmedialinks.facebook} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-facebook"></i>
                    </a>

                    <a href={mysocialmedialinks.twitter} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-twitter"></i>
                    </a>

                    <a href={mysocialmedialinks.linkedin} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-linkedin"></i>
                    </a>

                    <a href={mysocialmedialinks.github} target="_blank" rel="noopener noreferrer">
                        <i className="fa fa-github"></i>
                    </a>


                </div>
       
        <Footer/>
  
    </div>
  )
}

export default ContactPage