import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import BannerSlider from '../components/HomeOne/BannerSlider';
import ServicesNew from '../components/HomeOne/ServicesNew';
import ServiceDevelopment from '../components/HomeOne/ServiceDevelopment';
import WhyChooseUs from '../components/HomeOne/WhyChooseUs';
import FeedbackStyleOne from '../components/Common/FeedbackStyleOne';
import Map from '../components/Map/Map';
import Footer from '../components/Layout/Footer';
import PartnerStyleOne from '../components/Common/PartnerStyleOne'
import AOS from "aos";
import "aos/dist/aos.css";


class Index extends Component {

  componentDidMount() {
    AOS.init();
  }

  componentWillReceiveProps() {
    AOS.refresh();
  }

    render() {
        return (
            <React.Fragment>
                <Navbar />
                <BannerSlider />
                <ServicesNew />
                <Map />
                <PartnerStyleOne />
                <ServiceDevelopment />
                <WhyChooseUs />
                <FeedbackStyleOne />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index;