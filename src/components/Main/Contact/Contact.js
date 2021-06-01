import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
        <>
        <section className="contact section" id="contact">
            <h2 className="section_title">Contact Me</h2>
            <span className="section_subtitle">Get in touch with me!</span>

            <div className="contact_container container grid">
                <div>
                    <div className="contact_information">
                    <a href="na02093@gmail.com" target="_blank"><i class="uil uil-envelopes contact_icon"></i></a>

                        <div>
                            <a href="na02093@gmail.com" target="_blank"><h3 className="contact_title">Email Me!</h3></a>
                            <span className="contact_subtitle">na02093@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact_information">
                    <a href="https://www.linkedin.com/in/jin-kim-code/" rel="noreferrer" target="_blank"><i class="uil uil-linkedin-alt contact_icon"></i></a>

                        <div>
                            <a href="https://www.linkedin.com/in/jin-kim-code/" rel="noreferrer" target="_blank"><h3 className="contact_title">Connect with Me!</h3></a>
                            <span className="contact_subtitle">linkedin.com/in/jin-kim-code</span>
                        </div>
                    </div>

                    <div className="contact_information">
                    <a href="https://github.com/kimjin-012" rel="noreferrer" target="_blank"><i class="uil uil-github contact_icon"></i></a>

                        <div>
                            <a href="https://github.com/kimjin-012" rel="noreferrer" target="_blank"><h3 className="contact_title">Check out my GitHub Page!</h3></a>
                            <span className="contact_subtitle">https://github.com/kimjin-012</span>
                        </div>
                    </div>

                    <br />
                    <br />

                    <div className="contact_information">
                    <i class="uil uil-map-pin contact_icon"></i>

                        <div>
                            <h3 className="contact_title">Location</h3>
                            <span className="contact_subtitle">Seattle, Washington</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Contact
