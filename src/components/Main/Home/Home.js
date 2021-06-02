import React from 'react'
import './Home.css'

import Profile from '../../../images/Jin_Kim_1774403.jpg'

const Home = () => {
    return (
        <>
        <section className="home section" id="home">
            <div className="home_container container grid">
                <div className="home_content grid">
                    <div className="home_social">
                        <a href="https://www.linkedin.com/in/jin-kim-code/" rel="noreferrer" target="_blank" className="home_social-icon">
                        <i class="uil uil-linkedin"></i>
                        </a>
                        <a href="https://github.com/kimjin-012" rel="noreferrer" target="_blank" className="home_social-icon">
                        <i class="uil uil-github"></i>
                        </a>
                        <a href="mailto:na02093@gmail.com" className="home_social-icon">
                        <i class="uil uil-envelopes"></i>
                        </a>
                    </div>

                    <div className="home_img">
                        {/* profile image here */}
                        <div className="img_box">
                            <img src={Profile} alt="profile" />
                        </div>
                    </div>

                    <div className="home_data">
                        <h1 className="home_title">Hello!, I am <span>Jin</span></h1>
                        <h3 className="home_subtitle">FullStack Developer</h3>
                        <p className="home_description">High level experience in web design, data structuring, and producing inventive work</p>
                        <a href="#contact" className="button button--flex">
                            Contact Me <i class="uil uil-comment-alt-medical button_icon"></i>
                        </a>
                    </div>
                </div>

                <div className="home_scroll">
                    <a href="#about" className="home_scroll-button button--flex">
                    <i class="uil uil-mouse-alt-2 home_scroll-mouse"></i>
                    <span className="home_scroll-name">Scroll Down</span>
                    <i class="uil uil-angle-double-down home_scroll-arrow"></i>
                    </a>
                </div>
            </div>
        </section>
        </>
    )
}

export default Home
