import React, { Component } from 'react';
import AOS from 'aos';
import "aos/dist/aos.css";

class ServiceDevelopment extends Component {

  componentDidMount() {
    // or simply just AOS.init();
    //AOS.init({
      // initialise with other settings
    //  duration : 2000
    //});
  }

    render() {
        return (
            <section className="development-area ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="development-image">
                                <img src={require("../../images/development.png")} alt="image" />
                            </div>
                        </div>

                        <div className="col-lg-6" data-aos="fade-up">
                            <div className="development-text">
                                <h3>Web & Mobile <span>Development</span></h3>
                                <div className="bar"></div>
                                <p>HBMill and the team of experts make responsive websites and apps for your business.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon">
                                    <i className="flaticon-blog"></i>
                                </div>
                                <h3>UI/UX Design</h3>
                                <p>Share your idea and we will create a whole new web vision that materializes it.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon bg-05dbcf">
                                    <i className="flaticon-setting"></i>
                                </div>
                                <h3>Web Development</h3>
                                <p>In a world of technology so dynamic we tend to use the latest modern frameworks out there.</p>
                            </div>

                            <div className="development-content">
                                <div className="icon bg-fec66f">
                                    <i className="flaticon-cellphone"></i>
                                </div>
                                <h3>Mobile & Responsive Design Development</h3>
                                <p>Mobile first strategy that will make sure your design looks great on all devices.</p>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default ServiceDevelopment;