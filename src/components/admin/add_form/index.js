import React from 'react'
import { addModuleToSpeciality } from '../../../actions/speciality';
import { getModules, addConceptToModule } from '../../../actions/module'
import { getConcepts } from '../../../actions/concept'
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'


//used to use the correct actions
let toAdd_obj;
let in_obj;
let add_function;
let get_function;

class AddForm extends React.Component {

    constructor(props) {
        super(props);
        toAdd_obj = props.toAdd;
        in_obj = props.in;
        if (props.toAdd === "modules" && props.in === "specialities"){
            this.state = {
                toAdd_id: 420,
                is_main: false
            }
            get_function = getModules;
            add_function = addModuleToSpeciality;
        }
        else if (props.toAdd === "concepts" && props.in === "modules"){
            this.state = {
                toAdd_id: 420
            }
            get_function = getConcepts;
            add_function = addConceptToModule;
        }
    }

    componentDidMount(){
        this.props.get(this.props.match.params.id);
    }

    updateSelect(e){
        this.setState({
            toAdd_id: e.target.value
        })
    }

    updateCheckbox(e){
        this.setState({
            is_main: e.target.checked
        })
    }

    submitForm(e){
            e.preventDefault()
            this.props.add({
                object_id: this.props.object.id,
                toAdd_id: this.state.toAdd_id,
                is_main: this.state.is_main
            });
    }

    render() {

        let already_in

        switch (toAdd_obj) {
            case "modules":
                already_in = this.props.object.specialityModules.map(
                    (speMod) => {
                        return speMod.module.id;
                    }
                );
                break;
            case "concepts":
                already_in = this.props.object.concepts.map(
                    (c) => {
                        return c.id;
                    }
                );
                break;
        }

        if (this.props.objects_toAdd)
            return(
                <div>
                    <form>
                        <select onChange={this.updateSelect.bind(this)} defaultValue={420}>
                            <option disabled value={420}>{this.props.selectValue}</option>
                        {
                            this.props.objects_toAdd.map(
                                (obj, i) => {
                                    if (already_in.indexOf(obj.id) === -1)
                                        return (
                                            <option key={i} value={obj.id}>{obj.name}</option>
                                        )
                                    else return '';
                                }
                            )
                        }
                        </select>
                        {
                            this.props.toAdd === "modules" && (
                                <div><input type="checkbox" onChange={this.updateCheckbox.bind(this)} /> cours coeur ? </div>
                            )
                        }
                        <button onClick={this.submitForm.bind(this)}>Ajouter</button>
                    </form>
                </div>
            )
        else
            return (<div>Loading...</div>)
    }
}



const mapStateToProps = state => {
    let objects_toAdd;
    let error;
    let isFetching;
    if (toAdd_obj === "modules" && in_obj === "specialities"){
        objects_toAdd = state.modules.data
        isFetching = state.speciality.isFetching
        error = state.speciality.error
    }
    else if (toAdd_obj === "concepts" && in_obj === "modules"){
        objects_toAdd = state.concepts.data
        isFetching = state.modules.isFetching
        error = state.modules.error
    }

    return {
        isFetching: isFetching,
        objects_toAdd: objects_toAdd,
        error: error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: (infos, id) => {
            dispatch(get_function())
        },
        add: (infos) => {
            dispatch(add_function(infos))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(AddForm))
