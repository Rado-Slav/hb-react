import React, { Component } from 'react';

class Features extends Component {
    render() {
        return (
            <div className="more-features-section pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="more-features-content">
                                <div className="icon">
                                    <i className="flaticon-report"></i>
                                </div>
                                <h3>SEO Consultancy</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="more-features-content bg-f0fffc">
                                <div className="icon">
                                    <i className="flaticon-laptop"></i>
                                </div>
                                <h3>Social Media Marketting</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="more-features-content bg-fceee2">
                                <div className="icon">
                                    <i className="flaticon-software"></i>
                                </div>
                                <h3>Competitor Analysis</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6">
                            <div className="more-features-content bg-fde2ee">
                                <div className="icon">
                                    <i className="flaticon-project-management"></i>
                                </div>
                                <h3>Creative Idea</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Features;