import React from 'react'
import style from './style.scss'
import JobPicker from '../ui/jobpicker';
import ListSpecialities from '../ui/list_specialities'
import {connect} from 'react-redux'
import Menu from '../ui/menu'

class FormJob extends React.Component {
    render() {
        return(
            <div style={{display: 'flex'}}>
                <Menu />
                <div className={style.component}>
                    <h1>Découvrez quels parcours correspondent aux métiers de vos choix!</h1>
                    <JobPicker />
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

export default connect(MapStateToProps, null)(FormJob)