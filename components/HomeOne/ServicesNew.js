import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import AOS from 'aos';
import "aos/dist/aos.css";

class ServicesNew extends Component {

  state = {
    isVisible: false
  }

  componentDidMount() {
    // or simply just AOS.init();
    //AOS.init();
  }

    render() {
        return (
            <section data-aos="fade-up" className="services-section bg-background pt-100 pb-70">
                <div className="container ">
                    <div className="section-title">
                        <h2>Our Expertise</h2>
                        <p>We are fullstack development team specialising in below technologies:</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon icon-new bg-deb0fe html">
                                </div>
                                <h3>HTML5</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon icon-new bg-79e8e2 css">
                                </div>
                                <h3>CSS3</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon icon-new bg-fcc774 javascript">
                                </div>
                                <h3>Javascript</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon icon-new bg-84b7fd drupal">
                                </div>
                                <h3>Drupal</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon icon-new bg-fe929f bootstrap">
                                </div>
                                <h3>Bootstrap</h3>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <div className="single-services">
                                <div className="icon icon-new bg-2e1342 php">
                                </div>
                                <h3>PHP</h3>
                            </div>
                        </div>

                      <div className="col-lg-3 col-md-4">
                        <div className="single-services">
                          <div className="icon icon-new bg-2e1342 laravel">
                          </div>
                          <h3>LARAVEL</h3>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4">
                        <div className="single-services">
                          <div className="icon icon-new bg-2e1342 nodejs">
                          </div>
                          <h3>NODEJS</h3>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4">
                        <div className="single-services">
                          <div className="icon icon-new bg-2e1342 react">
                          </div>
                          <h3>REACT</h3>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4">
                        <div className="single-services">
                          <div className="icon icon-new bg-2e1342 wordpress">
                          </div>
                          <h3>WORDPRESS</h3>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4">
                        <div className="single-services">
                          <div className="icon icon-new bg-2e1342 jquery">
                          </div>
                          <h3>JQUERY</h3>
                        </div>
                      </div>

                      <div className="col-lg-3 col-md-4">
                        <div className="single-services">
                          <div className="icon icon-new bg-2e1342 angular">
                          </div>
                          <h3>ANGULAR</h3>
                        </div>
                      </div>
                      
                    </div>
                </div>

                {/* Shape Images */}
                <div className="default-shape">
                    <div className="shape-1">
                        <img src={require("../../images/shape/shape4.png")} alt="image" />
                    </div>
                    <div className="shape-2 rotateme">
                        <img src={require("../../images/shape/shape5.svg")} alt="image" />
                    </div>
                    <div className="shape-3">
                        <img src={require("../../images/shape/shape6.svg")} alt="image" />
                    </div>
                    <div className="shape-4">
                        <img src={require("../../images/shape/shape7.png")} alt="image" />
                    </div>
                    <div className="shape-5">
                        <img src={require("../../images/shape/shape8.png")} alt="image" />
                    </div>
                </div>
            </section>
        );
    }
}

export default ServicesNew;