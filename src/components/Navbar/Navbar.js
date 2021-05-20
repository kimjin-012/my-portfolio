import React, {useState} from 'react'
import './Navbar.css';
import $ from 'jquery'

const Navbar = () => {
    const navToggleHandler = () => {
        console.log("nav_toggle clicked");
        $('#nav_menu').addClass("show_menu");
    }

    const navCloseHandler = () => {
        console.log("nav_closed clicked");
        $('#nav_menu').removeClass("show_menu");
    }

    const linkMenuHandler = () => {
        console.log("nav_link clicked");
        $('#nav_menu').removeClass("show_menu");
    }

    return (
        <>
        <header className="header" id="header">
            <nav className="nav container">
                <a href="#" className="nav_logo">Jin</a>
                <div className="nav_menu" id="nav_menu"> 
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" className="nav_link" onClick={linkMenuHandler}>
                            <i class="uil uil-house-user nav_icon"></i> Home
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#about" className="nav_link" onClick={linkMenuHandler}>
                            <i class="uil uil-user-circle nav_icon"></i> About
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#skills" className="nav_link" onClick={linkMenuHandler}>
                            <i class="uil uil-file-check nav_icon"></i> Skills
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#project" className="nav_link" onClick={linkMenuHandler}>
                            <i class="uil uil-books nav_icon"></i> Projects
                            </a>
                        </li>
                        <li className="nav_item">
                            <a href="#contact" className="nav_link" onClick={linkMenuHandler}>
                            <i class="uil uil-envelopes nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i class="uil uil-times nav_close" id="nav_close" onClick={navCloseHandler}></i>
                </div>
                <div className="nav_button">
                    <div className="nav_toggle" id="nav_toggle" onClick={navToggleHandler}>
                    <i class="uil uil-apps"></i>
                    </div>
                </div>
            </nav>
        </header>
        </>
    )
}

export default Navbar
