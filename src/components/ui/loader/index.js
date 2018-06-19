import React from 'react'
import style from './style.scss'

const Loader = props => {
    return(
        <div className={style.component}>
            <div className="double-bounce1"></div>
            <div className="double-bounce2"></div>
        </div>
    )
}

export default Loader;
