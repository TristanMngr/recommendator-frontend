import React from 'react'
import style from './style.scss'

export default class ParcoursTile extends React.Component {
    render() {
            
            const data = this.props.data
            return(
                <div className={style.component} style={{transitionDelay: `${this.props.delay}s`}}>
                    {data.name}
                </div>
            )
    }
}
