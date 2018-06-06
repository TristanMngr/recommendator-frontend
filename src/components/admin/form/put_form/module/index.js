import React from 'react'
import { updateModule } from '../../../../../actions/module';
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

class ModulePutForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE(this.props.module.name, this.props.module.description);
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
            e.preventDefault()
            if (!this.props.isFetching)
                this.props.put(this.state, this.props.module.id);
    }

    render() {
        return (
            <React.Fragment>
                <PutForm type="modules" fields={this.state} submitForm={this.submitForm.bind(this)}
                    updateInfo={this.updateInfo.bind(this)} isFetching={this.props.isFetching} />
                <ErrorMessage error={this.props.error} />
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.modules.isFetching,
        module: state.modules.current,
        error: state.modules.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        put: (infos, id) => {
            dispatch(updateModule(infos, id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModulePutForm))
