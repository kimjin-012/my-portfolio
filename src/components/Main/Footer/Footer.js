import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <>
        <footer className="footer">
            <div className="footer_bg">
                <div className="footer_container container grid">
                    <div>
                        <h1 className="footer_title">Jin</h1>
                        <span className="footer_subtitle">FullStack Developer</span>
                    </div>

                    <ul className="footer_links">
                        <li>
                            <a href="#about" className="footer_link">About</a>
                        </li>
                        <li>
                            <a href="#project" className="footer_link">Projects</a>
                        </li>
                        <li>
                            <a href="#contact" className="footer_link">Contact</a>
                        </li>
                    </ul>

                    <div className="footer_socials">
                        <a href="https://www.linkedin.com/in/jin-kim-code/" target="_blank" className="footer_social">
                            <i class="uil uil-linkedin-alt"></i>
                        </a>
                        <a href="https://github.com/kimjin-012" target="_blank" className="footer_social">
                            <i class="uil uil-github-alt"></i>
                        </a>
                    </div>
                </div>

                <p className="footer_copy">
                    Made with React
                </p>
            </div>
        </footer>
        </>
    )
}

export default Footer
