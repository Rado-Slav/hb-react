import '../assets/css/bootstrap.min.css';
import '../assets/css/animate.min.css';
import '../assets/css/flaticon.css';
import '../assets/css/boxicons.min.css';
import '../assets/css/fontawesome.min.css';
import 'react-tippy/dist/tippy.css'


import '../node_modules/react-modal-video/css/modal-video.min.css';
import 'react-accessible-accordion/dist/fancy-example.css';

import '../assets/css/style.css';
import '../assets/css/responsive.css';

import App from 'next/app';
import { DefaultSeo } from 'next-seo';

import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

export default class MyApp extends App {
    static async getInitialProps ({ Component, ctx }) {
        return {
            pageProps: Component.getInitialProps
            ? await Component.getInitialProps(ctx)
            : {}
        }
    }

    // Preloader
    state = {
        loading: true
    };
    componentDidMount() {
        this.timerHandle = setTimeout(() => this.setState({ loading: false }), 2000); 
    }
    componentWillUnmount() {
        if (this.timerHandle) {
            clearTimeout(this.timerHandle);
            this.timerHandle = 0;
        }
    }
    
    render () {
        const { Component, pageProps } = this.props

        return (
            <React.Fragment>
                <DefaultSeo
                    title="HB Mill Web Development Agency"
                    description="HB Mill Ltd website. This has been built with React, Next.js and ES6+"
                    openGraph={{
                        type: 'website',
                        locale: 'en_IE',
                        url: 'https://www.hbmill.com/',
                        site_name: 'HB Mill Ltd Web Development Agency',
                    }}
                />

                <Component {...pageProps} />
                
                {/* Preloader */}
                <Loader loading={this.state.loading} />

                {/* Go Top Button */}
                <GoTop scrollStepInPx="100" delayInMs="10.50" />
            </React.Fragment>
        );
    }
}