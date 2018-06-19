import React from 'react'
import {connect} from 'react-redux'
import {getJobs} from '../../../actions/job'
import {clearCurrentSpecialities} from '../../../actions/speciality'
import {getForm2Responses} from '../../../actions/form'
import {Button} from 'semantic-ui-react'

import Job from '../conceptpicker/concept'


class JobPicker extends React.Component {
    constructor(props) {
        super(props)
        this.props.clearCurrentSpecialities()
        this.props.getJobs()
        this.state = {picked: []}
    }

    updatePicked(id) {
        console.log(this.state.picked)
        if (this.state.picked.includes(id)) {
            let new_picked = this.state.picked
            const index_id = new_picked.splice(index_id, 1)
            this.setState({picked: new_picked})
        }
        else {
            let new_picked = this.state.picked
            new_picked.push(id)
            this.setState({picked: new_picked })
        }
    }

    componentWillUnmount() {
        
    }

    render() {
    const jobs = this.props.jobs ? this.props.jobs.map((job, i) => <Job key={i} id={job.id} text={job.name} callback={(id) => this.updatePicked(id)}/>) : null
        return(
            <div>
                <h4>Veuillez choisir les métiers qui vous intéresse dans la liste</h4>
                <br/>
                {jobs}
                <br/><br/>
                <Button onClick={() => this.props.submitForm(this.state.picked)}>Submit</Button>
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        jobs: state.jobs.list
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getJobs: () => dispatch(getJobs()),
        submitForm: (ids) => {
            dispatch(getForm2Responses(ids))
        },
        clearCurrentSpecialities: () => dispatch(clearCurrentSpecialities())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JobPicker)