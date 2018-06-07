import React from 'react'
import { updateSpeciality } from '../../../../../actions/speciality';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import PutForm from '../../put_form'


const INITIAL_STATE = (name, desc) => {
    return {
        name: name,
        description: desc,
    }
}

class SpecialityPutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE(this.props.speciality.name, this.props.speciality.description);
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
            e.preventDefault()
            if (!this.props.isFetching)
                this.props.put(this.state, this.props.speciality.id);
    }

    render() {
        return (
            <React.Fragment>
                <PutForm fields={this.state} submitForm={this.submitForm.bind(this)}
                    updateInfo={this.updateInfo.bind(this)} isFetching={this.props.isFetching} />
                <ErrorMessage error={this.props.error} />
            </React.Fragment>
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
        put: (infos, id) => {
            dispatch(updateSpeciality(infos, id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecialityPutForm))
