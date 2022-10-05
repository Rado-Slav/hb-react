import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

class WhyChooseUs extends Component {

  componentDidMount() {
    // or simply just AOS.init();
    //AOS.init({
      // initialise with other settings
    //  duration : 2000
    //});
  }

    render() {
        return (
            <section className="choose-section ptb-100" data-aos="fade-up">
                <div className="container">
                    <div className="section-title">
                        <h2>Why Choose Us</h2>
                        <p>HB Dream Mill has a strongly motivated open minded team with strategic thinking and technical knowledge for web design and development. The company specializes in the development of websites either under a CMS platform – mainly Drupal, Joomla and WordPress. We develop from small, template-like websites to bigger custom made websites that are build following the precise requirements of our clients. We have a lot of experience developing Technical Expertise.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="choose-content" data-aos="fade-up">
                                <div className="icon">
                                    <i className="flaticon-shared-folder"></i>
                                </div>
                                <h3>Consulting</h3>
                                <p>You are not able to make a decision and not sure what best works for you? We are here to help!</p>
                            </div>

                            <div className="choose-content" data-aos="fade-up">
                                <div className="icon">
                                    <i className="flaticon-blog"></i>
                                </div>
                                <h3>Data Management</h3>
                                <p>“You can have data without information, but you cannot have information without data.”</p>
                            </div>

                            <div className="choose-content" data-aos="fade-up">
                                <div className="icon">
                                    <i className="flaticon-quality"></i>
                                </div>
                                <h3>Page Ranking</h3>
                                <p>We work hard to get your page liked by Google.<br/><br/></p>
                            </div>

                            <div className="choose-content" data-aos="fade-up">
                                <div className="icon">
                                    <i className="flaticon-target"></i>
                                </div>
                                <h3>Reliability</h3>
                                <p>Services. Integrity. Reliability. Proactive professionalism.<br/></p>
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up">
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