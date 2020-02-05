import React from 'react';
import { Link } from 'react-router-dom';

import StreamList from '../components/streams/StreamList';

class Dashboard extends React.Component{
    render(){
        return(
            <div>
                Dashboard
                <Link to="/"><button>Landing Page</button></Link>
                <StreamList />
            </div>
        )
    }
}

export default Dashboard;