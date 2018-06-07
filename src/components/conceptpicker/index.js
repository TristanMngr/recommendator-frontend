import React from 'react'
import {connect} from 'react-redux'
import Concept from './concept'
import {getConcepts} from '../../actions/concept'
import {Button} from 'semantic-ui-react'
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
        const Loader = <div><p>Loading</p></div>
        const ConceptDiv = (
            <div className="container">
                {this.props.concepts ? this.props.concepts.map(concept => <Concept id={concept.id} key={concept.id} text={concept.name} callback={(id) => this.updatePicked(id)}/>) : ""}
            </div>
        )
        const Component = this.props.isFetching ? Loader : ConceptDiv
        return(
            <div>
                Concepts
                {Component}
                <br/>
                <Button>Submit</Button>
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ConceptPicker)