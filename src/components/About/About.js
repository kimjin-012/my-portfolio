import React from 'react'
import classes from './About.module.css'

import Header from '../Header/Header'

import me from '../../images/1551262561_PastelCrazyEastsiberianlaika-size_restricted.gif'

const About = () => {
    return (
        <div className={classes.aboutme}>
            <Header title={'About Me'}/>
            <div className={classes.container}>
                <div className={classes.descript}>
                    <h2>Hello! My Name is Jin</h2>
                    <p>
                        I'm a software developer
                    </p>
                </div>
                <div className={classes.photo}>
                    <img src={me} alt="me" className={classes.me}/>
                </div>
            </div>
        </div>
    )
}

export default About
