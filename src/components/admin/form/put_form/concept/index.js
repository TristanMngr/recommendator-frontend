import React from 'react'
import { updateConcept } from '../../../../../actions/concept';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import PutForm from '../../put_form'


const INITIAL_STATE = (name, desc) => {
    return {
        name: name,
    }
}

class ConceptPutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE(this.props.concept.name);
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
            e.preventDefault()
            if (!this.props.isFetching)
                this.props.put(this.state, this.props.concept.id);
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
        isFetching: state.concepts.isFetching,
        concept: state.concepts.current,
        error: state.concepts.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        put: (infos, id) => {
            dispatch(updateConcept(infos, id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConceptPutForm))
