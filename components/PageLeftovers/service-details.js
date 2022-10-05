import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import ServiceDetailsContent from '../components/Services/ServiceDetailsContent';
import Footer from '../components/Layout/Footer';

class ServiceDetails extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Service Details" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Service Details" 
                /> 

                <ServiceDetailsContent />
         
                <Footer />
            </React.Fragment>
        );
    }
}

export default ServiceDetails;