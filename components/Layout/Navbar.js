import React, { Component } from 'react';
import Link from '../../utils/ActiveLink';
import SidebarModal from './SidebarModal';

class Navbar extends Component {

    // Sidebar Modal
    state = {
        sidebarModal: false
    };
    toggleModal = () => {
        this.setState({
            sidebarModal: !this.state.sidebarModal
        });
    }

    // Search Form
    state = {
        searchForm: false,
    };
    handleSearchForm = () => {
        this.setState( prevState => {
            return {
                searchForm: !prevState.searchForm
            };
        });
    }

    // Navbar
    _isMounted = false;
    state = {
        display: false,
        collapsed: true
    };
    toggleNavbar = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentDidMount() {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0);
    }
    componentWillUnmount() {
        this._isMounted = false;
    }

    render() {
        let { products } = this.props;
        const { collapsed } = this.state;
        const classOne = collapsed ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
        const classTwo = collapsed ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

        return (
            <React.Fragment>
               <div id="navbar" className="navbar-area fixed-top bg-white">
                    <nav className="navbar navbar-expand-md">
                        <div className="container">
                            <Link href="/">
                                <a className="navbar-brand">
                                    <img className="nav-logo" src={require("../../images/logo.png")} alt="logo" />
                                </a>
                            </Link>

                            <button
                                onClick={this.toggleNavbar}
                                className={classTwo}
                                type="button"
                                data-toggle="collapse"
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link href="/" activeClassName="active">
                                            <a className="nav-link">
                                                Home {/*<i className='bx bx-chevron-down'></i>*/}
                                            </a>
                                        </Link>

                                      {/*<ul className="dropdown-menu">

                                            <li className="nav-item">
                                                <Link href="/hb-home" activeClassName="active">
                                                    <a className="nav-link">HB Mill Home</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/" activeClassName="active">
                                                    <a className="nav-link">Home One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index2" activeClassName="active">
                                                    <a className="nav-link">Home Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index3" activeClassName="active">
                                                    <a className="nav-link">Home Three</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index4" activeClassName="active">
                                                    <a className="nav-link">Home Four</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index5" activeClassName="active">
                                                    <a className="nav-link">Home Five</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index6" activeClassName="active">
                                                    <a className="nav-link">Home Six</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/index7" activeClassName="active">
                                                    <a className="nav-link">Home Seven </a>
                                                </Link>
                                            </li>
                                            <li className="nav-item">
                                                <Link href="/index8" activeClassName="active">
                                                    <a className="nav-link">Home Eight </a>
                                                </Link>
                                            </li>
                                        </ul>*/}
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/about" activeClassName="active">
                                            <a className="nav-link">About</a>
                                        </Link>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="/services" activeClassName="active">
                                            <a className="nav-link">
                                                Services
                                            </a>
                                        </Link>


                                    </li>

                                      {/*
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/projects" activeClassName="active">
                                                    <a className="nav-link">Projects Style One</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/projects2" activeClassName="active">
                                                    <a className="nav-link">Projects Style Two</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/project-details" activeClassName="active">
                                                    <a className="nav-link">
                                                        Project Details
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                        */}

                                  {/* Remove Blog pages from menu as not going to be used in HB site
                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Pages <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">

                                            <li className="nav-item">
                                                <Link href="/pricing" activeClassName="active">
                                                    <a className="nav-link">Pricing</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/faq" activeClassName="active">
                                                    <a className="nav-link">FAQ</a>
                                                </Link>
                                            </li>
 
                                            <li className="nav-item">
                                                <Link href="/error" activeClassName="active">
                                                    <a className="nav-link">404 Error Page</a>
                                                </Link>
                                            </li>
                                            
                                            <li className="nav-item">
                                                <Link href="/coming-soon" activeClassName="active">
                                                    <a className="nav-link">Coming Soon</a>
                                                </Link>
                                            </li>
                                          {/*
                                            <li className="nav-item">
                                                <Link href="/terms-conditions" activeClassName="active">
                                                    <a className="nav-link">Terms & Conditions</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/privacy-policy" activeClassName="active">
                                                    <a className="nav-link">Privacy Policy</a>
                                                </Link>
                                            </li>

                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link href="#">
                                            <a className="nav-link">
                                                Blog <i className='bx bx-chevron-down'></i>
                                            </a>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link href="/blog" activeClassName="active">
                                                    <a className="nav-link">Blog Grid</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog2" activeClassName="active">
                                                    <a className="nav-link">Blog Right Sidebar</a>
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link href="/blog-details" activeClassName="active">
                                                    <a className="nav-link">Blog Details</a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    */}

                                    <li className="nav-item">
                                        <Link href="/contact" activeClassName="active">
                                            <a className="nav-link">Contact</a>
                                        </Link>
                                    </li>
                                </ul>

                                <div className="others-options">

                                  {/* Disable search temporary */}
                                  {/*<div className="option-item">
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className="search-btn flaticon-search"
                                            style={{
                                                display: this.state.searchForm ? 'none' : 'block'
                                            }}
                                        ></i>
                                        <i 
                                            onClick={this.handleSearchForm} 
                                            className={`close-btn flaticon-cancel ${this.state.searchForm ? 'active' : ''}`}
                                        ></i>
                                        
                                        <div 
                                            className="search-overlay search-popup"
                                            style={{
                                                display: this.state.searchForm ? 'block' : 'none'
                                            }}
                                        >
                                            <div className='search-box'>
                                                <form className="search-form">
                                                    <input className="search-input" name="search" placeholder="Search" type="text" />
                                                    <button className="search-button" type="submit">
                                                        <i className="flaticon-search"></i>
                                                    </button>
                                                </form>
                                            </div>
                                        </div>
                                    </div>*/}

                                    <div className="burger-menu" onClick={this.toggleModal}>
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>

                {/* Right Sidebar Modal */}
                <SidebarModal onClick={this.toggleModal} active={this.state.sidebarModal ? 'active' : ''} />
            </React.Fragment>
        );
    }
}

export default Navbar;
