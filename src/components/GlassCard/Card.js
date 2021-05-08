import React from 'react'
import classes from './Card.module.css'

const Card = (props) => {
    return (
        <div className={classes.card}>
            <div className={classes.content}>
                <h2>{props.num}</h2>
                <h3>{props.title}</h3>
                <p>{props.list}</p>
            </div>
        </div>
    )
}

export default Card
