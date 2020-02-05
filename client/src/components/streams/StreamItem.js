import React from 'react';
import { Link } from 'react-router-dom';

class StreamItem extends React.Component {
    renderEditDeleteButtonForLoggedInUser = () => {
        if(this.props.loggedInUserId === this.props.streamUserId) {
            return(
                <div className="right floated content">
                    <Link to={`/stream/edit/${this.props.id}`} className="ui button primary">Edit</Link>
                    <Link to={`/stream/delete/${this.props.id}`} className="ui button negative">Delete</Link>
                </div>
            )
        }
    }

    render() {
        return(
            <div className="item" key={this.props.id}>
                {this.renderEditDeleteButtonForLoggedInUser()}
                <i className="large middle aligned icon camera" />
                <div className="content">
                    <Link to={`/stream/${this.props.id}`}>
                        {this.props.title}
                    </Link>
                    <div className="description">
                        {this.props.description}
                    </div>
                </div>
            </div>
        )
    }
}

export default StreamItem;