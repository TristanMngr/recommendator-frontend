import React from 'react'
import {Link} from 'react-router-dom'
import style from './style.scss'

export default class DashboardTile extends React.Component {
    render() {
        return(
            <Link to={this.props.to}>
                <div className={style.component}>
                    <p>{this.props.title}</p>
                </div>
            </Link>
        )
    }
}