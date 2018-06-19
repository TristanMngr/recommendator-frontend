import React from 'react'
import style from './style.scss'

export default class ListJobs extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {


        return (
            <div className={style.component}>
                <p>{this.props.data.name} : {this.props.data.description}</p>
            </div>
        );
    }
}
