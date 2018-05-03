import React from 'react'
import style from './login_style.scss'
import ReactDOM from 'react-dom'
import {Link} from "react-router-dom"

export default class Login extends React.Component {
    render() {
        return(

            <div class="login" style={style}>
                <p>The Recommendator</p>
                <Link to ="/dashboard">Dashboard</Link>
                <Route path="/dashboard" component={Dashboard}/>
            </div>
        )
    }
}
ReactDOM.render(<Login/>, document.querySelector('#root'));