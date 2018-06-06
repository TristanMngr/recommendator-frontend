import React from 'react'
import style from './style.scss'
import { getSpecialities } from '../../actions/speciality';
import { getModules } from '../../actions/module';
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
        errorModule: state.modules.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getSpecialities: () => {
            dispatch(getSpecialities())
        },
        getModules: () => {
            dispatch(getModules())
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Admin))
