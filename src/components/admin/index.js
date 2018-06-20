import React from 'react'
import style from './style.scss'
import { getSpecialities } from '../../actions/speciality';
import { getModules } from '../../actions/module';
import { getConcepts } from '../../actions/concept';
import { getJobs } from '../../actions/job';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomList  from './custom_list'
import Form from './form'
import BigButton from './big_button'
import Menu from '../ui/menu'

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getSpecialities();
        this.props.getModules();
        this.props.getConcepts();
        this.props.getJobs();
    }

    render() {



        const list_specialities = this.props.specialities ?
            (   <div>
                    <CustomList type="specialities" list={this.props.specialities} from="db" />
                </div>
            ) :
            '';

        const form_specialities = <Form method="post" type="specialities" />;


        const list_modules = this.props.modules ?
            (   <div>
                    <CustomList type="modules" list={this.props.modules} from="db" />
                </div>
            ) :
            '';

        const form_modules = <Form method="post" type="modules" />;


        const list_concepts = this.props.concepts ?
                (   <div>
                        <CustomList type="concepts" list={this.props.concepts} from="db" />
                    </div>
                ) :
                '';

        const form_concepts = <Form method="post" type="concepts" />;

        const list_jobs = this.props.jobs ?
                (   <div>
                        <CustomList type="jobs" list={this.props.jobs} from="db" />
                    </div>
                ) :
                '';

        const form_jobs = <Form method="post" type="jobs" />

        return(
            <React.Fragment>
                <Menu />
                <div className={style.component + " margin-menu"}>
                    <div>
                        <div className="add">
                            <BigButton text="Ajouter un parcours" hidden={form_specialities} />
                        </div>
                        {this.props.specialities && list_specialities}
                    </div>
                    <div>
                        <div className="add">
                            <BigButton text="Ajouter un cours" hidden={form_modules} />
                        </div>
                        {this.props.modules && list_modules}
                    </div>
                    <div>
                        <div className="add">
                            <BigButton text="Ajouter un concept" hidden={form_concepts} />
                        </div>
                        {this.props.concepts && list_concepts}
                    </div>
                    <div>
                        <div className="add">
                            <BigButton text="Ajouter un métier" hidden={form_jobs} />
                        </div>
                        {this.props.jobs && list_jobs}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSpeFetching: state.speciality.isFetching,
        specialities: state.speciality.list,
        errorSpe: state.speciality.error,
        isModulesFetching: state.modules.isFetching,
        modules: state.modules.list,
        errorModule: state.modules.error,
        isConceptFetching: state.concepts.isFetching,
        concepts: state.concepts.list,
        errorConcept: state.concepts.error,
        isJobFetching: state.jobs.isFetching,
        jobs: state.jobs.list,
        errorJob: state.jobs.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSpecialities: () => {
            dispatch(getSpecialities())
        },
        getModules: () => {
            dispatch(getModules())
        },
        getConcepts: () => {
            dispatch(getConcepts())
        },
        getJobs: () => {
            dispatch(getJobs())
        }
    }
}


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin))
