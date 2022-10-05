import React, { Component } from 'react';
import Link from 'next/link';

class Services extends Component {
    render() {
        return (
            <section className="agency-services-section pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <h2>SEO  Agency <span>Services</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src={require("../../images/agency-services/agn-service1.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Creative Web Develop</h3>
                                        </a>
                                    </Link>
                                    <span>Web Design</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src={require("../../images/agency-services/agn-service2.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Digital Services</h3>
                                        </a>
                                    </Link>

                                    <span>Agency</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src={require("../../images/agency-services/agn-service3.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Complex Design</h3>
                                        </a>
                                    </Link>

                                    <span>Solutions</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src={require("../../images/agency-services/agn-service4.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Software Engineers</h3>
                                        </a>
                                    </Link>

                                    <span>Analysis</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src={require("../../images/agency-services/agn-service5.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Marketing Agency</h3>
                                        </a>
                                    </Link>

                                    <span>Marketing</span>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-agency">
                                <div className="image">
                                    <Link href="/service-details">
                                        <a>
                                            <img src={require("../../images/agency-services/agn-service6.png")} alt="image" />
                                        </a>
                                    </Link>
                                </div>

                                <div className="content">
                                    <Link href="/service-details">
                                        <a>
                                            <h3>Data Analysis</h3>
                                        </a>
                                    </Link>

                                    <span>Explanation</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Services;