import React from 'react'
import { Loader } from 'semantic-ui-react'


export default class LoadingPage extends React.Component {
    render() {
        return(
            <Loader active size='massive'>Loading</Loader>
        )
    }
}
