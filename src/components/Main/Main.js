import React from 'react';
import './Main.css'

import profile from './../../images/1551262561_PastelCrazyEastsiberianlaika-size_restricted.gif'
import bin from './../../images/GranularJoyousCorydorascatfish-size_restricted.gif'

const Main = () => {

    return (
        <div className="home">
            <div className="container">
                <h1 className="hello">Hello, World!</h1>
                <h1 className="welcome">Welcome!</h1>
            </div>
            <img className="profile" src={profile} alt="profile"/>
            <img className="bin" src={bin} alt="bin"/>
        </div>
    )
}

export default Main