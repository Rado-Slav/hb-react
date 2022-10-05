import React, { Component } from 'react';
import ReactWOW from 'react-wow';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner-area-seven">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid mt-50">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span>Digital Marketing</span>
                                        <h1>Digital Service With Excellent Quality</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.</p>
                                        
                                        <div className="banner-btn">
                                            <Link href="/contact">
                                                <a className="default-btn">Get Started</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 pr-0">
                                    <div className="banner-image">
                                        <ReactWOW delay='.1s' animation='fadeInUp'>
                                            <img src={require("../../images/home-seven/home-se-shape1.png")} alt="image" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='.1s' animation='fadeInUp'>
                                            <img src={require("../../images/home-seven/home-se-shape2.png")} alt="image" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='.1s' animation='fadeInLeft'>
                                            <img src={require("../../images/home-seven/home-se-shape3.png")} alt="image" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='.1s' animation='zoomIn'>
                                            <img src={require("../../images/home-seven/home-se-shape4.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='bounceIn'>
                                            <img src={require("../../images/home-seven/home-se-shape5.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='fadeInDown'>
                                            <img src={require("../../images/home-seven/home-se-shape6.png")} alt="image" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='.1s' animation='zoomIn'>
                                            <img src={require("../../images/home-seven/home-se-shape7.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='fadeInUp'>
                                            <img src={require("../../images/home-seven/home-se-shape8.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='rotateIn'>
                                            <img src={require("../../images/home-seven/home-se-shape9.png")} alt="image" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='.1s' animation='fadeInUp'>
                                            <img src={require("../../images/home-seven/home-se-shape10.png")} alt="image" />
                                        </ReactWOW>
                                        
                                        <ReactWOW delay='.1s' animation='zoomIn'>
                                            <img src={require("../../images/home-seven/home-se-shape11.png")} alt="image" />
                                        </ReactWOW>

                                        <ReactWOW delay='.1s' animation='zoomIn'>
                                            <img src={require("../../images/home-seven/main-img7.png")} alt="image" />
                                        </ReactWOW>
                                    </div>
                                </div>
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
            </div>
        );
    }
}

export default Banner;