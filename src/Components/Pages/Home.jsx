import React from "react";
import '../CSS/Home.css'
import ankit from '../images/ankit.png'

const Home = () => {
    return (
        <div className="portfolio_parent_div" id="home">
            <div className="content_div">
                <div className="heading_name">
                    <span style={{
                        fontSize: "1.5rem",
                        fontWeight: 600
                    }}>Hello,I'm </span>
                    <span style={{
                        fontSize: "2rem",
                        fontWeight: 600,
                        color: "#076c91"
                    }}>Ankit Verma</span>
                    <h3>Web Developer</h3>
                </div>
                <div className="about_me">
                    <span>Experienced software engineer with a passion for developing</span>
                    <span>innovative programs that expedite the efficiency and</span>
                    <span>effectiveness of organizational success. Well-versed in technology</span>
                    <span>and writing code to create systems that are reliable and user-friendly.</span>
                    <span>Skilled leader who has the proven ability to motivate, educate, and</span>
                    <span>manage a team of professionals to build software programs and</span>
                    <span>effectively track changes. Confident communicator, strategic thinker,</span>
                    <span>and innovative creator to develop software that is customized to</span>
                    <span>meet a company’s organizational needs, highlight their core competencies,</span>
                    <span>and further their success.</span>
                </div>
                <div className="btn">
                    <button className="button p-2">Let's talk</button>
                </div>
            </div>
            <div className="image_div">
                <div className="image">
                    <div className="img_div">
                        <img className="my_image2" src={ankit} alt='' />
                    </div>
                    <div className="heading_div">
                        <h4>Ankit Verma</h4>
                        <hr />
                    </div>
                </div>
                <div className="btn2">
                    <button className="button p-2">Let's talk</button>
                </div>
            </div>
        </div>
    )
}
export default Home;
