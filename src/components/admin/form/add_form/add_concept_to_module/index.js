import React from 'react'
import { addConceptToModule } from '../../../../../actions/module';
import { getConcepts } from '../../../../../actions/concept';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import AddForm from '../../add_form'

const INITIAL_STATE = {
    concept_id: null
}

class AddConceptToModuleForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE;
    }

    componentDidMount(){
        this.props.getConcepts(this.props.match.params.id);
    }

    updateSelect(e, value){
        this.setState({
            concept_id: value.value
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
            module_id: this.props.module.id,
            concept_id: this.state.concept_id,
        });
    }

    render() {

        const already_in_ids = this.props.module.concepts.map(
            (concept) => {
                return concept.id;
            }
        );

        // waiting for the apicall
        if (this.props.concepts){
            return (
                <React.Fragment>
                    <AddForm toAdd="concepts" submitForm={this.submitForm.bind(this)}
                        updateSelect={this.updateSelect.bind(this)} objectsToAdd={this.props.concepts}
                        selectValue="Choisir un concept" alreadyInIds={already_in_ids} isFetching={this.props.isFetching} />
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
        module: state.modules.current,
        concepts: state.concepts.data,
        error: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getConcepts: (infos, id) => {
            dispatch(getConcepts())
        },
        add: (infos) => {
            dispatch(addConceptToModule(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddConceptToModuleForm))
