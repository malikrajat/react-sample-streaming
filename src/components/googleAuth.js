import React, { Component } from 'react';
import {connect} from 'react-redux';
import { signIn, signOut } from '../actions';

class googleAuth extends Component {
    state = { isSignedIn: null};
    componentDidMount () {
        window.gapi.load('client:Auth2', () => {
            window.gapi.client.init({
                clientId: '680620483327-u0v5q87jnchkrngvkt84svvmk0n5o6mh.apps.googleusercontent.com',
                scope: 'email'
            }).then( () => {
                debugger;
                this.auth = window.gapi.auth2.getAuthInstance();
                // this.setState ( {isSignedIn: this.auth.isSignedIn.get()})
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }
    onAuthChange (isSignedIn) {
        // this.setState({ isSignedIn : this.auth.isSignedIn.get() });
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }
    onSignInClick () {
        this.auth.signIn();
    }
    onSignOutClick () {
        this.auth.signOut();
    }
    renderAuthButton () {
         if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                <i className="google icon"/>
                    Sign Out
                </button>
            );
        } else {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                <i className="google icon"/>
                    Sign In With Google
                </button>
            );
        }
    }
    render () {
        return (
            <div>{this.renderAuthButton()}</div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}
export default connect( mapStateToProps , {
    signIn, 
    signOut
})(googleAuth);