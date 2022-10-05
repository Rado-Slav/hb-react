import React, { Component } from 'react';
import Link from 'next/link';
import VisibilitySensor from "react-visibility-sensor";
import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(import('react-owl-carousel3'));

const options = {
    loop: true,
    margin: 0,
    nav: true,
    mouseDrag: true,
    items: 1,
    dots: true,
    autoplay: true,
    smartSpeed: 500,
    autoplayHoverPause: true,
    navText: [
        "<i class='bx bx-chevron-left'></i>",
        "<i class='bx bx-chevron-right'></i>",
    ],
}

class BannerSlider extends Component {

    state = { 
        display: false    
    };

    componentDidMount(){ 
        this.setState({ display: true }) 
    }

    render() {
        return (
            <div className="main-banner-area">
                {this.state.display ? <OwlCarousel 
                    className="home-sliders owl-carousel owl-theme" loop={true}
                    {...options}
                >
                    <div className="home-item item-bg1">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInLeft" : ''
                                                    }
                                                >
                                                    Web Design & Development Outsorce Agency
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInRight" : ''
                                                    }
                                                >
                                                  Good web design of a website is always determinant for a successful business.
                                                </p>
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInRight" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="default-btn">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInRight" : ''}`
                                                }
                                            >
                                                <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                <img src={require("../../images/home-one/home-1-img1.png")} className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg2">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInLeft" : ''
                                                    }
                                                >
                                                    Software & Development
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInRight" : ''
                                                    }
                                                >
                                                  Creating dynamic modern websites and applications for your needs.
                                                </p>
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInRight" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="default-btn">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInRight" : ''}`
                                                }
                                            >
                                                <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                <img src={require("../../images/home-one/home-1-img2.png")} className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>

                    <div className="home-item item-bg3">
                        <div className="d-table">
                            <div className="d-table-cell">
                                <VisibilitySensor>
                                    {({ isVisible }) => (
                                        <div className="container mt-50">
                                            <div className="main-banner-content">
                                                <h1
                                                    className={
                                                        isVisible ? "animated fadeInLeft" : ''
                                                    }
                                                >
                                                    Project Management & Quality Assurance
                                                </h1>

                                                <p
                                                    className={
                                                        isVisible ? "animated fadeInRight" : ''
                                                    }
                                                >
                                                  We do our best to optimize not only our time but YOUR time as well!
                                                </p>
                                                
                                                <div 
                                                    className={
                                                        `banner-btn ${isVisible ? "animated fadeInRight" : ''}`
                                                    }
                                                >
                                                    <Link href="/contact">
                                                        <a className="default-btn">Get Started</a>
                                                    </Link>
                                                </div>
                                            </div>
                                            
                                            <div 
                                                className={
                                                    `banner-image ${isVisible ? "animated fadeInRight" : ''}`
                                                }
                                            >
                                                <img src={require("../../images/home-one/home-1-shape.png")} alt="Image" />
                                                <img src={require("../../images/home-one/home-1-img3.png")} className="banner-img" alt="image" />
                                            </div>
                                        </div>
                                    )}
                                </VisibilitySensor>
                            </div>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        );
    }
}

export default BannerSlider;