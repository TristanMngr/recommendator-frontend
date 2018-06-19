import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import LogoutButton from '../ui/logout_button'
import CustomList from '../admin/custom_list'
import style from './style.scss'
import DashboardTile from './dashboard_tile'
import Menu from '../ui/menu'
class Dashboard extends React.Component {
    render() {
        
        const list = this.props.specialities ? this.props.specialities : []  
        return(
            <div style={{display: 'flex'}}>
                <Menu />
                <div className={style.component}>
                    <h1>Welcome on Dashboard</h1>
                    <div style={{height: 20}} />
                    <DashboardTile to="/discover/parcours" title="Découvrez quel parcours est fait pour vous!" />
                    <DashboardTile to="/discover/jobs" title="Découvrez quels parcours correspondent aux métiers de vos choix!" />
                    <DashboardTile to="/admin" title="Administrer le site" />
                    <LogoutButton />
                </div>
            </div>
        )
    }
}



export default Dashboard