import React from 'react'
import style from './style.scss'
import { getSpecialities } from '../../actions/speciality';
import { getModules } from '../../actions/module';
import { getConcepts } from '../../actions/concept';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomList  from './custom_list'
import Form from './form'
import BigButton from './big_button'

class Admin extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.getSpecialities();
        this.props.getModules();
        this.props.getConcepts();
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

        return(
            <div className={style.component}>
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
            </div>
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
        errorConcept: state.concepts.error
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
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin))
