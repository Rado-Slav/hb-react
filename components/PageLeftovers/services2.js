import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServicesStyleTwo from '../components/Services/ServicesStyleTwo';
import Footer from '../components/Layout/Footer';

class Services2 extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Services Two" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Services Style Two" 
                /> 
                <ServicesStyleTwo />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Services2;