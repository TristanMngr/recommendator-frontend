import React from 'react'
import FontAwesome from 'react-fontawesome'

export default class PostButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div onClick={this.props.onClick}>
                {this.props.text}
                <FontAwesome name="plus-circle" />
            </div>
        )
    }
}
