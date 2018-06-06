import React from 'react'
import style from './style.scss'
import CustomItem from './custom_item'
import SpecialityItem from './custom_item/speciality'
import ModuleItem from './custom_item/module'

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
        const SPECIALITIES = this.props.type === "specialities" && this.props.from === "db";
        const MODULES = this.props.type === "modules" && this.props.from === "db";
        const MODULES_IN_SPECIALITY = this.props.type === "modules" && this.props.from === "speciality";

        let component;

        if (SPECIALITIES) {
            component = this.props.list.sort((first, second) => first.id > second.id)
            .map(
                (elem, i) => {
                    return <SpecialityItem key={elem+i} name={elem.name}
                        description={elem.description} id={elem.id} />
                }
            );
        }
        else if (MODULES) {
            component = this.props.list.sort((first, second) => first.id > second.id)
            .map(
                (elem, i) => {
                    return <ModuleItem key={elem+i} name={elem.name}
                        description={elem.description} id={elem.id} />
                }
            );
        }
        else if (MODULES_IN_SPECIALITY) {
            component = this.props.list.sort((first, second) => first.id > second.id)
            .map(
                (elem, i) => {
                    return <ModuleItem key={elem+i} name={elem.module.name}
                        description={elem.module.description} id={elem.module.id}
                        isMain={elem.mainModule} />
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
