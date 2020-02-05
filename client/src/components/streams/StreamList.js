import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getStreams } from '../../actions/index';
import StreamItem from './StreamItem';

class StreamList extends React.Component{
    state = {
        streamList: ['video1']
    }

    componentDidMount() {   
        this.props.getStreams();
    }

    renderListOfStreams = () => {
        return this.props.streams.map((element) => {
            return(
                <StreamItem loggedInUserId={this.props.loggedInUserId} streamUserId={element.userId} id={element.id} title={element.title} description={element.description} />
            )
        })
    }

    renderCreateButton = () => {
        if(this.props.isSignedIn) {
            return (
                <Link to="/stream/create" className="ui button primary">
                    Create a stream
                </Link>
            )
        }
    }

    render() {
        return(
            <div>
                {this.renderCreateButton()}
                <h2>Stream List</h2>
                <div className="ui celled list">
                    {this.renderListOfStreams()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    // Object.values is a native javascript function that takes in an object and takes its values and converts it into an array
    return({
        streams: Object.values(state.streams),
        loggedInUserId: state.auth.userId,
        isSignedIn: state.auth.isSignedIn
    })
}

export default connect(mapStateToProps, {getStreams: getStreams})(StreamList);