/*
 * For mor information on how to implement the componentDidMount() method visit:
 * https://developers.google.com/identity/protocols/OAuth2UserAgent
 */

import React from 'react';
import { connect } from 'react-redux';
import { attemptGoogleSignIn, attemptGoogleSignOut } from '../../actions/index';

class GoogleAuth extends React.Component {
    // state = {
    //     isSignedIn: null,
    //     auth: {}
    // }

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '671292477582-37pr49ktq47c60h7lnupmfviu9ku7nnu.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState({ isSignedIn: this.auth.isSignedIn.get() })
                
                this.onAuthChange(this.auth.isSignedIn.get());
                // This listen function comes from the gapi object. Passed in true/false value into function
                this.auth.isSignedIn.listen(this.onAuthChange);
            });

        });
    }

    onAuthChange = (isSignedIn) => {
        // this.setState({ isSignedIn: this.auth.isSignedIn.get() });
        if(isSignedIn) {
            this.props.attemptGoogleSignIn(this.auth.currentUser.get().getId());
        } else {
            this.props.attemptGoogleSignOut();
        }
    }

    onClickLogin = () => {
        this.auth.signIn();
    }

    onClickLogout = () => {
        this.auth.signOut();
    }

    renderAuthButton = () => {
        if(this.props.isSignedIn === null) {
            return null
        }
        else if(this.props.isSignedIn !== true) {
            return <button className="ui red google button" onClick={this.onClickLogin}>Log In With Google</button>
        }
        return <button className="ui red google button" onClick={this.onClickLogout}>Logout</button>
    }

    render() {
        // console.log(this.state.isSignedIn);
        return(
            <div className="ui item">{this.renderAuthButton()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return({
        isSignedIn: state.auth.isSignedIn
    })
}

export default connect(mapStateToProps, {attemptGoogleSignIn, attemptGoogleSignOut})(GoogleAuth);