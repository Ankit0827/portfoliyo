import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { faTwitter, faInstagram, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import '../CSS/Footer.css'
import { useState, useEffect } from 'react';
import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';


const Footer = () => {
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const scrollButton = () => {
            var ydirection=window.pageYOffset;
            ydirection> 0 ? setShowButton(true) : setShowButton(false);
        };
        window.addEventListener('scroll', scrollButton);

        return () => {
            window.removeEventListener('scroll', scrollButton)
        };
    }, [])
    const handleScrollTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    return (
        <div className='parent_footer_div'>
            <div className="upperfooter_div">
                <span>Ankit verma</span>
                <span>Software Developer</span>
            </div>
            <hr className='hrline' />
            <div className="loower_div">
                <div className="heaading_div">
                    <span className="headinng">
                        Contact us
                    </span>
                </div>
                <div className="social_media_icon_div">
                    <div className="social_media_icon_div1">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="social_media_icon_div1">
                        <FontAwesomeIcon icon={faInstagram} />

                    </div>
                    <div className="social_media_icon_div1">
                        <FontAwesomeIcon icon={faGithub} />

                    </div>
                    <div className="social_media_icon_div1">
                        <FontAwesomeIcon icon={faLinkedin} />

                    </div>
                    {
                        showButton && (
                            <div className="sroll_top">
                                <FontAwesomeIcon className='btn-scroll' icon={faArrowCircleUp}onClick={handleScrollTop}/>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Footer
