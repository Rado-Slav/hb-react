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
                        <div className="col-lg-6">
                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-shared-folder"></i>
                                </div>
                                <h3>Consulting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-blog"></i>
                                </div>
                                <h3>Data Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <h3>Page Ranking</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>

                            <div className="choose-content">
                                <div className="icon">
                                    <i className="flaticon-target"></i>
                                </div>
                                <h3>Location Targeting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</p>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="choose-image">
                                <img src={require("../../images/choose.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WhyChooseUs;