import React from 'react'
import './About.css'

import AboutImg from '../../../images/tenor.gif'

const About = () => {
    return (
        <div className="about section" id="about">
            <h2 className="section_title">About Me</h2>
            <span className="section_subtitle">Introduction</span>

            <div className="about_container container grid">
                <img src={AboutImg} alt="about image" className="about_img" />

                <div className="about_data">
                    <p className="about_description">Hello!, I am a Full Stack Developer with great passion and knowledge in Front-end, Back-end, and Database developing.
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

                    <div className="about_button">
                        <a href="#contact" className="button button--flex">Contact Me!<i class="uil uil-comment-alt-medical button_icon"></i></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
