import React, { Component } from 'react';

class FunFacts extends Component {
    render() {
        return (
            <section className="review-section pt-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="row">
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-counter">
                                        <div className="icon">
                                            <i className="flaticon-check"></i>
                                        </div>
                                        <h3>950</h3>
                                        <p>Completed Projects</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-counter">
                                        <div className="icon">
                                            <i className="flaticon-happy"></i>
                                        </div>
                                        <h3>150</h3>
                                        <p>Happy Clients</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-counter">
                                        <div className="icon">
                                            <i className="flaticon-technical-support"></i>
                                        </div>
                                        <h3>550</h3>
                                        <p>Multi Services</p>
                                    </div>
                                </div>
            
                                <div className="col-lg-6 col-sm-6">
                                    <div className="single-counter">
                                        <div className="icon">
                                            <i className="flaticon-trophy"></i>
                                        </div>
                                        <h3>750</h3>
                                        <p>Winning Awards</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="review-image">
                                <img src={require("../../images/review.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default FunFacts;