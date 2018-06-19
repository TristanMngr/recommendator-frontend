import React from 'react'
import style from './style.scss'

export default class ProgressBar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {value: 0}
    }
    componentDidMount() {
        setTimeout(() => 
        {
            this.setState({value: this.props.value})
        }, 100)
    }
    render() {
        return(
            <div className={style.component}>
                <div style={{width: `${this.state.value}%`}} className="progress" />
            </div>
        )
    }
}