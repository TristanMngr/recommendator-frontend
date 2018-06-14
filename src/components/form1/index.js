import React from 'react'
import ConceptPicker from '../conceptpicker'
export default class Form1 extends React.Component {
    render() {
        return(
            <div>
                <h1>Découvrez quel parcours est fait pour vous!</h1>
                <ConceptPicker />
            </div>
        )
    }
}