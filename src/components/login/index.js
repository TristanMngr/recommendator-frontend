import React from 'react'
import style from './login_style.scss'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import LBTransformer from "../../img/Black_transformer.png";
import RBTransformer from "../../img/right_Black_transformer.png";
import Logo from "../../img/White_transformer.png";


export default class Login extends React.Component {
    render() {
        return(
            <div class="login" style={style}>

                <div class="space_between">
                    <img class="side" src={LBTransformer} />

                    <div class="down">
                        <div id="center">
                            <img class ="weight" src={Logo} />
                        </div>

                        <div class="space">
                            <p id="center" class="title">THE RECOMMENDATOR</p>
                        </div>

                        <form class="column">
                            <label id="center" class="down">
                                <input class="input" type="text" name="email" placeholder="E-mail"/>
                            </label>
                            <label id="center" class="space">
                                <input class="input" type="text" name="password" placeholder="Password"/>
                            </label>
                            <input id="down" class ="button" type="submit" value="Se connecter" />
                        </form>
                    </div>
                    <img class="side" src={RBTransformer} />
                </div>
            </div>
            )
    }
}
