import React from 'react'
import ConceptPicker from '../ui/conceptpicker'
import {connect} from 'react-redux'
import ParcoursList from './parcours_list'
class Form1 extends React.Component {
    render() {
        return(
            <div>
                <h1>Découvrez quel parcours est fait pour vous!</h1>
                <ConceptPicker />
                <ParcoursList specialities={this.props.specialities}/>
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
