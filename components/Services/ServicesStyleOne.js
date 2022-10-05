import React, { Component } from 'react';
import Link from 'next/link';

class ServicesStyleOne extends Component {
    render() {
        return (
            <section className="services-section hb-services pt-100 pb-100">
                <div className="container">
                    <div className="section-title hb-section-title">
                        <h2>Our Services</h2>
                      <p><b>HB Dream Mill Ltd</b> offers a large variety of services – from web design to custom application development in correspondence with the client’s needs.

                          We know that website users and customers are trying to satisfy their needs similar to the common user that have entered a shop – there are many page details that they don’t see (they just scan the webpage). This is why designing plays such an important role – it can enhance the usability, make the website easier for communication, more outstanding and effective. This is why we use our know-how to help and consult our clients with their web solutions offering them increased visibility and exposure for their websites and relative products – mobile website versions, applications, design elements – logos, signs, corporate identities etc.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>Web Design & Development</h3>
                                <p>HBMill and the team of experts make websites for your business. Share your idea and we will create a whole new web vision that materializes it!</p>
                              {/*
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>*/}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-thinking"></i>
                                </div>
                                <h3>PHP & Development</h3>
                                <p>We are in a constant search for a better way to develop our solutions serving the needs of our clients and relying on technologies with strong communities and tradition!</p>
                              {/*
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>*/}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-promotion"></i>
                                </div>
                                <h3>SEO & Internet Marketing</h3>
                                <p>We use different up-to-date techniques to make your webiste visible in the web. By taking care and promoting your website you will gain many advantages!</p>
                              {/*
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>*/}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-shared-folder"></i>
                                </div>
                                <h3>Hosting Services</h3>
                                <p>Good hosting always means a good connection and is a necessary mean for the success of your website and business!</p>
                              {/*
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>*/}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-cellphone"></i>
                                </div>
                                <h3>Social Media</h3>
                                <p>Today we are all socializing through the net. Offer your ideas to the “www” society and find more frinends and users of your business!</p>
                              {/*
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>*/}
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-services">
                                <div className="icon">
                                    <i className="flaticon-optimize"></i>
                                </div>
                                <h3>.NET Development</h3>
                                <p>Going deep into the web, we all need the best tools to overcome the obstacles there. Use the proper technologies and find the solution!</p>
                              {/*
                                <Link href="/service-details">
                                    <a className="read-btn">Read More</a>
                                </Link>*/}
                            </div>
                        </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                          <div className="icon">
                            <i className="flaticon-software"></i>
                          </div>
                          <h3>RIA Development</h3>
                          <p>With a team of experts in the area, HB Mill has specialized in making websites for your business. We use different knowledge to meet the reuirements of our clients!</p>
                          {/*
                          <Link href="/service-details">
                            <a className="read-btn">Read More</a>
                          </Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                          <div className="icon">
                            <i className="flaticon-project-management"></i>
                          </div>
                          <h3>Technical Consultations</h3>
                          <p>We know how important is the support to our clients so we don’t hesitate to spend our resources to provide accurate and competent maintenanace of your websites!</p>
                          {/*
                          <Link href="/service-details">
                            <a className="read-btn">Read More</a>
                          </Link>*/}
                        </div>
                      </div>

                      <div className="col-lg-4 col-md-6">
                        <div className="single-services">
                          <div className="icon">
                            <i className="flaticon-technical-support"></i>
                          </div>
                          <h3>Area of Expertise</h3>
                          <p>HB Mill has a know-how in different spheres – sport websites, online shops, mobile applications, real estate flash applications, lives-score functionality, Online Education Platforms, etc. See more!</p>
                          {/*
                          <Link href="/service-details">
                            <a className="read-btn">Read More</a>
                          </Link>*/}
                        </div>
                      </div>

                        {/* Pagination
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area">
                                <Link href="#">
                                    <a className="prev page-numbers">
                                        <i className="flaticon-left"></i>
                                    </a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">1</a>
                                </Link>

                                <span className="page-numbers current" aria-current="page">2</span>

                                <Link href="#">
                                    <a className="page-numbers">3</a>
                                </Link>

                                <Link href="#">
                                    <a className="page-numbers">4</a>
                                </Link>

                                <Link href="#">
                                    <a className="next page-numbers">
                                        <i className="flaticon-right"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>*/}
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

export default ServicesStyleOne;