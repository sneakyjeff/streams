import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import GoogleAuth from '../auth/GoogleAuth';

class NavBarHeader extends React.Component{
    renderSignedInUserNavBar = () => {
        if(this.props.isSignedIn) {
            return(
                <div className="ui secondary menu">
                    <Link to="/dashboard"><li className="active item">
                        Home
                    </li></Link>

                    <Link to="/stream/create"><li className="active item">
                        Create
                    </li></Link>
                    
                    <Link to="/stream/edit"><li className="active item">
                        Edit
                    </li></Link>

                    <Link to="/stream/delete"><li className="active item">
                        Delete
                    </li></Link>

                    <Link to="/stream/show"><li className="active item">
                        Show
                    </li></Link>

                    <div className="right menu">
                        <GoogleAuth />
                    </div>
                </div>
            )
        } else {
            return (
                <div className="ui secondary menu">
                    <div className="right menu">
                        <GoogleAuth />
                    </div>
                </div>
            )
        }
    }

    render() {
        return(
            <div>
                {this.renderSignedInUserNavBar()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        isSignedIn: state.auth.isSignedIn
    })
}

export default connect(mapStateToProps)(NavBarHeader);