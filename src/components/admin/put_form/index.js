import React from 'react'
import { updateSpeciality } from '../../../actions/speciality';
import { updateModule } from '../../../actions/module';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'


//used to use the correct action
let update_function;
let type;

class PutForm extends React.Component {

    constructor(props) {
        super(props);
        type = props.type;
        switch (props.type) {
            case "specialities":
                this.state = {
                    name: props.object.name,
                    description: props.object.description,
                }
                update_function = updateSpeciality;
                break;
            case "modules":
                this.state = {
                    name: props.object.name,
                    description: props.object.description,
                }
                update_function = updateModule;
                break;
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
    switch (type) {
        case "specialities":
            isFetching = state.speciality.isFetching
            break;
        case "modules":
            isFetching = state.modules.isFetching
            break;
    }

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
