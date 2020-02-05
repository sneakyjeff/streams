import React from 'react';
import { connect } from 'react-redux';
import { getStream } from '../../actions/index';

class StreamShow extends React.Component {
    componentDidMount = () => {
        this.props.getStream(this.props.match.params.id);
    }

    renderStreamContent = () => {
        if(!this.props.stream) {
            return (
                <div>Loading ...</div>
            )
        }
        return (
            <div>
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