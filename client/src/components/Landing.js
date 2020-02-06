import React from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import LandingImage from '../images/streaminglogo.png';
import StreamList from './streams/StreamList';

class Landing extends React.Component{
    render() {
        return(
            <div>
                <div className="img-container">
                    <img className="landing-image" src={LandingImage} />
                </div>
                <div>
                    <h1>
                        Welcome to PlayerBound Streams!
                    </h1>
                </div>
                <StreamList />
            </div>
        )
    }
}

export default Landing;