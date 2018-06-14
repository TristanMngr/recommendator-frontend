import React from 'react'
import style from '../style.scss'
import { getSpeciality } from '../../../actions/speciality';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import BigButton from '../big_button'
import Form from '../form'
import CustomList from '../custom_list'

class SpecialityPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.get(this.props.match.params.id);
    }

    render() {

        let putForm = '';
        let addModuleForm = '';
        let addJobForm = '';
        let component = '';

        //TODO mettre des titres aux listes

        if (this.props.speciality){
            putForm =
            <Form method="put" type="specialities" object={this.props.speciality} />

            addModuleForm =
            <Form method="add" type="specialities" object={this.props.speciality} />

            addJobForm =
            <Form method="add" type="jobs" object={this.props.speciality} />

            component = (
                <div>
                    <h1>{this.props.speciality.name}</h1>

                    <CustomList type="modules" list={this.props.speciality.specialityModules}
                        from="speciality" />

                    <CustomList type="jobs" list={this.props.speciality.jobs}
                        from="speciality" />

                    <div className="actions">
                        <BigButton text="Modifier les informations du parcours" hidden={putForm} />
                        <BigButton text="Ajouter un cours" hidden={addModuleForm} />
                        <BigButton text="Ajouter un métier" hidden={addJobForm} />
                    </div>
                </div>
            );

        }

        return(
            <div className={style.component}>
                {component}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.speciality.isFetching,
        speciality: state.speciality.current,
        error: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: id => {
            dispatch(getSpeciality(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecialityPage))
