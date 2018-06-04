import React from 'react'
import style from '../style.scss'
import FontAwesome from 'react-fontawesome'
import { deleteSpeciality, deleteModuleFromSpeciality, updateMainModuleFromSpeciality } from '../../../../actions/speciality';
import { deleteModule } from '../../../../actions/module';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Checkbox } from 'semantic-ui-react'

let SPECIALITY;
let MODULE;
let delete_function;
let delete_from_function;

class CustomItem extends React.Component {
    constructor(props) {
        super(props);
        this.updateConstants();
        this.state = {
            is_main: this.props.isMain
        }
    }

    updateConstants() {
        MODULE = this.props.type === "modules";
        SPECIALITY = this.props.type === "specialities";
        if (SPECIALITY)
            delete_function = deleteSpeciality;
        else if (MODULE) {
            delete_function = deleteModule;
            delete_from_function = deleteModuleFromSpeciality;
        }
    }

    deleteElement(){
        this.updateConstants();
        if (!this.props.deleteFrom)
            this.props.del(this.props.entityId);
        else
            this.props.delFrom(this.props.deleteFrom, this.props.entityId);
    }

    switchIsMain(e){
        this.setState({
            is_main: !this.state.is_main
        }, () => {
            this.props.switchIsMain(this.props.deleteFrom, this.props.entityId, this.state.is_main);
        })
    }

    render() {
        this.updateConstants();

        let url
        let toggle
        if (SPECIALITY)
            url = "speciality"
        if (MODULE) {
            url = "module"
            if (this.props.isMain != undefined)
                toggle = (
                    <div className="toggle">
                        <Checkbox onClick={this.switchIsMain.bind(this)} toggle
                            label={"cours coeur"}
                            checked={this.state.is_main} />
                    </div>
                )
        }

        const link_url = `/admin/${url}/${this.props.entityId}`

        return(
            <div className={style.component} >
                    <li>
                        <div className="line">
                            <div className="name">{this.props.name}</div>
                            <div className="description">{this.props.description}</div>
                            { toggle }
                            <div>
                                <div className="buttons">
                                    <Link to={link_url}>Modifier</Link>
                                    <div className="trash-btn" onClick={this.deleteElement.bind(this)}>
                                        <FontAwesome name="trash-alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
            </div>
        )
    }
}

const mapStateToProps = state => {
    let isFetching
    if (SPECIALITY)
        isFetching = state.speciality.isFetching
    else if (MODULE)
        isFetching = state.modules.isFetching

    return {
        isFetching: isFetching,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        del: (id) => {
            dispatch(delete_function(id))
        },
        delFrom: (from_id, to_delete_id) => {
            dispatch(delete_from_function(from_id, to_delete_id))
        },
        switchIsMain: (from_id, to_update_id, is_main) => {
            dispatch(updateMainModuleFromSpeciality(from_id, to_update_id, is_main))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomItem))
