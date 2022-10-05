import React, { Component } from 'react';
import Link from 'next/link';
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));
import AOS from 'aos';
import "aos/dist/aos.css";

const options = {
    loop: true,
    nav: false,
    dots: true,
    smartSpeed: 2000,
    margin: 30,
    autoplayHoverPause: true,
    autoplay: true,
    responsive: {
        0: {
            items: 2
        },
        576: {
            items: 3
        },
        768: {
            items: 4
        },
        1200: {
            items: 5
        }
    }
}

class PartnerStyleOne extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){
        this.setState({ display: true })
    }

    render() {
        return (
            <div className="partner-section ptb-100" data-aos="fade-up">

                <div className="container">
                    {this.state.display ? <OwlCarousel 
                        className="partner-slider owl-carousel owl-theme"
                        {...options}
                    >
                        <div className="partner-item">
                            <Link href="https://lespepitestech.com/">
                                <a target="_blank">
                                    <img src={require("../../images/partners/partner1.png")} alt="partner" />
                                </a>
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="https://zahnarztwik.de/">
                                <a target="_blank">
                                    <img src={require("../../images/partners/partner2.png")} alt="partner" />
                                </a>
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="https://eldorado.co/">
                                <a target="_blank">
                                    <img src={require("../../images/partners/partner3.png")} alt="partner" />
                                </a>
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="https://www.tablesoccer.org/">
                                <a target="_blank">
                                    <img src={require("../../images/partners/partner4.png")} alt="partner" />
                                </a>
                            </Link>
                        </div>
                        <div className="partner-item">
                            <Link href="https://www.britanica-edu.org/">
                                <a target="_blank">
                                    <img src={require("../../images/partners/partner5.png")} alt="partner" />
                                </a>
                            </Link>
                        </div>
                      <div className="partner-item">
                        <Link href="https://www.beckham-fragrances.com/">
                          <a target="_blank">
                            <img src={require("../../images/partners/partner6.png")} alt="partner" />
                          </a>
                        </Link>
                      </div>
                    </OwlCarousel> : ''}
                </div>
            </div>
        );
    }
}

export default PartnerStyleOne;