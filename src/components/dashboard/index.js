import React from 'react'
import ConceptPicker from '../conceptpicker'

export default class Dashboard extends React.Component {
    render() {
        return(
            <div>
                <h1>Welcome on Dashboard</h1>
                <ConceptPicker />
            </div>
        )
    }
}
