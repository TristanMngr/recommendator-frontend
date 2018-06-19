import React from 'react'
import style from './style.scss'
import ListModules from './list_modules'
import ListJobs from './list_jobs'

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
        let button = null
        if (this.props.matching_modules) {
            button = this.props.matching_modules.length > 0 ?
            <div className={"see-matching"} onClick={this.toggle.bind(this)}>
                <span className="button">voir le matching</span>
            </div> :
            <div className={"see-matching"}>
                pas de matching
            </div>
        }

        if (this.props.matching_jobs) {
            button = this.props.matching_jobs.length > 0 ?
            <div className={"see-matching"} onClick={this.toggle.bind(this)}>
                <span className="button">voir le matching</span>
            </div> :
            <div className={"see-matching"}>
                pas de matching
            </div>
        }

        const matching_modules = this.props.matching_modules ? this.props.matching_modules.map(
            (elem, i) => {
                return (
                    <ListModules key={i} module={elem.module} matching_concepts={elem.matching_concepts} />
                )
            }
        ) : null

        const matching_jobs = this.props.matching_jobs? this.props.matching_jobs.map(
            (elem, i) => {
                return (
                    <ListJobs data={elem} />
                )
            }
        ) : null
            

        const details = this.state.show_details ?
            <div className="details">
                {matching_jobs}
                {matching_modules}
            </div> : null;

        return(
            <div className={style.component}>
                <div className="up">
                    <div className="name">{this.props.name}</div>
                    <div className="matching">{this.props.matching}%</div>
                </div>
                <div className="middle">
                    {button}
                </div>
                {details}
                <div className="down">
                    <progress className="progress-bar" value={this.props.matching} max="100"></progress>
                </div>
            </div>
        )
    }
}
