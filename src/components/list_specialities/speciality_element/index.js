import React from 'react'
import style from './style.scss'
import ConceptIn from './concept_in'

export default class SpecialityElement extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            show_details: false
        }
    }

    toggle(){
        this.setState({
            show_details: !this.state.show_details
        });
    }

    render() {

        const nb_concepts = this.props.matching_concepts.length > 0 ?
            // TODO add icon (chevron down par ex) pour montrer cliquable qd true
            <div className={"nb-concepts link"} onClick={this.toggle.bind(this)}>
                {this.props.matching_concepts.length} concepts trouvés
            </div> :
            <div className={"nb-concepts"}>{this.props.matching_concepts.length} concepts trouvés</div>


        const details = this.state.show_details ?
            <div className="details">
                {
                    this.props.matching_concepts.map(
                        (elem, i) => {
                            return (

                                <ConceptIn key={i} concept={elem.concept} in_modules={elem.in_modules} />
                            )
                        }
                    )
            }
            </div> : null;

        return(
            <div className={style.component}>
                <div className="up">
                    <div className="name">{this.props.name}</div>
                    <div className="matching">{this.props.matching}%</div>
                </div>
                <div className="middle">
                    {nb_concepts}
                </div>
                {details}
                <div className="down">
                    <progress className="progress-bar" value={this.props.matching} max="100"></progress>
                </div>
            </div>
        )
    }
}
