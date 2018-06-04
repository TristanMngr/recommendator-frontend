import React from 'react'
import style from '../style.scss'
import FontAwesome from 'react-fontawesome'
import { deleteSpeciality, deleteModuleFromSpeciality } from '../../../../actions/speciality';
import { deleteModule } from '../../../../actions/module';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

let SPECIALITY;
let MODULE;
let delete_function;
let delete_from_function;

class CustomItem extends React.Component {
    constructor(props) {
        super(props);
        this.updateConstants();
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

    render() {
        this.updateConstants();

        let url
        if (SPECIALITY)
            url = "speciality"
        if (MODULE)
            url = "module"

        const link_url = `/admin/${url}/${this.props.entityId}`

        return(
            <div className={style.component} >
                    <li>
                        <div className="line">
                            <div className="name">{this.props.name}</div>
                            <div className="description">{this.props.description}</div>
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
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CustomItem))
