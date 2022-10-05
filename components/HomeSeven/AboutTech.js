import React, { Component } from 'react';
import Link from 'next/link';

class AboutTech extends Component {
    render() {
        return (
            <section className="tech-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="tech-content">
                                <h3>Awesome Things About Tech</h3>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed dood tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.typesetting, remaining essentially unchanged.</p>

                                <div className="tech-btn">
                                    <Link href="#">
                                        <a className="default-btn">Discover More</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="tech-image">
                                <img src={require("../../images/tech.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AboutTech;