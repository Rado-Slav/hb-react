import React, { Component } from 'react';
import Navbar from '../components/Layout/Navbar';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/Layout/Footer';

class TermsConditions extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar />
                <PageBanner 
                    pageTitle="Terms & Conditions" 
                    homePageUrl="/" 
                    homePageText="Home" 
                    activePageText="Terms & Conditions" 
                /> 

                <div className="conditions-section ptb-100">
                    <div className="container">
                        <div className="single-privacy">
                            <h3 className="mt-0">Welcome to HB Mill Terms & Conditions</h3>
                            <p>All website content needs to be provided by the client within 2 weeks of payment of a deposit to commence a project. Should the client delay issuing Web Agency Network the content required for the project, Web Agency Network reserves the right to renegotiate the cost of the project as well as the expected completion date. In such instances, Web Agency Network will request any outstanding payments to be settled before the continuation of the project. CMS websites require updates to plugins and themes. If the client has not opted for monthly maintenance, such updates and the cost thereof, remain the responsibility of the client. However, plugins and themes may be quoted for separately if required. Additional pages, images and revisions on projects above the scope of work agreed above will attract additional charges. All E-commerce websites will come with Flat Rate shipping. It is the client’s responsibility to negotiate shipping costs with his/her preferred supplier and to provide Web Agency Network with specified flat rates. Alternative Shipping Plugin purchase and configuration fall out of the scope of work, unless specifically quoted for. All e-commerce website will have Payfast and EFT payment as the default payment options. It remains the responsibility of the client to sign up with Payfast and to provide us with their login details. The client agrees that all content provided by the client including articles, website wording, graphics and videos are owned by the client and free of any copyright infringement. Landing pages, unless otherwise stated are created using a specific Landing page platform. If you want a copy of this page we can provide it, but it will only be reactivated using a version of the same platform, as the code is customised for use on this platform. Viruses & Outdated Websites, Web Agency Network makes every effort to take security precautions on our Clients websites, this includes the relevant security plugins which keeps its servers secure, wherever possible. However we cannot guarantee the prevention of hacks, viruses or unexpected data deletion and cannot be held liable for any such damages as a result.
                              Web Agency Network cannot be responsible for any websites that have stopped working or have become faulty over time due to the website becoming “outdated”. Outdated websites can be affected due to many aspects, such as new browser software, outdated web code, etc. Web Agency Network cannot be expected to keep your website updated in every aspect without being compensated to do so. In this situation the Client may opt to have their website redeveloped or select one of our subscription based website packages where Web Agency Network is responsible for updating this on your website at all times.</p>
                        </div>
                    </div>
                </div>
                
                <Footer />
            </React.Fragment>
        );
    }
}

export default TermsConditions;