import React from 'react'
import { addModuleToSpeciality } from '../../../../../actions/speciality';
import { getModules } from '../../../../../actions/module';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import AddForm from '../../add_form'

// the relation between module and speciality contains the is_main argument
const INITIAL_STATE = {
    module_id: null,
    is_main: false
}

class AddModuleToSpecialityForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount(){
        this.props.getModules(this.props.match.params.id);
    }

    updateSelect(e, value){
        this.setState({
            module_id: value.value
        })
    }

    updateCheckbox(e){
        this.setState({
            is_main: !this.state.is_main
        })
    }

    submitForm(e){
        e.preventDefault()
        this.props.add({
            speciality_id: this.props.speciality.id,
            module_id: this.state.module_id,
            is_main: this.state.is_main
        });
    }

    render() {

        const already_in_ids = this.props.speciality.specialityModules.map(
            (speMod) => {
                return speMod.module.id;
            }
        );

        // waiting for the apicall
        if (this.props.modules){
            return (
                <React.Fragment>
                    <AddForm toAdd="modules"
                        submitForm={this.submitForm.bind(this)} updateSelect={this.updateSelect.bind(this)}
                        updateCheckbox={this.updateCheckbox.bind(this)} objectsToAdd={this.props.modules}
                        selectValue="Choisir un cours" alreadyInIds={already_in_ids} isMain={this.state.is_main}
                        isFetching={this.props.isFetching} />
                    <ErrorMessage error={this.props.error} />
                </React.Fragment>
            )
        }
        else
            return "Loading ..."
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.speciality.isFetching,
        speciality: state.speciality.current,
        modules: state.modules.list,
        error: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getModules: (infos, id) => {
            dispatch(getModules())
        },
        add: (infos) => {
            dispatch(addModuleToSpeciality(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddModuleToSpecialityForm))
