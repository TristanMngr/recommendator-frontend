import React from 'react'
import { deleteJob } from '../../../../../actions/job';
import { connect } from 'react-redux'
import CustomItem from '../'

class JobItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteElement(){
        this.props.del(this.props.id);
    }

    render() {
        const link_url = `/admin/job/${this.props.id}`

        return(
            <CustomItem editLink={link_url} deleteFunction={this.deleteElement.bind(this)} name={this.props.name}
                description={this.props.description} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.jobs.isFetching,
        error: state.jobs.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        del: (id) => {
            dispatch(deleteJob(id))
        },
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(JobItem))
