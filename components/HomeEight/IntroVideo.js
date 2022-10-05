import React, { Component } from 'react';
import Link from 'next/link';
import ModalVideo from 'react-modal-video';

class IntroVideo extends Component {

    state = {
        isOpen: false,
    }
    openModal = () => {
        this.setState({isOpen: true})
    }

    render() {
        return (
            <React.Fragment>
                <div className="video-section">
                    <div className="d-table">
                        <div className="d-table-cell">
                            <div className="video-content">
                                <Link href="#play-video">
                                    <a
                                        onClick={e => {e.preventDefault(); this.openModal()}}
                                        className="video-btn popup-youtube"
                                    > 
                                        <i className="flaticon-play"></i>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* If you want to change the video need to update below videoID */}
                <ModalVideo 
                    channel='youtube' 
                    isOpen={this.state.isOpen} 
                    videoId='_ysd-zHamjk' 
                    onClose={() => this.setState({isOpen: false})} 
                />
            </React.Fragment>
        );
    }
}

export default IntroVideo;