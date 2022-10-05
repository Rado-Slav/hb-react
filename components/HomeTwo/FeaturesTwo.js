import React, { Component } from 'react';

class FeaturesTwo extends Component {
    render() {
        return (
            <section className="support-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="support-image">
                                <img src={require("../../images/support.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="support-content">
                                <div className="icon">
                                    <i className="flaticon-optimize"></i>
                                </div>
                                <h3>Amazing Support</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua.</p>
                            </div>

                            <div className="support-content">
                                <div className="icon">
                                    <i className="flaticon-internet"></i>
                                </div>
                                <h3>Big Data Analysis</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua.</p>
                            </div>

                            <div className="support-content">
                                <div className="icon">
                                    <i className="flaticon-cloud-computing"></i>
                                </div>
                                <h3>Cloud Computing</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FeaturesTwo;