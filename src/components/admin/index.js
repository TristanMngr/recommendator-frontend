import React from 'react'
import style from './style.scss'
import { getSpecialities } from '../../actions/speciality';
import { getModules } from '../../actions/module';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import CustomList  from './custom_list'

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
                    <CustomList entity="speciality" list={this.props.specialities} canAdd={true} />
                </div>
            ) :
            '';



        const list_modules = this.props.modules ?
            (   <div>
                    <CustomList entity="module" list={this.props.modules} canAdd={true} />
                </div>
            ) :
            '';


        return(
            <div className={style.component}>
                {this.props.specialities && list_specialities}
                {this.props.modules && list_modules}
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
