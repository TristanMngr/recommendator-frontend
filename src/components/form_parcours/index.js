import React from 'react'
import ConceptPicker from '../ui/conceptpicker'
import {connect} from 'react-redux'
import ListSpecialities from '../ui/list_specialities'
import style from './style.scss'
import Menu from '../ui/menu'

class Form1 extends React.Component {
    render() {
        return(
            <div style={{display: 'flex'}}>
                <Menu />
                <div className={style.component + " margin-menu"}>
                    <h1>Découvrez quel parcours est fait pour vous!</h1>
                    <ConceptPicker />
                    <div style={{height: 50}} />
                    <ListSpecialities specialities={this.props.specialities}/>
                </div>
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
