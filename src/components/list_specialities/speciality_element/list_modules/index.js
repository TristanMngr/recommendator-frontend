import React from 'react'
import style from './style.scss'

export default class ListModules extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const concepts = this.props.matching_concepts.map(
                (concept, i) => {
                    const comma = this.props.matching_concepts.length > 0 && i > 0 ? ", " : "";
                    const end = i === this.props.matching_concepts.length - 1 ? "." : "";
                    return (
                        <span className="content">{comma + concept.name + end}</span>
                    )
                }
        );

        return (
            <div className={style.component}>
                <span className="title">{this.props.module.name} :</span>{" "}
                {concepts}
            </div>
        );
    }
}
