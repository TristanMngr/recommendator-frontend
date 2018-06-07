import React from 'react'
import { deleteSpeciality } from '../../../../../actions/speciality';
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import CustomItem from '../'

class SpecialityItem extends React.Component {
    constructor(props) {
        super(props);
    }

    deleteElement(){
        this.props.del(this.props.id);
    }

    render() {
        const link_url = `/admin/speciality/${this.props.id}`

        return(
            <CustomItem editLink={link_url} deleteFunction={this.deleteElement.bind(this)} name={this.props.name}
                description={this.props.description} />
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.speciality.isFetching,
        error: state.speciality.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        del: (id) => {
            dispatch(deleteSpeciality(id))
        },
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(SpecialityItem))
