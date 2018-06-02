import React from 'react'
import { updateSpeciality } from '../../../../actions/speciality';
import { updateModule } from '../../../../actions/module';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'

// used to set the state depending on the page
// change the value in theses const to choose what we want to give right to update and match the backend's entity model

const SPECIALITY_PAGE_STATE = (name, desc) => {
    return {
        name: name,
        description: desc,
    }
}

const MODULE_PAGE_STATE = (name, desc) => {
    return {
        name: name,
        description: desc,
    }
}

//used to use the correct actions depending on the page
let SPECIALITY_PAGE;
let MODULE_PAGE;
let update_function;

class PutForm extends React.Component {

    constructor(props) {
        super(props);
        SPECIALITY_PAGE = props.type === "specialities";
        MODULE_PAGE = props.type === "modules";

        if (SPECIALITY_PAGE){
            this.state = SPECIALITY_PAGE_STATE(props.object.name, props.object.description);
            update_function = updateSpeciality;
        }
        else if (MODULE_PAGE) {
            this.state = MODULE_PAGE_STATE(props.object.name, props.object.description);
            update_function = updateModule;
        }
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
            e.preventDefault()
            this.props.put(this.state, this.props.object.id);
    }

    render() {

        return(
            <div>
                <form>
                    {
                        Object.keys(this.state).map(
                            (field, i) => {
                                return (
                                    <input key={i} type="text" name={field} value={this.state[field]}
                                        onChange={this.updateInfo.bind(this)} />
                                    )
                            })
                    }
                    <button onClick={this.submitForm.bind(this)}>Modifier</button>
                </form>

            </div>
        )
    }
}

const mapStateToProps = state => {
    let isFetching
    if (SPECIALITY_PAGE)
        isFetching = state.speciality.isFetching
    else if (MODULE_PAGE)
        isFetching = state.modules.isFetching

    return {
        isFetching: isFetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        put: (infos, id) => {
            dispatch(update_function(infos, id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PutForm))
