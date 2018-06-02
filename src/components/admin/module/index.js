import React from 'react'
import style from '../style.scss'
import { getModule } from '../../../actions/module';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import BigButton from '../big_button'
import PutForm from '../put_form'
import AddForm from '../add_form'

class Module extends React.Component {
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

        if (this.props.module){

            putForm =
            <PutForm type="modules" object={this.props.module} />

            addForm =
            <AddForm toAdd="concepts" in="modules" object={this.props.module} selectValue="Choisir un concept" />

            component = (
                <div>
                    <h1>{this.props.module.name}</h1>
                    <div className="actions">
                        <BigButton text="Modifier les informations du module" hidden={putForm} />
                        <BigButton text="Ajouter un concept" hidden={addForm} />
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
        isFetching: state.modules.isFetching,
        module: state.modules.current,
        error: state.modules.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: id => {
            dispatch(getModule(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Module))
