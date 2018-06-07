import React from 'react'
import { addModuleToList } from '../../../../../actions/module';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import PostForm from '../../post_form'

const INITIAL_STATE = {
    name: '',
    description: '',
};

class ModulePostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = INITIAL_STATE
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
        e.preventDefault()
        this.props.post(this.state);
        this.setState(INITIAL_STATE);
    }

    render() {

        return(
            <React.Fragment>
                <PostForm fields={this.state} submitForm={this.submitForm.bind(this)}
                    updateInfo={this.updateInfo.bind(this)} isFetching={this.props.isFetching} />
                <ErrorMessage error={this.props.error} />
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.modules.isFetching,
        error: state.modules.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (infos) => {
            dispatch(addModuleToList(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModulePostForm))
