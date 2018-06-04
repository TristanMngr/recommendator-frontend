import React from 'react'
import style from '../style.scss'
import { Link } from 'react-router-dom'
import FontAwesome from 'react-fontawesome'

export default class CustomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let url

        switch (this.props.type) {
            case "specialities":
                url = "speciality"
                break;
            case "modules":
                url = "module"
        }

        const link_url = `/admin/${url}/${this.props.entityId}`

        return(
            <div className={style.component} >
                    <li>
                        <div className="line">
                            <div className="name">{this.props.name}</div>
                            <div className="description">{this.props.description}</div>
                            <div>
                                <div className="buttons">
                                    <Link to={link_url}>Modifier</Link>
                                    <div className="trash-btn">
                                        <FontAwesome name="trash-alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
            </div>
        )
    }
}
