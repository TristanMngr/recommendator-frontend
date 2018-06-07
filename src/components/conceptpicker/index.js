import React from 'react'
import {connect} from 'react-redux'
import Concept from './concept'
import {getConcepts} from '../../actions/concept'

class ConceptPicker extends React.Component {

    constructor(props) {
        super(props)
        this.props.getConcepts()
    }

    render() {
        const Loader = <div><p>Loading</p></div>
        const ConceptDiv = (
            <div>
                {this.props.concepts ? this.props.concepts.map(concept => <Concept key={concept.id} text={concept.name} />) : ""}
            </div>
        )
        const Component = this.props.isFetching ? Loader : ConceptDiv
        return(
            <div>
                Concepts
                {Component}
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isFetching: state.concepts.isFetching,
        concepts: state.concepts.data
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        getConcepts: () => {
            dispatch(getConcepts())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConceptPicker)