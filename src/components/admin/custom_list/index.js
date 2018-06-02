import React from 'react'
import style from './style.scss'
import CustomItem from './custom_item'
import PostButton from '../post_button'
import Form from '../form'

export default class CustomList extends React.Component {
    constructor(props) {
        super(props)
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
        const component = this.props.list ?
        this.props.list.map(
            (elem, i) => {
                return <CustomItem key={i} type={this.props.type}
                    name={elem.name} description={elem.description} entityId={elem.id}/>
            }
        ) :
        '';


        return(
            <div className={style.component} >
                <PostButton onClick={this.toggleHidden.bind(this)} />
                {this.state.showHidden && <Form method="post" type={this.props.type} />}
                <ul>
                    {component}
                </ul>
            </div>
        )
    }
}
