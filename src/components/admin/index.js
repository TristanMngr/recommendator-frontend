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
                    <CustomList list={this.props.specialities} canAdd={true} />
                </div>
            ) :
            '';



        // const list_modules = this.props.modules ?
        //     <ListSpecialities list={this.props.modules} /> :
        //     '';


        return(
            <div className={style.component}>
                {this.props.specialities && list_specialities}
                {/*this.props.modules && list_modules*/}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSpeFetching: state.speciality.isFetching,
        specialities: state.speciality.data,
        errorSpe: state.speciality.error,
        isModulesFetching: state.modules.isFetching,
        modules: state.modules.data,
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
