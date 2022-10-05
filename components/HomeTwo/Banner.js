import React, { Component } from 'react';
import Link from 'next/link';
import ReactWOW from 'react-wow';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner-area-two">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid mt-50">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <h1>Be Unique With Luzon IT Startup</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.</p>

                                        <div className="banner-btn">
                                            <Link href="#">
                                                <a className="default-btn">Get Started</a>
                                            </Link>

                                            <Link href="/contact">
                                                <a className="optional-btn">Contact Us</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-image">
                                        <ReactWOW delay='.1s' animation='fadeInUp'>
                                            <img src={require("../../images/home-two/home-two-shape1.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='fadeInDown'>
                                            <img src={require("../../images/home-two/home-two-shape2.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='fadeInUp'>
                                            <img src={require("../../images/home-two/home-two-shape3.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='zoomIn'>
                                            <img src={require("../../images/home-two/home-two-shape4.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='fadeInDown'>
                                            <img src={require("../../images/home-two/home-two-shape5.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='zoomIn'>
                                            <img src={require("../../images/home-two/main-img-2.png")} alt="image" />
                                        </ReactWOW>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Shape Images */}
                <div className="banner-shape">
                    <img src={require("../../images/home-two/cloud.png")} alt="image" className="w-100" />
                </div>

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
            </div>
        );
    }
}

export default Banner;