import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope ,faLocationDot,faMobile} from '@fortawesome/free-solid-svg-icons'
import { faTwitter,faInstagram,faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons'
import React from 'react'
import '../CSS/Contact.css'
import Form from '../Pages/subpages/Form'

const Contact = () => {
   return (
      <div className='parent_contact_div' id='contact'>
         <div className="left_contact_div">
            <div className="heading">
               <span className='getintouch'>Get in touch</span>
               <span>We love to hear from you. Our friendly team is always here to chat.</span>
            </div>
            <div className="information_about_me ">
               <div className='chat_to_us_div'>
                  <div className="chat_fotnausome">
                  <FontAwesomeIcon icon={faEnvelope} />
                  <span className='chat'>Chat to us</span>
                  </div>
                  <span>Our friendly team is here to help</span>
                  <span className="email">a.verma0827@gmail.com</span>
               </div>
               <div className='office_div'>
                  <div className="office_location">
                  <FontAwesomeIcon icon={faLocationDot} />
                       <span className="office">Ofiice</span>
                  </div>
                  <span>Come and say hello at our office </span>
               </div>
               <div className='phon_div'>
                  <div className="mobileicon_div">
                  <FontAwesomeIcon icon={faMobile} />
                      <span className="phon">Phone</span>
                  </div>
                  <span>Mon-Fri from 9am to 6pm</span>
               </div>
            </div>
            <div className="social_media_div">
            <a href='https://github.com/Ankit0827'><FontAwesomeIcon icon={faGithub} /></a>           
            <a href='https://www.instagram.com/ankit.verma0827/'><FontAwesomeIcon icon={faInstagram} /></a>
            <a href='https://www.linkedin.com/in/ankit-verma-701b77220/'><FontAwesomeIcon icon={faLinkedin}/></a>
            </div>
         </div>
         <div className="right_contact_div">
            <Form/>
         </div>
      </div>
   )
}

export default Contact




