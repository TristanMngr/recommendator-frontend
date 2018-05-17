import React from 'react'
import style from './style.scss'
export default class AnimatedInput extends React.Component {

    constructor(props) {
        super(props)
        this.state = {active: false, completed: false}
    }

    focusClass() {
        this.setState({active: true})
    }

    checkEmpty() {
        if (this.input.value !== "") {
            this.setState({active: true, completed: true})
        }
        else {
            this.setState({active: false, completed: false})
        }
    }

    updateInput(e) {
        this.props.value_callback(this.input.value)
    }

    render() {
        const type = this.props.password ? "password" : "text"
        const text = this.props.text ? this.props.text : this.props.name
        const active = this.state.active ? 'active' : ''
        const completed = this.state.completed ? 'completed' : ''
        const classes = active + ' ' + completed
        const icon = this.props.icon ? <img alt="icon" src={this.props.icon} className="icon"/> : ''
        return(
            <div className={style.component + " " + classes}>
                {icon}
                <input className={classes} type={type} name={this.props.name} id={this.props.name} ref={(el) => this.input = el} onFocus={() => this.focusClass()} onBlur={() => this.checkEmpty()} onChange={this.updateInput.bind(this)} />
                <label className={classes} htmlFor={this.props.name}>{text}</label>
                <div className="slide-up"/>
            </div>
        )
    }
}