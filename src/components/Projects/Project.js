import classes from './Project.module.css'
import React from 'react'

import Header from '../Header/Header'
import Card from '../ProjectCard/ProjectCard'

const Project = () => {
    return (
        <>
        <div className={classes.wrapper}>
            <Header title={'My Projects'}/>
            <div className={classes.container}>
                <div className={classes.cardContainer}>
                    <Card num={1} title={'First'} list={'list'}/>
                    <Card num={2} title={'Second'} list={'list'}/>
                    <Card num={3} title={'Third'} list={'list'}/>
                    <Card num={4} title={'Fourth'} list={'list'}/>
                </div>
            </div>
        </div>
        </>
    )
}

export default Project
