import React, { Component } from 'react';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import AOS from 'aos';
import "aos/dist/aos.css";

const options = {
    items: 1,
    loop: true,
    nav: false,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    smartSpeed: 1000,
    margin: 0,
    navText: [
        "<i class='flaticon-left'></i>",
        "<i class='flaticon-right'></i>"
    ],
}

class FeedbackStyleOne extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true })
        //AOS.init({
        // initialise with other settings
        //duration : 2000
        // });
    }

    render() {
        return (
            <section className="clients-section" data-aos="fade-up">
                <div className="container">
                    <div className="section-title">
                        <h2>Our testimonials.</h2>
                        <div className="bar"></div>
                    </div>

                    {this.state.display ? <OwlCarousel 
                        className="clients-slider owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="clients-item">
                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>

                            <p>Remarkable results that exceeded our expectations. The project was finished on time ...</p>

                            <div className="clients-content">
                                <h3>Svetoslav Marinov</h3>
                                <span>Manager of Euro Projects</span>
                            </div>
                        </div>

                        <div className="clients-item">
                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>

                            <p>“The easiest communication with this team and I’m not exaggerating. Everything I explain via mail is 95% done, the other 5%, if something misunderstood left, I mark it and it is all clear. My website is just the way I imagine it. It is so easy for me that I don’t have to check when the domain expire, I just receive proform, I pay, then the invoice and it’s forgotten. As a whole: I want to do my main job and the website be comfortable for the clients and works for me – so I’ve got it!”</p>

                            <div className="clients-content">
                                <h3>Miglena Eftimova</h3>
                                <span>Manager of Mig03</span>
                            </div>
                        </div>

                      {/*<div className="clients-item">
                            <div className="icon">
                                <i className="flaticon-left-quotes-sign"></i>
                            </div>

                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                            <div className="clients-content">
                                <h3>Edmond Halley</h3>
                                <span>Web Designer</span>
                            </div>
                        </div>*/}
                    </OwlCarousel> : ''}
                </div>
            </section>
        );
    }
}

export default FeedbackStyleOne;