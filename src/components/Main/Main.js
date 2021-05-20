import React from 'react';
import './Main.css'

import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'
import Contact from './Contact/Contact';
import Footer from './Footer/Footer';

const Main = () => {

    return (
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
            <Contact/>
            <Footer/>
        </main>
    )
}

export default Main