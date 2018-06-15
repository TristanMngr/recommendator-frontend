import React from 'react'
import { logoutUser } from '../../../actions/login'
import { connect } from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'

class LogoutButton extends React.Component {

    constructor(props) {
        super(props);
    }

    logOut(){
        this.props.logOut();
    }

    render() {
        return (
            <button onClick={this.logOut.bind(this)}>deconnexion</button>
        )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        logOut: () => {
            dispatch(logoutUser())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogoutButton))
