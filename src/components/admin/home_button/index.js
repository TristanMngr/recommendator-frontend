import React from 'react'
import style from './style.scss'
import {Link} from 'react-router-dom'
import {Button} from 'semantic-ui-react'

export default class HomeButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className={style.component}>
                <Link to="/admin">Revenir à l'accueil de l'administration</Link>
            </div>
        )
    }
}
