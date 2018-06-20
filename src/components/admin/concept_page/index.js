import React from 'react'
import style from '../style.scss'
import { getConcept } from '../../../actions/concept';
import { connect } from 'react-redux'
import {withRouter} from 'react-router-dom'
import BigButton from '../big_button'
import Form from '../form'
import HomeButton from '../home_button'
import Menu from '../../ui/menu'

class ConceptPage extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount(){
        this.props.get(this.props.match.params.id);
    }

    render() {

        let putForm = '';
        let component = '';

        if (this.props.concept){
            putForm =
            <Form method="put" type="concepts" object={this.props.concept} />

            component = (
                <div>
                    <h1>{this.props.concept.name}</h1>
                    <HomeButton />

                    <div className="actions">
                        <BigButton text="Modifier les informations du concept" hidden={putForm} />
                    </div>
                </div>
            );

        }

        return(
            <React.Fragment>
                <Menu />
                <div className={style.component + " margin-menu"}>
                    {component}
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = state => {
    return {
        isFetching: state.concepts.isFetching,
        concept: state.concepts.current,
        error: state.concepts.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        get: id => {
            dispatch(getConcept(id))
        }
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ConceptPage))
