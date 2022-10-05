import React, { Component } from 'react';

class ServiceDevelopment extends Component {
    render() {
        return (
            <section className="development-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="development-image">
                                <img src={require("../../images/development.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="development-text">
                                <h3>Web & Mobile <span>Development</span></h3>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon">
                                    <i className="flaticon-blog"></i>
                                </div>
                                <h3>UI/UX Design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon bg-05dbcf">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>Web Development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon bg-fec66f">
                                    <i className="flaticon-cellphone"></i>
                                </div>
                                <h3>Mobile Development</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon bg-66a6ff">
                                    <i className="flaticon-devices"></i>
                                </div>
                                <h3>Responsive Design</h3>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDevelopment;