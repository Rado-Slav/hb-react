import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>IT  Agency Services</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two">
                                <div className="icon">
                                    <i className="flaticon-it"></i>
                                </div>
                                <h3>IT Professionals</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>

                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two bg-fc9ba7">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>Web Development</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two bg-2cdcf7">
                                <div className="icon">
                                    <i className="flaticon-promotion"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two bg-009af0">
                                <div className="icon">
                                    <i className="flaticon-optimize"></i>
                                </div>
                                <h3>Software Engineers</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two bg-f4d62c">
                                <div className="icon">
                                    <i className="flaticon-cloud-computing"></i>
                                </div>
                                <h3>Data Analysis</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services-two bg-1e2d75">
                                <div className="icon">
                                    <i className="flaticon-laptop"></i>
                                </div>
                                <h3>SEO & Content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.</p>
                                
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="default-shape">
                    <div className="shape-1">
                        <img src={require("../../images/shape/shape4.png")} alt="image" />
                    </div>
                    <div className="shape-2 rotateme">
                        <img src={require("../../images/shape/shape5.svg")} alt="image" />
                    </div>
                    <div className="shape-3">
                        <img src={require("../../images/shape/shape6.svg")} alt="image" />
                    </div>
                    <div className="shape-4">
                        <img src={require("../../images/shape/shape7.png")} alt="image" />
                    </div>
                    <div className="shape-5">
                        <img src={require("../../images/shape/shape8.png")} alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;