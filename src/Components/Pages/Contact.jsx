import React from 'react'
import '../CSS/Contact.css'

const Contact = () => {
   return (
      <div className='parent_contact_div'>
         <div className="left_contact_div">
            <div className="heading">
               <span className='getintouch'>Get in touch</span>
               <span>We love to hear from you. Our friendly team is always here to chat.</span>
            </div>
            <div className="information_about_me ">
               <div className='chat_to_us_div'>
                  <span className='chat'>Chat to us</span>
                  <span>Our friendly team is here to help</span>
                  <span className="email">a.verma0827@gmail.com</span>
               </div>
               <div className='office_div'>
                  <span className="office">Ofiice</span>
                  <span>Come and say hello at our office </span>
               </div>
               <div className='phon_div'>
                  <span className="phon">Phon</span>
                  <span>Mon-Fri from 9am to 6pm</span>
               </div>
            </div>
         </div>
         <div className="right_contact_div"></div>
      </div>
   )
}

export default Contact




