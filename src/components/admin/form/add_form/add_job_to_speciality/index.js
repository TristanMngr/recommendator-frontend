import React from 'react'
import { addJobToSpeciality } from '../../../../../actions/speciality';
import { getJobs } from '../../../../../actions/job';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import AddForm from '../../add_form'

// the relation between job and speciality contains the is_main argument
const INITIAL_STATE = {
    job_id: null,
    is_main: false
}

class AddJobToSpecialityForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount(){
        this.props.getJobs(this.props.match.params.id);
    }

    updateSelect(e, value){
        this.setState({
            job_id: value.value
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
            job_id: this.state.job_id,
            is_main: this.state.is_main
        });
    }

    render() {

        const already_in_ids = this.props.speciality.jobs.map(
            (job) => {
                return job.id;
            }
        );

        // waiting for the apicall
        if (this.props.jobs){
            return (
                <React.Fragment>
                    <AddForm toAdd="jobs"
                        submitForm={this.submitForm.bind(this)} updateSelect={this.updateSelect.bind(this)}
                        updateCheckbox={this.updateCheckbox.bind(this)} objectsToAdd={this.props.jobs}
                        selectValue="Choisir un métier" alreadyInIds={already_in_ids}
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
        jobs: state.jobs.list,
        error: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getJobs: (infos, id) => {
            dispatch(getJobs())
        },
        add: (infos) => {
            dispatch(addJobToSpeciality(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddJobToSpecialityForm))
