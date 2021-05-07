import React, {useState} from 'react'
import './Navbar.css';

const Navbar = () => {
    const [click, setClick] = useState(false);

    const clickHandler = () => {
        setClick(!click);
    }

    const menuHandler = () => {
        setClick(false);
    }

    return (
        <>
        <div className="Navbar">
            <nav>
                <h1>Jin.Kim</h1>
                <ul>
                    <li><a href="/">Jin</a></li>
                    <li><a href="/#about">About Me</a></li>
                    <li><a href="/#skills">Skills</a></li>
                    <li><a href="/#project">Project</a></li>
                </ul>
            </nav>
        </div>
        </>
    )
}

export default Navbar
