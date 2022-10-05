import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner-area-four">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container-fluid">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span>Digital Marketing</span>
                                        <h1>Digital Agency and Marketing</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.</p>

                                        <div className="banner-btn">
                                            <Link href="/contact">
                                                <a className="default-btn">Get Started</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-image">
                                        <img src={require("../../images/home-four/main-img-4.png")} alt="image" />
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