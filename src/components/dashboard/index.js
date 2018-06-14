import React from 'react'
import ConceptPicker from '../conceptpicker'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import LogoutButton from '../ui/logout_button'
import CustomList from '../admin/custom_list'

class Dashboard extends React.Component {
    render() {
        
        const list = this.props.specialities ? this.props.specialities : []  
        return(
            <div>
                <h1>Welcome on Dashboard</h1>

                <Link to="/admin">test admin route</Link>
                
                <LogoutButton />
            </div>
        )
    }
}

const MapStateToProps = state =>  {
    return {
    specialities: state.speciality.list,
    }
}

export default connect(MapStateToProps, null)(Dashboard)