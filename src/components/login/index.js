import React from 'react'
import style from './login_style.scss'
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import LBTransformer from "../../img/Black_transformer.png";
import RBTransformer from "../../img/right_Black_transformer.png";
import Logo from "../../img/White_transformer.png";


export default class Login extends React.Component {
    render() {
        return(
            <div class="login" style={style}>


                <div class="space_between">
                    <img src={LBTransformer} />
                    <div>
                        <p>The Recommendator</p>
                        <img class ="weight" src={Logo} />
                    </div>
                    <img src={RBTransformer} />
                </div>

                <Link to ="/dashboard">Dashboard</Link>
            </div>
            )
    }
}
