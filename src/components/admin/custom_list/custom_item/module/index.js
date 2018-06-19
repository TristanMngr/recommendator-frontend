import React from 'react'
import { deleteModuleFromSpeciality, updateMainModuleFromSpeciality } from '../../../../../actions/speciality';
import { deleteModule } from '../../../../../actions/module';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomItem from '../'

class ModuleItem extends React.Component {
    constructor(props) {
        super(props);
        if (this.props.isMain !== undefined)
            this.state = {
                is_main: this.props.isMain
            }
    }

    deleteElement(){
        if (this.props.isMain !== undefined)
            this.props.delFromSpeciality(this.props.speciality.id, this.props.id);
        else
            this.props.del(this.props.id);
    }

    switchIsMain(e){
        this.setState({
            is_main: !this.state.is_main
        }, () => {
            this.props.switchIsMain(this.props.speciality.id, this.props.id, this.state.is_main);
        })
    }

    render() {
        const link_url = `/admin/module/${this.props.id}`

        const component = this.props.isMain !== undefined ?
            // it's on the speciality page, so we need to show the toggle and switch the is_main props
            <CustomItem editLink={link_url} deleteFunction={this.deleteElement.bind(this)} name={this.props.name}
                description={this.props.description} switchIsMain={this.switchIsMain.bind(this)} isMain={this.state.is_main} />
            :
            // it's not related to any spe
            <CustomItem editLink={link_url} deleteFunction={this.deleteElement.bind(this)} name={this.props.name}
                    description={this.props.description} />

        return component;
    }
}

const mapStateToProps = state => {
    return {
        isSpecialityFetching: state.speciality.isFetching,
        isModuleFetching: state.modules.isFetching,
        speciality: state.speciality.current,
        errorSpeciality: state.speciality.error,
        errorModule: state.modules.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        del: (id) => {
            dispatch(deleteModule(id))
        },
        delFromSpeciality: (from_id, to_delete_id) => {
            dispatch(deleteModuleFromSpeciality(from_id, to_delete_id))
        },
        switchIsMain: (from_id, to_update_id, is_main) => {
            dispatch(updateMainModuleFromSpeciality(from_id, to_update_id, is_main))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ModuleItem))
