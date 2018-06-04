import React from 'react'
import style from './style.scss'
import CustomItem from './custom_item'

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
        let component;
        if (this.props.list && !this.props.specialityModules) {
            component = this.props.list.map(
                (elem, i) => {
                    return <CustomItem key={this.props.type+elem.id} type={this.props.type}
                        name={elem.name} description={elem.description} entityId={elem.id}/>
                }
            );
        }
        else if (this.props.list && this.props.specialityModules) {
            component = this.props.list.map(
                (elem, i) => {
                    return <CustomItem key={this.props.type+elem.module.id} type={this.props.type}
                        name={elem.module.name} description={elem.module.description} entityId={elem.module.id} deleteFrom={this.props.deleteFrom}/>
                }
            );
        }

        return(
            <div className={style.component} >
                <ul>
                    {component}
                </ul>
            </div>
        )
    }
}
