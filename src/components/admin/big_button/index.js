import React from 'react'
import style from './style.scss'

export default class BigButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showHidden: false
        }
    }

    toggleHidden(){
        this.setState({
            showHidden: !this.state.showHidden
        });
    }

    render() {

        return(
            <div className={style.component}>
                <div className="big-btn" onClick={this.toggleHidden.bind(this)}>
                    {this.props.text}
                </div>
                <div className="hidden">
                    {this.state.showHidden && this.props.hidden}
                </div>
            </div>
        )
    }
}
