import React from 'react';
import { connect } from 'react-redux';
import { createStream } from '../../actions/index';
import StreamFrom from './StreamForm';

class StreamCreate extends React.Component{
    onSubmit = (formValues) => {
        this.props.createStream(formValues);
    }

    render() {
        return(
            <div>
                <h3>Create A Stream</h3>
                <StreamFrom onSubmit={this.onSubmit} />
            </div>
        )
    }
}

export default connect(null, {createStream: createStream})(StreamCreate);