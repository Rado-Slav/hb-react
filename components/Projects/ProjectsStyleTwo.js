import React, { Component } from 'react';
import Link from 'next/link';

class ProjectsStyleTwo extends Component {
    render() {
        return (
            <section className="protfolio-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Our <span>Impressive</span> Portfolio</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/project-details">
                                        <a>
                                            <img src={require("../../images/portfolio/portfolio1.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Creative Web Develop</h3>
                                            <span>Web Design</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/project-details">
                                        <a>
                                            <img src={require("../../images/portfolio/portfolio2.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                     <Link href="/project-details">
                                        <a>
                                            <h3>Digital Services</h3>
                                            <span>App Development</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/project-details">
                                        <a>
                                            <img src={require("../../images/portfolio/portfolio3.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Complex Design</h3>
                                            <span>Software Development</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/project-details">
                                        <a>
                                            <img src={require("../../images/portfolio/portfolio4.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Creative Web Develop</h3>
                                            <span>React Development</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/project-details">
                                        <a>
                                            <img src={require("../../images/portfolio/portfolio5.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Digital Services</h3>
                                            <span>E-commerce Development</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-protfolio">
                                <div className="image">
                                    <Link href="/project-details">
                                        <a>
                                            <img src={require("../../images/portfolio/portfolio6.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/project-details">
                                        <a>
                                            <h3>Complex Design</h3>
                                            <span>Software Engineering</span>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <Link href="#">
                                    <a className="prev page-numbers">
                                        <i className="flaticon-left"></i>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current" aria-current="page">2</span>

                                <Link href="#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="#">
                                    <a className="next page-numbers">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ProjectsStyleTwo;