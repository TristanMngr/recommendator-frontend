import React from 'react'
import AnimatedInput from './input'
import style from './style.scss'
import user_icon from './user.svg'
import password_icon from './lock.svg'
import { loginUser } from '../../actions/login';
import { connect } from 'react-redux'
import history from '../../history'
import {withRouter, Redirect} from 'react-router-dom'

class Login extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            email: "",
            password: ""
        }
    }

    updateEmail(email) {
        this.setState({email})
    }

    updatePassword(password) {
        this.setState({password})
    }

    async formSubmit(e) {
        e.preventDefault()
        this.props.auth({username: this.state.email, password: this.state.password})
    }
    
    render() {
        const error = this.props.error ? <div>{this.props.error}</div> : ""
        const loader_div = (
            <div className="loader">
                <p>Loading...</p>
            </div>
        )
        const loader = this.props.isFetching ? loader_div : ""
        let component
        if  (this.props.isAuthenticated) {
            //history.push('/dashboard')
            component = <Redirect to="/dashboard"/>
        }
        else {
            component = (
        <div className={style.component}>
        <h1>The Recommendator</h1>
        {loader}
        {error}
        <form className="login-form">
            <AnimatedInput name="username" text="Username" icon={user_icon} value_callback={this.updateEmail.bind(this)}/>
            <AnimatedInput name="password" text="Password" icon={password_icon} password value_callback={this.updatePassword.bind(this)} />
            <button onClick={this.formSubmit.bind(this)} className="submit">LOGIN</button>
        </form>
        </div> )
        }

        return(

                component

            )
    }
}

const mapStateToProps = state => {
    return {
        isAuthenticated: state.auth.isAuthenticated,
        isFetching: state.auth.isFetching,
        user: state.auth.user,
        error: state.auth.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        auth: credentials => {
            dispatch(loginUser(credentials))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login))
