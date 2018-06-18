import React from 'react'
import ConceptPicker from '../ui/conceptpicker'
import {connect} from 'react-redux'
import ParcoursList from './parcours_list'
class Form1 extends React.Component {
    render() {
        return(
            <div style={{margin: 'auto', width: '90vw'}}>
                <h1>Découvrez quel parcours est fait pour vous!</h1>
                <ConceptPicker />
                <ParcoursList/>
            </div>
        )
    }
}

const MapStateToProps = state =>  {
    return {
    specialities: state.speciality.list,
    }
}

export default connect(MapStateToProps, )(Form1)
