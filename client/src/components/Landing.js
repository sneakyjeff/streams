import React from 'react';
import { Link } from 'react-router-dom';

import StreamList from './streams/StreamList';

class Landing extends React.Component{
    render() {
        return(
            <div>
                Landing Page
                <Link to="/dashboard"><button>Dashboard</button></Link>
                <StreamList />
            </div>
        )
    }
}

export default Landing;