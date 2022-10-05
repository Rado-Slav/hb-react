import React, { Component } from 'react';

class DigitalExperience extends Component {
    
    // Tab
    openTabSection = (evt, tabNmae) => {
        let i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabs_item");
        for (i = 0; i < tabcontent.length; i++) {
            tabcontent[i].classList.remove("fadeInUp");
            tabcontent[i].style.display = "none";
        }

        tablinks = document.getElementsByTagName("li");
        for (i = 0; i < tablinks.length; i++) {
            tablinks[i].className = tablinks[i].className.replace("current", "");
        }

        document.getElementById(tabNmae).style.display = "block";
        document.getElementById(tabNmae).className += " fadeInUp animated";
        evt.currentTarget.className += "current";
    }

    render() {
        return (
            <section className="tab-section">
                <div className="container">
                    <div className="section-title">
                        <h2>Outstanding Digital Experience</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt  labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
                        <div className="bar"></div>
                    </div>

                    <div className="tab schedule-list-tab">
                        <ul className="tabs">
                            <li
                                className="current"
                                onClick={(e) => this.openTabSection(e, 'tab1')}
                            >
                                <span>
                                    <i className="flaticon-analysis"></i>
                                    Real-Time Analytics
                                </span>
                            </li>
                            
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab2')}
                            >
                                <span>
                                    <i className="flaticon-optimize"></i>
                                    Pay-Per-Click
                                </span>
                            </li>
                            
                            <li
                                onClick={(e) => this.openTabSection(e, 'tab3')}
                            >
                                <span>
                                    <i className="flaticon-software"></i>
                                    Online Marketing
                                </span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab4')}
                            >
                                <span>
                                    <i className="flaticon-internet"></i>
                                    Email Marketing
                                </span>
                            </li>

                            <li
                                onClick={(e) => this.openTabSection(e, 'tab5')}
                            >
                                <span>
                                    <i className="flaticon-data"></i>
                                    Social Marketing
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
        );
    }
}

export default DigitalExperience;