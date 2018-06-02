import React from 'react'
import style from '../style.scss'
import { Link } from 'react-router-dom'

export default class CustomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const link_url = `/admin/${this.props.startingUrl}/${this.props.entityId}`

        return(
            <div className={style.component} >
                    <li>
                        <div className="line">
                            <div className="name">{this.props.name}</div>
                            <div className="description">{this.props.description}</div>
                            <div className="buttons">
                                <div className="line">
                                    <Link to={link_url}>k</Link>
                                </div>
                            </div>
                        </div>
                    </li>
            </div>
        )
    }
}
