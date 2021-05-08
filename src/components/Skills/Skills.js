import React from 'react'
import classes from './Skills.module.css'

import Header from './../Header/Header'
import Card from './../GlassCard/Card'

const Skills = () => {
    return (
        <>
        <div className={classes.wrapper}>
        <Header title={'My Skills'}/>
            <div className={classes.container}>
                <div className={classes.cardContainer}>
                    <Card num={'L'} title={'First'} list={'list'}/>
                    <Card num={2} title={'Second'} list={'list'}/>
                    <Card num={3} title={'Third'} list={'list'}/>
                    <Card num={4} title={'Fourth'} list={'list'}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Skills
