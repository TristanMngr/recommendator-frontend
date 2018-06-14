import React from 'react'
import style from './style.scss'
import SpecialityItem from './custom_item/speciality'
import ModuleItem from './custom_item/module'
import ConceptItem from './custom_item/concept'
import JobItem from './custom_item/job'

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
        const CONCEPTS = this.props.type === "concepts" && this.props.from === "db";
        const CONCEPTS_IN_MODULE = this.props.type === "concepts" && this.props.from === "module";
        const JOBS = this.props.type === "jobs" && this.props.from === "db";

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
        else if (CONCEPTS || CONCEPTS_IN_MODULE) {
            component = this.props.list.sort((first, second) => first.id > second.id)
            .map(
                (elem, i) => {
                    return <ConceptItem key={elem+i} name={elem.name} id={elem.id}
                        deleteFrom={CONCEPTS_IN_MODULE} />
                }
            );
        }
        else if (JOBS) {
            component = this.props.list.sort((first, second) => first.id > second.id)
            .map(
                (elem, i) => {
                    return <JobItem key={elem+i} name={elem.name} id={elem.id}
                        description={elem.description} />
                }
            )

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
