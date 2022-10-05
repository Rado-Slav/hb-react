import React, { Component } from 'react';
import Link from 'next/link';

class Banner extends Component {
    render() {
        return (
            <div className="main-banner-area-eight">
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="container mt-50">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="main-banner-content">
                                        <span>Welcome To App Showcase</span>
                                        <h1>Awesome App For Your Modern Lifestyle</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut laboredolore magna aliqua elsed  tempomet, consectetur adipiscing.</p>

                                        <div className="banner-btn">
                                            <Link href="/contact">
                                                <a className="default-btn">Get Started</a>
                                            </Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6">
                                    <div className="banner-form">
                                        <form id="contactForm">
                                            <div className="form-group">
                                                <input type="text" name="name" id="name" className="form-control" required placeholder="Your Name" />
                                            </div>
                                            
                                            <div className="form-group">
                                                <input type="email" name="email" id="email" className="form-control" required placeholder="Your Email" />
                                            </div>
                                            
                                            <div className="form-group">
                                                <input type="text" name="msg_subject" id="msg_subject" className="form-control" required placeholder="Your Subject" />
                                            </div>
                                        
                                            <div className="form-group">
                                                <textarea name="message" className="form-control" id="message" cols="30" rows="6" required placeholder="Your Message"></textarea>
                                            </div>
                
                                            <button type="submit" className="default-btn">
                                                Send Message
                                            </button>
                                        </form>
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