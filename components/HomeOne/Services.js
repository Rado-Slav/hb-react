import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="services-section bg-background pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                        <p>We are fullstack development team specialising in below technologies:</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon bg-deb0fe">
                                    <i className="flaticon-it"></i>
                                </div>
                                <h3>IT Consultancy</h3>
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon bg-79e8e2">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>Web Development</h3>
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon bg-fcc774">
                                    <i className="flaticon-promotion"></i>
                                </div>
                                <h3>Digital Marketing</h3>
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon bg-84b7fd">
                                    <i className="flaticon-cellphone"></i>
                                </div>
                                <h3>App Development</h3>
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon bg-fe929f">
                                    <i className="flaticon-shopping-cart"></i>
                                </div>
                                <h3>E-commerce Development</h3>
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon bg-2e1342">
                                    <i className="flaticon-optimize"></i>
                                </div>
                                <h3>IT Solutions</h3>
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