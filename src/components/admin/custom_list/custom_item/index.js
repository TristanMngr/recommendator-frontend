import React from 'react'
import style from '../style.scss'

export default class CustomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className={style.component} >
                    <li>
                        <div className="line">
                            <div className="name">{this.props.name}</div>
                            <div className="description">{this.props.description}</div>
                            <div className="buttons">

                            </div>
                        </div>
                    </li>
            </div>
        )
    }
}
