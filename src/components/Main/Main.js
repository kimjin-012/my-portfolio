import React from 'react';
import './Main.css'

import Home from './Home/Home'
import About from './About/About'
import Skills from './Skills/Skills'

const Main = () => {

    return (
        <main className="main">
            <Home/>
            <About/>
            <Skills/>
        </main>
    )
}

export default Main