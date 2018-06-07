import React from 'react'
import ConceptPicker from '../conceptpicker'
import { Link } from 'react-router-dom'
import LogoutButton from '../logout_button'
import { Loader } from 'semantic-ui-react'


export default class LoadingPage extends React.Component {
    render() {
        return(
            <Loader active size='massive'>Loading</Loader>
        )
    }
}
