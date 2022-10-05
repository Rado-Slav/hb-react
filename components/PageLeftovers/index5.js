import React, { Component } from 'react';
import NavbarStyleTwo from '../components/Layout/NavbarStyleTwo';
import Banner from '../components/HomeFive/Banner';
import Features from '../components/HomeFive/Features';
import HowItWorks from '../components/HomeFive/HowItWorks';
import ModernFeatures from '../components/HomeFive/ModernFeatures';
import Services from '../components/HomeFive/Services';
import AppUser from '../components/HomeFive/AppUser';
import FunFacts from '../components/HomeFive/FunFacts';
import TeamStyleTwo from '../components/Common/TeamStyleTwo';
import FeedbackStyleTwo from '../components/Common/FeedbackStyleTwo';
import BlogPost from '../components/Common/BlogPost';
import Footer from '../components/Layout/Footer';

class Index5 extends Component {
    render() {
        return (
            <React.Fragment>
                <NavbarStyleTwo />
                <Banner />
                <Features />
                <HowItWorks />
                <ModernFeatures />
                <Services />
                <AppUser />
                <FunFacts />
                <TeamStyleTwo />
                <FeedbackStyleTwo />
                <BlogPost />
                <Footer />
            </React.Fragment>
        );
    }
}

export default Index5;