import React from 'react'
import { deleteJob } from '../../../../../actions/job';
import { deleteJobFromSpeciality } from '../../../../../actions/speciality';
import { connect } from 'react-redux'
import CustomItem from '../'

// TODO recentrer la description (quand on voit la liste dans /speciality/:id)
class JobItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteElement(){
        if (this.props.deleteFrom)
            this.props.delFromSpeciality(this.props.speciality.id, this.props.id);
        else
            this.props.del(this.props.id);
    }

    render() {
        const link_url = `/admin/job/${this.props.id}`

        return(
            <CustomItem editLink={link_url} deleteFunction={this.deleteElement.bind(this)} name={this.props.name}
                description={this.props.description} hiddenToggle />
        )
    }
}

const mapStateToProps = state => {
    return {
        isSpeFetching: state.speciality.isFetching,
        isJobFetching: state.jobs.isFetching,
        speciality: state.speciality.current,
        errorJob: state.jobs.error,
        errorSpe: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        del: (id) => {
            dispatch(deleteJob(id))
        },
        delFromSpeciality: (from_id, to_delete_id) => {
            dispatch(deleteJobFromSpeciality(from_id, to_delete_id))
        }
    }
}

export default (connect(mapStateToProps, mapDispatchToProps)(JobItem))
