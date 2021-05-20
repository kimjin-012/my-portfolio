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
                    <i class="uil uil-envelopes contact_icon"></i>

                        <div>
                            <h3 className="contact_title">Email Me!</h3>
                            <span className="contact_subtitle">na02093@gmail.com</span>
                        </div>
                    </div>

                    <div className="contact_information">
                    <i class="uil uil-linkedin-alt contact_icon"></i>

                        <div>
                            <h3 className="contact_title">Connect!</h3>
                            <span className="contact_subtitle">Seattle, Washington</span>
                        </div>
                    </div>

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
