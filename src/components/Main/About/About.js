import React from 'react'
import './About.css'

import AboutImg from '../../../images/IMG_0304.JPG'

const About = () => {
    return (
        <div className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">Introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="about" className="about_img" />

                <div className="about_data">
                    <p className="about_description">
                        Hello!, I have an ability to turn Coffee into Code! 
                    </p>
                    <p className="about_description">That's right I am a Full Stack Developer and I have great passion and knowledge in Front-end, Back-end, and Database development.
                    </p>
                    <p className="about_description">
                        I am fond of turning project ideas into reality! Every day is an opportunity to learn new technologies!
                    </p>

                    <div className="about_info">
                        <div>
                            <span className="about_info-title">Creative</span>
                            <span className="about_info-name"><i class="uil uil-lightbulb-alt button_icon"></i></span>
                        </div>
                        <div>
                            <span className="about_info-title">Professional</span>
                            <span className="about_info-name"><i class="uil uil-nerd button_icon"></i></span>
                        </div>
                        <div>
                            <span className="about_info-title">Qaulity</span>
                            <span className="about_info-name"><i class="uil uil-search-alt button_icon"></i></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About