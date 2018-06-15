import React from 'react'
import { Button } from 'semantic-ui-react'
import style from './style.scss'

export default class Concept extends React.Component {
    constructor(props) {
        super(props)
        this.state = {active: false}
    }
    async switch() {
        await this.setState({active: !this.state.active})
        this.props.callback(this.props.id)
    }
    render() {
        const className = this.state.active ? `${style.component} active` : `${style.component}`
        return (
        <Button className={className} onClick={() => this.switch()}>{this.props.text}</Button>
        )   
    }
}