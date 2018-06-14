import React from 'react'
import style from '../style.scss'
import { getJob } from '../../../actions/job';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import BigButton from '../big_button'
import Form from '../form'
import CustomList from '../custom_list'

class JobPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.get(this.props.match.params.id);
    }

    render() {

        let putForm = '';
        let component = '';

        if (this.props.job){

            putForm =
            <Form method="put" type="jobs" object={this.props.job} />

            component = (
                <div>
                    <h1>{this.props.job.name}</h1>

                    <CustomList type="concepts" list={this.props.job.concepts}
                        from="job" />

                    <div className="actions">
                        <BigButton text="Modifier les informations du job" hidden={putForm} />
                    </div>
                </div>
            );

        }

        return(
            <div className={style.component}>
                {component}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.jobs.isFetching,
        job: state.jobs.current,
        error: state.jobs.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: id => {
            dispatch(getJob(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(JobPage))
