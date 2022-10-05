import React, { Component } from 'react';
import Link from 'next/link';

class Projects extends Component {
    render() {
        return (
            <section className="projects-section pb-70">
                <div className="container-fluid mw-1920">
                    <div className="section-title">
                        <h2>Projects</h2>
                        <p>Check out some of our work.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project1.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Britanica</h3>
                                        </a>
                                    </Link>
                                    
                                    <Link href="/project-details">
                                        <a>
                                            <span>Bulgaria's foreign number one school</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project2.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>David Beckham </h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>David Beckham's fragrances</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project3.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Eldorado</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>The French Tech Startup Network</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project4.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Tubesca-Comabi</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>French leader in custom leaders</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project5.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Les Pepites Tech</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>French network of startup profiles</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project6.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Zahnarztwik</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>German Dental Clinics</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-projects">
                                <div className="projects-image">
                                    <img src={require("../../images/projects/project7.jpg")} alt="image" />
                                </div>

                                <div className="projects-content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>ITSF</h3>
                                        </a>
                                    </Link>

                                    <Link href="/project-details">
                                        <a>
                                            <span>World Table Soccer Federation</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Projects;