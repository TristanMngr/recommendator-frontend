import React from 'react'
import {connect} from 'react-redux'
import Concept from './concept'
import {getConcepts} from '../../actions/concept'
import {Button} from 'semantic-ui-react'
import {getForm1Responses} from '../../actions/form'
import Loader from '../ui/loader'
class ConceptPicker extends React.Component {

    constructor(props) {
        super(props)
        this.props.getConcepts()
        this.state = {picked: []}
    }
    updatePicked(id) {
        console.log(this.state.picked)
        if (this.state.picked.includes(id)) {
            let new_picked = this.state.picked
            const index_id = new_picked.splice(index_id, 1)
            this.setState({picked: new_picked})
        }
        else {
            let new_picked = this.state.picked
            new_picked.push(id)
            this.setState({picked: new_picked })
        }
    }
    render() {
        const LoaderComponent = <Loader/>
        const ConceptDiv = (
            <div className="container">
                {this.props.concepts ? this.props.concepts.map(concept => <Concept id={concept.id} key={concept.id} text={concept.name} callback={(id) => this.updatePicked(id)}/>) : ""}
            </div>
        )
        const Component = this.props.isFetching ? LoaderComponent : ConceptDiv
        return(
            <div>
                Concepts
                {Component}
                <br/>
                <Button onClick={() => this.props.submitForm(this.state.picked)}>Submit</Button>
            </div>
        )
    }
}


const mapStateToProps = state => {
    return {
        isFetching: state.concepts.isFetching,
        concepts: state.concepts.list
    }
}

const mapDispatchToProps = dispatch =>  {
    return {
        getConcepts: () => {
            dispatch(getConcepts())
        },
        submitForm: (ids) => {
            dispatch(getForm1Responses(ids))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConceptPicker)