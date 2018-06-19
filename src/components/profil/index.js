import React from 'react'
import { Reveal, Image } from 'semantic-ui-react'


export default class Profil extends React.Component {

    render() {

        return (
            <div>
            <Reveal animated='rotate'>
                <Reveal.Content visible>
                    <Image circular size='big' src={'src/components/img/Hugo.jpeg'} />
                </Reveal.Content>
                <Reveal.Content hidden>
                    <Image circular size='big' src='src/components/img/Hugo.jpeg' />
                </Reveal.Content>
            </Reveal>
            </div>

        )
    }
}


