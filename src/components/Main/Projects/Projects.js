import React from 'react'
import './Projects.css'

const Projects = () => {
    return (
        <>
        <section className="projects section" id="projects">
            <h2 className="section_title">Projects</h2>
            <span className="section_subtitle">What I've made</span>

            <div className="projects_container container grid">
                {/* First Project : Share tracker */}
                <div className="projects_content">
                    <div className="projects_header">
                        <i class="uil uil-brain projects_icon"></i>
                        <div>
                            <h1 className="projects_title">Languages</h1>
                            <span className="projects_subtitle">Programming Languages</span>
                        </div>
                    </div>
                    
                    <div className="projects_list grid">
                        <div className="projects_data container_flex">
                            <div className="projects_title">
                                <p className="projects_descripition">Hellooooo about this project</p>
                            </div>
                            <div className="projects_title">
                                <img src="" alt="project image" className="projects_img" />
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
