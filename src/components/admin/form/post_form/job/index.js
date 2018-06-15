import React from 'react'
import { addJobToList } from '../../../../../actions/job';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import ErrorMessage from '../../error_message'
import PostForm from '../../post_form'

const INITIAL_STATE = {
    name: '',
    description: ''
};

class JobPostForm extends React.Component {

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
        isFetching: state.jobs.isFetching,
        error: state.jobs.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (infos) => {
            dispatch(addJobToList(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobPostForm))
