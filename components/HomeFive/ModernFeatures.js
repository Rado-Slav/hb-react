import React, { Component } from 'react';

class ModernFeatures extends Component {
    render() {
        return (
            <section className="data-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="data-content">
                                <h3>Easy to Manage Your All Data by This App</h3>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <div className="data-inner-content">
                                            <i className="flaticon-software"></i>
                                            <h3>Modern Design</h3>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                    </div>

                                    <div className="col-sm-6">
                                        <div className="data-inner-content bg-facf34">
                                            <i className="flaticon-setting"></i>
                                            <h3>Creative Idea</h3>
                                            <p>Lorem ipsum dolor</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="data-image">
                                <img src={require("../../images/data.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ModernFeatures;