import React, { Component } from 'react';
import Link from 'next/link';

class AppUser extends Component {
    render() {
        return (
            <section className="customer-section ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="customer-content">
                                <h3>20k Customer Use App now</h3>
                                <div className="bar"></div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley</p>

                                <div className="customer-btn">
                                    <Link href="#">
                                        <a className="default-btn">App Store</a>
                                    </Link>
                                    <Link href="#">
                                        <a className="optional-btn">Play Store</a>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="customer-image">
                                <img src={require("../../images/customer.png")} alt="image" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default AppUser;