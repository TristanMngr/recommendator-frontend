import React from 'react'

export default class ConceptIn extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {

        const modules = this.props.in_modules.map(
            (mod, i) => {
                const comma = this.props.in_modules.length > 0 && i > 0 ? ", " : "";
                const end = i === this.props.in_modules.length - 1 ? "." : "";
                return comma + mod.name + end;
            }
        );

        return (
            <div>
                <span className="concept">{this.props.concept.name}</span> se trouve dans {modules}
            </div>
        );
    }
}
