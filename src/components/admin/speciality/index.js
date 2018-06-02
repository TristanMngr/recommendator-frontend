import React from 'react'
import style from '../style.scss'
import { getSpeciality } from '../../../actions/speciality';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import BigButton from '../big_button'
import PutForm from '../put_form'
import AddForm from '../add_form'

class Speciality extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.get(this.props.match.params.id);
    }

    render() {

        let putForm = '';
        let addForm = '';
        let component = '';

        if (this.props.speciality){

            putForm =
            <PutForm type="specialities" object={this.props.speciality} />

            addForm =
            <AddForm toAdd="modules" in="specialities" object={this.props.speciality} selectValue="Choisir un cours" />

            component = (
                <div>
                    <h1>{this.props.speciality.name}</h1>
                    <div className="actions">
                        <BigButton text="Modifier les informations du parcours" hidden={putForm} />
                        <BigButton text="Ajouter un cours" hidden={addForm} />
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
        isFetching: state.speciality.isFetching,
        speciality: state.speciality.current,
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
