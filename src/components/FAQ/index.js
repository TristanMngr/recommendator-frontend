import React, { Component } from 'react'
import { Accordion, Icon, Segment, Grid, Header } from 'semantic-ui-react'

export default class FAQ extends Component {
    state = { activeIndex: -1 }

    handleClick = (e, titleProps) => {
        const { index } = titleProps
        const { activeIndex } = this.state
        const newIndex = activeIndex === index ? -1 : index

        this.setState({ activeIndex: newIndex })
    }

    render() {
        const { activeIndex } = this.state


        return (
            <div>
                <br/>
                <Header as='h1' color="green" icon textAlign='center'>
                    <Header.Content className="text">FAQ</Header.Content>
                </Header>

                <Grid columns={3} divided inverted verticalAlign="centered" >
                    <Grid.Row>
                        <Grid.Column width={9}>
                            <Segment inverted>
                                <Accordion inverted>
                                    <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                        <h4>
                                            <Icon name='dropdown' />
                                            Comment trouver le métier qui me correspond?
                                        </h4>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 0}>
                                        <p>
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                            Ut enim ad minim veniam,
                                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                        </p>
                                    </Accordion.Content>
                                </Accordion>
                            </Segment>
                            <Segment inverted>
                                <Accordion inverted>
                                    <Accordion.Title active={activeIndex === 1} index={1} onClick={this.handleClick}>
                                        <h4>
                                            <Icon name='dropdown' />
                                            Comment connaître le parcours qui est fait pour moi?
                                        </h4>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 1}>
                                        <p>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                                            accusantium doloremque laudantium,
                                            totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et
                                            quasi architecto beatae vitae dicta sunt explicabo.
                                        </p>
                                    </Accordion.Content>
                                </Accordion>
                            </Segment>
                            <Segment inverted>
                                <Accordion inverted>
                                    <Accordion.Title active={activeIndex === 2} index={2} onClick={this.handleClick}>
                                        <h4>
                                            <Icon name='dropdown' />
                                            Est-ce que je peux refaire un questionnaire?
                                        </h4>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 2}>
                                        <p>
                                            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit,
                                            sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
                                        </p>
                                        <p>
                                            Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
                                            sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                                        </p>
                                    </Accordion.Content>
                                </Accordion>
                            </Segment>
                            <Segment inverted>
                                <Accordion inverted>
                                    <Accordion.Title active={activeIndex === 3} index={3} onClick={this.handleClick}>
                                        <h4>
                                            <Icon name='dropdown' />
                                            Comment changer mon mot de passe?
                                        </h4>
                                    </Accordion.Title>
                                    <Accordion.Content active={activeIndex === 3}>
                                        <p>
                                            Pour changer votre mot de passe, il vous suffit de vous connecter sur Moodle Isep
                                            et de vous rendre dans (Profil --> Informations  --> Mot de passe)
                                            et de cliquer sur "Modifier mon mot de passe "
                                        </p>
                                    </Accordion.Content>
                                </Accordion>
                            </Segment>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </div>

        )
    }
}
