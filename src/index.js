import React from 'react'
import ReactDOM from 'react-dom'
import style from './scss/app.scss'
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Dashboard from './components/dashboard'

class App extends React.Component {
    
    constructor() {
        super();

    }

    render() {
        return(
            <Router>
                <div class="app" style={style}>
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<App/>, document.querySelector('#root'));
