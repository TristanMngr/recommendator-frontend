import React from 'react'
import {Link} from 'react-router-dom'

export default class Error404 extends React.Component {
    render() {
        return(
            <div style={{display: 'flex',flexDirection: 'column', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', minWidth: '100vw'}}>
                <h1 style={{fontSize: '12em'}}>404</h1>
                <p>La page est introuvable</p>
                <Link to="/">Go back!</Link>
            </div>
        )
    }
}