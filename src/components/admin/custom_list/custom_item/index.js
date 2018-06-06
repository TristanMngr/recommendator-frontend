import React from 'react'
import style from '../style.scss'
import FontAwesome from 'react-fontawesome'
import { deleteSpeciality, deleteModuleFromSpeciality, updateMainModuleFromSpeciality } from '../../../../actions/speciality';
import { deleteModule } from '../../../../actions/module';
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'
import { Checkbox } from 'semantic-ui-react'

export default class CustomItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        const toggle = this.props.switchIsMain ? (
                <div className="toggle">
                    <Checkbox onClick={this.props.switchIsMain} toggle
                        label={"cours coeur"}
                        checked={this.props.isMain} />
                </div>
            ) : '';

        return(
            <div className={style.component} >
                    <li>
                        <div className="line">
                            <div className="name">{this.props.name}</div>
                            <div className="description">{this.props.description}</div>
                            { toggle }
                            <div>
                                <div className="buttons">
                                    <Link to={this.props.editLink}>Modifier</Link>
                                    <div className="trash-btn" onClick={this.props.deleteFunction}>
                                        <FontAwesome name="trash-alt" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>
            </div>
        )
    }
}
