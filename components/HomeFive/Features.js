import React, { Component } from 'react';
import Link from 'next/link';

class Features extends Component {
    render() {
        return (
            <section className="learn-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="learn-content">
                                <h3>The Features of New Beautiful Template</h3>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna </p>

                                <ul className="learn-list">
                                    <li>
                                        <i className='bx bx-chevrons-right'></i>
                                        The Philosophy Of Business Analytics
                                    </li>

                                    <li>
                                        <i className='bx bx-chevrons-right'></i>
                                        Fast Track Your Business
                                    </li>

                                    <li>
                                        <i className='bx bx-chevrons-right'></i>
                                        Lies & Damn Lies About Your Business
                                    </li>

                                    <li>
                                        <i className='bx bx-chevrons-right'></i>
                                        The Ultimate Deal on Business
                                    </li>
                                </ul>

                                <div className="learn-btn">
                                    <Link href="#">
                                        <a className="default-btn">Get Started</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-md-6">
                                    <div className="learn-inner-content mb-30">
                                        <div className="icon">
                                            <i className="flaticon-blog"></i>
                                        </div>
                                        <h3>Easy To edit</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do incididunt aliqua.</p>

                                        <Link href="#">
                                            <a className="read-btn">Read More</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="learn-inner-content mb-30">
                                        <div className="icon bg-ba60fc">
                                            <i className="flaticon-blueprint"></i>
                                        </div>
                                        <h3>Full Protection</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do incididunt aliqua.</p>

                                        <Link href="#">
                                            <a className="read-btn">Read More</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="learn-inner-content">
                                        <div className="icon bg-04cfc4">
                                            <i className="flaticon-clock"></i>
                                        </div>
                                        <h3>High Speed</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do incididunt aliqua.</p>

                                        <Link href="#">
                                            <a className="read-btn">Read More</a>
                                        </Link>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-6">
                                    <div className="learn-inner-content">
                                        <div className="icon bg-f9b854">
                                            <i className="flaticon-software"></i>
                                        </div>
                                        <h3>Design Branding</h3>
                                        <p>Lorem ipsum dolor sit amet consectetur adipiscing elit do incididunt aliqua.</p>

                                        <Link href="#">
                                            <a className="read-btn">Read More</a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Features;