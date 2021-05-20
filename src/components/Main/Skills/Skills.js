import React from 'react'
import './Skills.css'


const Skills = () => {
    return (
        <>
        <section className="skills section" id="skills">
            <h2 className="section_title">Skills</h2>
            <span className="section_subtitle">Technical Skills</span>
            <div className="skills_container container container_flex grid">
                {/* Languages */}
                <div className="skills_content">
                    <div className="skills_header">
                        <i class="uil uil-brain skills_icon"></i>
                        <div>
                            <h1 className="skills_title">Languages</h1>
                            <span className="skills_subtitle">Programming Languages</span>
                        </div>
                    </div>
                    
                    <div className="skills_list grid">
                        <div className="skills_data container_flex">
                            <div className="skills_title">
                                <h3 className="skills_name">C#</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Python</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">JavaScript</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">HTML</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">CSS</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Front End */}
                <div className="skills_content">
                    <div className="skills_header">
                        <i class="uil uil-web-grid skills_icon"></i>
                        <div>
                            <h1 className="skills_title">Front End</h1>
                            <span className="skills_subtitle">client-side development</span>
                        </div>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data container_flex">
                            <div className="skills_title">
                                <h3 className="skills_name">React</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">jQuery</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Axios</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Bootstrap</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Web Server */}
                <div className="skills_content">
                    <div className="skills_header">
                        <i class="uil uil-server-network skills_icon"></i>
                        <div>
                            <h1 className="skills_title">Web Servers and Framework </h1>
                            <span className="skills_subtitle">Tools and components</span>
                        </div>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data container_flex">
                            <div className="skills_title">
                                <h3 className="skills_name">.NET core</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Entity Framework</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Django</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Flask</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Node.js</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Express.js</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Database */}
                <div className="skills_content">
                    <div className="skills_header">
                        <i class="uil uil-database skills_icon"></i>
                        <div>
                            <h1 className="skills_title">Databases</h1>
                            <span className="skills_subtitle">Data structuring Tools</span>
                        </div>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data container_flex">
                            <div className="skills_title">
                                <h3 className="skills_name">MySQL</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">MongoDB</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Concepts */}
                <div className="skills_content">
                    <div className="skills_header">
                        <i class="uil uil-flask-potion skills_icon"></i>
                        <div>
                            <h1 className="skills_title">Concepts and Patterns</h1>
                            <span className="skills_subtitle">Understanding tools and concepts</span>
                        </div>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data container_flex">
                            <div className="skills_title">
                                <h3 className="skills_name">RESTful API</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">CRUD</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">AJAX</h3>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Cloud Service */}
                <div className="skills_content">
                    <div className="skills_header">
                        <i class="uil uil-cloud skills_icon"></i>
                        <div>
                            <h1 className="skills_title">Cloud Service</h1>
                            <span className="skills_subtitle">Online cloud services</span>
                        </div>
                    </div>

                    <div className="skills_list grid">
                        <div className="skills_data container_flex">
                            <div className="skills_title">
                                <h3 className="skills_name">AWS</h3>
                            </div>
                            <div className="skills_title">
                                <h3 className="skills_name">Azure</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Skills
