import React from 'react'
import './Projects.css'

import mapImage from './image/map.gif'
import starImage from './image/star.gif'
import eventImage from './image/event.gif'
import musicImage from './image/musify.png'

const Projects = () => {
    return (
        <>
        <section className="projects section" id="project">
            <h2 className="section_title">Projects</h2>
            <span className="section_subtitle">What I've made</span>

            <div className="projects_container container container_flex grid">
                {/* Fourth Project : Your direction */}
                <div className="projects_content">
                    <div className="projects_header">
                        <i class="uil uil-directions projects_icon"></i>
                        <div className="projects_main_contain">
                            <h1 className="projects_title">Your Direction</h1>
                            <span className="projects_subtitle">React.js, Google Maps API, Tom Tom API, HTML/CSS, Bootstrap</span>
                        </div>
                    </div>
                    
                    <div className="projects_list grid">
                        <div className="projects_data container_flex">
                            <div className="projects_title_main">
                                <p className="projects_description">Responsive Map website where users can mark their position and their destinations to find the fastest route to arrive at their destination.</p>
                                <ul>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Construted Front-end using React, HTML, CSS with Bootstrap</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Implemented TomTom API for adding complex map functions. Such as distance calculation and live traffic information display</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Using React and TomTom API, the map can automatically calculate the fastest route from starting mark to destination mark.</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Implemented Google Maps API and React Geocode to convert the address into Longitude and Latitude</li>
                                </ul>
                                <a href="https://github.com/kimjin-012/responsive-map" rel="noreferrer" target="_blank" className="button button--flex">
                                    GitHub <i class="uil uil-external-link-alt button_icon"></i>
                                </a>
                            </div>
                            <div className="projects_t">
                                <img src={mapImage} alt="project img" className="projects_img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* First Project : Share tracker */}
                <div className="projects_content">
                    <div className="projects_header">
                        <i class="uil uil-star projects_icon"></i>
                        <div className="projects_main_contain">
                            <h1 className="projects_title">Share Tracker</h1>
                            <span className="projects_subtitle">C#, ASP.NET Core, MySQL, CSHTML, Bootstrap</span>
                        </div>
                    </div>
                    
                    <div className="projects_list grid">
                        <div className="projects_data container_flex">
                            <div className="projects_title_main">
                                <p className="projects_description">User interactive website where any user can submit and share their discoveries to other users, where users can interact with other users by commenting/discussing within the post</p>
                                <ul>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Constructed back-end and front-end with ASP.NET Core.</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Implemented responsive Login and Registration page by connecting with MySQL database</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Implemented a Commenting function so users can freely post and delete their comments on any posts</li>
                                </ul>
                                <a href="https://github.com/kimjin-012/share-tracker" rel="noreferrer" target="_blank" className="button button--flex">
                                    GitHub <i class="uil uil-external-link-alt button_icon"></i>
                                </a>
                            </div>
                            <div className="projects_t">
                                <img src={starImage} alt="project img" className="projects_img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Project : event share */}
                <div className="projects_content">
                    <div className="projects_header">
                        <i class="uil uil-map projects_icon"></i>
                        <div className="projects_main_contain">
                            <h1 className="projects_title">Event Planner</h1>
                            <span className="projects_subtitle">MongoDB, Express.js, React.js, Node.js, Google Map API, HTML/CSS, Bootstrap</span>
                        </div>
                    </div>
                    
                    <div className="projects_list grid">
                        <div className="projects_data container_flex">
                            <div className="projects_title_main">
                                <p className="projects_description">Event Planning website for users who wish to register plans for others to see</p>
                                <ul>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Constructed back-end and front-end with MERN</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Implement a Google Map API to allow the users to see the location of the events</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Front-end is designed with React to be fully responsive</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Validation is implemented with MongoDB and front-end application (React) can display the validation error message when it's necessary</li>
                                </ul>
                                <a href="https://github.com/kimjin-012/event-planner" rel="noreferrer" target="_blank" className="button button--flex">
                                    GitHub <i class="uil uil-external-link-alt button_icon"></i>
                                </a>
                            </div>
                            <div className="projects_t">
                                <img src={eventImage} alt="project img" className="projects_img" />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Project : Musify */}
                <div className="projects_content">
                    <div className="projects_header">
                        <i class="uil uil-music projects_icon"></i>
                        <div className="projects_main_contain">
                            <h1 className="projects_title">Musify</h1>
                            <span className="projects_subtitle">Python, Django, Bcrypt, Regex, HTML/CSS, Bootstrap, Spotify API</span>
                        </div>
                    </div>
                    
                    <div className="projects_list grid">
                        <div className="projects_data container_flex">
                            <div className="projects_title_main">
                                <p className="projects_description">Music playing website where users can search and play music using Spotify service. The website will also give the user a list of recommendations according to the user's music choice</p>
                                <ul>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Constructed back-end using Django and front-end using HTML/CSS</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Implement a Spotify API to allow the users to seach and play musics</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Validation is designed with Django from back-end and front-end can show the validation error messages</li>
                                    <li><i class="uil uil-angle-right-b project_bullet"></i>Using Spotify music recommendation list API, the website will display the list of recommendation musics for the user</li>
                                </ul>
                                <a href="https://github.com/kimjin-012/Musify" rel="noreferrer" target="_blank" className="button button--flex">
                                    GitHub <i class="uil uil-external-link-alt button_icon"></i>
                                </a>
                            </div>
                            <div className="projects_t">
                                <img src={musicImage} alt="project img" className="projects_img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Projects
