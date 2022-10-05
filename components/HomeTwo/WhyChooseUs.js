import React, { Component } from 'react';

class WhyChooseUs extends Component {
    render() {
        return (
            <section className="choose-section ptb-100">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Us</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-4 col-md-6">
                            <div className="choose-text">
                                <div className="icon">
                                    <i className="flaticon-shared-folder"></i>
                                </div>
                                <h3>Consulting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-text">
                                <div className="icon">
                                    <i className="flaticon-laptop"></i>
                                </div>
                                <h3>Data Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="image">
                                <img src={require("../../images/mobile.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-md-3 offset-lg-0">
                            <div className="choose-text">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <h3>Page Ranking</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-text">
                                <div className="icon">
                                    <i className="flaticon-target"></i>
                                </div>
                                <h3>Location Targeting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;