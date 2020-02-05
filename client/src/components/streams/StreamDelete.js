import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Modal from '../Modal';
import history from '../../history';
import { getStream, deleteStream } from '../../actions/index';

class StreamDelete extends React.Component {
    componentDidMount = () => {
        this.props.getStream(this.props.match.params.id);
    }

    onDelete = () => {
        this.props.deleteStream(this.props.match.params.id);
    }

    modalActions = (
        <React.Fragment>
            <button onClick={this.onDelete} className="ui button negative">Delete</button>
            <Link to="/" className="ui button">No</Link>
        </React.Fragment>
    );

    onClickOverlay = () => {
        history.push('/');
    }

    renderContent = () => {
        if(!this.props.stream) {
            return 'Are you sure you want to delete this stream?'
        } else {
            return `Are you sure you want to delete this stream? ${this.props.stream.title}`
        }
    }

    render(){
        return(
            <div>
                <Modal 
                    title="Delete stream" 
                    content={this.renderContent()}
                    actions={this.modalActions}
                    onDismiss={this.onClickOverlay}
                />
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        stream: state.streams[ownProps.match.params.id]
    }
}

export default connect(mapStateToProps, {getStream: getStream, deleteStream: deleteStream})(StreamDelete);