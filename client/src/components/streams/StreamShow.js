import React from 'react';
import flv from 'flv.js';
import { connect } from 'react-redux';
import { getStream } from '../../actions/index';
import "./StreamShow.css";

class StreamShow extends React.Component {
    constructor(props) {
        super(props)

        this.videoRef = React.createRef();
    }

    componentDidMount = () => {
        console.log(this.videoRef);
        this.props.getStream(this.props.match.params.id);
        this.buildPlayer();
    }

    componentDidUpdate = () => {
        this.buildPlayer();
    }

    componentWillUnmount = () => {
        this.player.destroy();
    }

    buildPlayer = () => {
        if(this.player || !this.props.stream) {
            return;
        } else {
            this.player = flv.createPlayer({
                type: 'flv',
                url: `http://localhost:8000/live/${this.props.match.params.id}.flv`
            });
            this.player.attachMediaElement(this.videoRef.current);
            this.player.load();
        }
    }

    renderStreamContent = () => {
        if(!this.props.stream) {
            return (
                <div>Loading ...</div>
            )
        }
        return (
            <div>
                <video className="video-player" controls={true} ref={this.videoRef} />
                {this.props.stream.title}
                {this.props.stream.description}
            </div>
        )
    }

    render(){
        console.log(this.props.stream);
        console.log(this.props);
        return(
            <div>
                StreamShow
                {this.renderStreamContent()}
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
}

export default connect(mapStateToProps, {getStream: getStream})(StreamShow);