import React, {useEffect, useState} from 'react';
import $ from 'jquery'
import './Main.css'

import Home from './Home/Home'
import About from './About/About'
import Projects from './Projects/Projects'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Main = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        window.onscroll = () => {
            setOffset(window.pageYOffset)
        }
    }, [])

    if(offset > 560)
    {
        $('#scroll-top').addClass('show-scroll');
    }
    else
    {
        $('#scroll-top').removeClass('show-scroll');
    }

    return (
        <main className="main">
            <Home/>
            <About/>
            <Projects/>
            <Skills/>
            <Contact/>
            <Footer/>
            <a href="#home" className="scrolltop" id="scroll-top">
                <i class="uil uil-arrow-up scrolltop_icon"></i>
            </a>
        </main>
    )
}

export default Main