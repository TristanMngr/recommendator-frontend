import React from 'react'
import { deleteConcept } from '../../../../../actions/concept';
import { deleteConceptFromModule } from '../../../../../actions/module';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomItem from '../'

class ConceptItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteElement(){
        if (this.props.deleteFrom)
            this.props.delFromModule(this.props.module.id, this.props.id);
        else
            this.props.del(this.props.id);
    }

    render() {
        const link_url = `/admin/concept/${this.props.id}`

        return(
            <CustomItem editLink={link_url} deleteFunction={this.deleteElement.bind(this)}
                name={this.props.name} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isModuleFetching: state.modules.isFetching,
        isConceptFetching: state.concepts.isFetching,
        module: state.modules.current,
        errorConcept: state.concepts.error,
        errorModule: state.modules.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        del: (id) => {
            dispatch(deleteConcept(id))
        },
        delFromModule: (from_id, to_delete_id) => {
            dispatch(deleteConceptFromModule(from_id, to_delete_id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConceptItem))
