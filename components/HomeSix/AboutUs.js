import React, { Component } from 'react';

class AboutUs extends Component {
    render() {
        return (
            <section className="work-section bg-f6f6fe ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="work-content">
                                <h3>Brainstorming, <span>Researching</span> Planning, Strategizing Work</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dood tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas.</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="work-status">
                                            <h3>
                                                50 <span className="sign-icon">K</span>
                                            </h3>
                                            <h4>Completed Project</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="work-status">
                                            <h3>
                                                98 <span className="sign-icon">%</span>
                                            </h3>
                                            <h4>Customer Satisfaction</h4>
                                            <p>Lorem ipsum dolor sit amet consectetur do eiusmod tempor incididunt ut labore et dolore.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="mt-30">
                                <img src={require("../../images/work.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutUs;