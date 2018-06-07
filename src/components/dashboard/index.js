import React from 'react'
import ConceptPicker from '../conceptpicker'
import { Link } from 'react-router-dom'
import LogoutButton from '../logout_button'

export default class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome on Dashboard</h1>
                <ConceptPicker />
                <Link to="/admin">test admin route</Link>
                <LogoutButton />
            </div>
        )
    }
}
