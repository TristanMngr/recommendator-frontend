import React from 'react'
import style from '../style.scss'

export default class ErrorMessage extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className={style.component}>
                <span className="errors">{this.props.error}</span>
            </div>
        )
    }
}
