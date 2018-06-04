import React from 'react'
import { addSpecialityToList } from '../../../../actions/speciality';
import { addModuleToList } from '../../../../actions/module';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

// used to set and reinit the state depending on the list
// change the value in theses const to choose what we have to give to the backend and match the entity model
const SPECIALITY_STATE = {
    name: '',
    description: '',
};

const MODULE_STATE = {
    name: '',
    description: '',
};

//used to use the correct action depending on the list showing
let SPECIALITIES;
let MODULES;
let post_function;

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        SPECIALITIES = props.type === "speciality";
        MODULES = props.type === "module";
        if (SPECIALITIES){
            this.state = SPECIALITY_STATE
            post_function = addSpecialityToList;
        }
        else if (MODULES) {
            this.state = MODULE_STATE
            post_function = addModuleToList;
        }
    }

    updateInfo(e){
        let state = {};
        state[e.target.name] = e.target.value;
        this.setState(state)
    }

    submitForm(e){
            e.preventDefault()
            this.props.post(this.state);
            if (SPECIALITIES)
                this.setState(SPECIALITY_STATE)
            if (MODULES)
                this.setState(MODULE_STATE)
    }

    render() {

        return(

                <div>
                    <form>
                        {
                            Object.keys(this.state).map(
                                (field, i) => {
                                    return (
                                        <input key={i} type="text" name={field} value={this.state[field]} placeholder={field}
                                            onChange={this.updateInfo.bind(this)} />
                                        )
                                })
                        }
                        <button onClick={this.submitForm.bind(this)}>Ajouter</button>
                    </form>

                </div>

        );
    }
}

const mapStateToProps = state => {
    let isFetching
    if (SPECIALITIES)
        isFetching = state.speciality.isFetching
    else if (MODULES)
        isFetching = state.modules.isFetching

    return {
        isFetching: isFetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (infos) => {
            dispatch(post_function(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(PostForm))
