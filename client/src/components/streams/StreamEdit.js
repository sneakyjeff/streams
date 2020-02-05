import React from 'react';
import { connect } from 'react-redux';
import { editStream, getStream } from '../../actions/index';
import StreamFrom from './StreamForm';
import history from '../../history';

class StreamEdit extends React.Component{
    componentDidMount() {
        this.props.getStream(this.props.match.params.id);
    }

    onSubmit = (formValues) => {
        this.props.editStream(this.props.match.params.id, formValues);
    }

    onClickOverlay = () => {
        history.push('/');
    }

    render() {
        let initialStreamFormValues = () => {
            if(!this.props.stream) {
                return null
            } else {
                return {
                    'title': this.props.stream.title, 
                    'description': this.props.stream.description
                }
            }
        }

        return(
            <div>  
                <div onClick={this.onClickOverlay} className="ui dimmer modals visible active">
                    <div onClick={(e) => {e.stopPropagation()}} className="ui standard modal visible active">
                        <div className="header">
                            <h3>Edit Your Stream</h3>
                       </div>
                       <div className="content">
                            <StreamFrom initialValues={initialStreamFormValues()} onSubmit={this.onSubmit} />
                       </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return({
        stream: state.streams[ownProps.match.params.id]
    })
}

export default connect(mapStateToProps, {editStream: editStream, getStream: getStream})(StreamEdit);