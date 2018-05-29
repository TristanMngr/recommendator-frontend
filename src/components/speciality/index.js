import React from 'react'
import style from './style.scss'
import { getSpeciality } from '../../actions/speciality';
import { connect } from 'react-redux'
import {withRouter, Redirect} from 'react-router-dom'

class Speciality extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.get(this.props.match.params.id);
    }

    render() {

        const component = this.props.speciality ?
        (<div>
            <h1>{this.props.speciality.name}</h1>
            <div className="actions">
                <div className="big-btn">
                    Modifier les informations du parcours
                </div>
                <div className="big-btn">
                    Ajouter un cours
                </div>
            </div>    
        </div>
        ) : "Loading...";

        return(
            <div className={style.component}>
                {component}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.speciality.isFetching,
        speciality: state.speciality.data,
        error: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: id => {
            dispatch(getSpeciality(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Speciality))
