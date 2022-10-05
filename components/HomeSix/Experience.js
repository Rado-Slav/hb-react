import React, { Component } from 'react';
import Link from 'next/link';

class Experience extends Component {
    render() {
        return (
            <section className="experience-section">
                <div className="container-fluid">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="experience-inner-area">
                                <div className="experience-content">
                                    <h3>Digital <span>Experience</span></h3>
                                    <div className="bar"></div>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra.</p>
                                </div>

                                <div className="experience-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <h3>No Coding Skills Required</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p>
                                </div>

                                <div className="experience-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <h3>Online Documentation</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p>
                                </div>

                                <div className="experience-inner-content">
                                    <div className="icon">
                                        <i className="flaticon-check"></i>
                                    </div>
                                    <h3>SEO Optimized</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut dolore ipsum.</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 pr-0">
                            <div className="experience-image">
                                <img src={require("../../images/experience.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Experience;