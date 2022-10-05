import React, { Component } from 'react';

class WorkingProcess extends Component {
    render() {
        return (
            <section className="process-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="process-content">
                                <h3>
                                    <span>01</span> Strategy
                                </h3>

                                <div className="image">
                                    <img src={require("../../images/process/process1.png")} alt="image" />
                                </div>

                                <div className="content">
                                    <h4>Brand Strategy & Art Direction</h4>
                                    <p>Creating a higher spacing For people through Unique Campaigns</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="process-content">
                                <h3>
                                    <span>02</span> Design
                                </h3>

                                <div className="image">
                                    <img src={require("../../images/process/process2.png")} alt="image" />
                                </div>

                                <div className="content">
                                    <h4>UI/UX Design & Mobile App Design</h4>
                                    <p>Creating a higher spacing For people through Unique Campaigns</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                            <div className="process-content">
                                <h3> 
                                    <span>03</span> Develop
                                </h3>

                                <div className="image">
                                    <img src={require("../../images/process/process3.png")} alt="image" />
                                </div>

                                <div className="content">
                                    <h4>Digital Experience and Branding</h4>
                                    <p>Creating a higher spacing For people through Unique Campaigns</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default WorkingProcess;