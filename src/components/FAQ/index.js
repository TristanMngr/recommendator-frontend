import React, { Component, Link } from 'react'
import { Accordion, Icon, Segment, Grid, Header } from 'semantic-ui-react'
import Menu from '../ui/menu'
import style from './style.scss'

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
                <Menu/>
                <div className={style.component + " margin-menu"}>
                    <Header as='h1' color="green" icon textAlign='center'>
                        <Header.Content className="text">FAQ</Header.Content>
                    </Header>

                    <Grid columns={3} divided inverted verticalAlign="centered" >
                        <Grid.Row>
                            <Grid.Column width={10}>
                                <Segment inverted>
                                    <Accordion inverted>
                                        <Accordion.Title active={activeIndex === 0} index={0} onClick={this.handleClick}>
                                            <h4>
                                                <Icon name='dropdown' />
                                                Comment trouver le parcours qui correspond au métier de mes rêves?
                                            </h4>
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === 0}>
                                            <p>
                                                Pour cela, il vous suffit de vous rendre sur Dashboard à partir du menu.
                                            </p>

                                            <p>
                                                Ensuite, répondez au formulaire "Découvrez quels parcours correspondent au métier de vos choix".
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
                                                Pour cela, il vous suffit de vous rendre sur Dashboard à partir du menu.
                                            </p>
                                            <p>
                                                Ensuite, répondez au formulaire "Découvrez quel parcours est fait pour vous".
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
                                                Oui, il est tout à fait possible de refaire un questionnaire!
                                            </p>
                                            <p>
                                                Pour cela, cliquez sur le questionnaire, dans le dashboard, que vous souhaitez faire à nouveau
                                                et remplissez le pour avoir une nouvelle réponse!
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
                                <Segment inverted>
                                    <Accordion inverted>
                                        <Accordion.Title active={activeIndex === 4} index={4} onClick={this.handleClick}>
                                            <h4>
                                                <Icon name='dropdown' />
                                                Comment s'inscrire sur le site?
                                            </h4>
                                        </Accordion.Title>
                                        <Accordion.Content active={activeIndex === 4}>
                                            <p>
                                                Il est impossible de s'inscrire sur le site.
                                            </p>
                                            <p>
                                                Pour accéder au site, il faut être étudiant à l'ISEP et posséder un identifiant et un mot de passe
                                                qui vous ont été donnés au début de votre scolarité.
                                            </p>
                                        </Accordion.Content>
                                    </Accordion>
                                </Segment>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </div>
            </div>

        )
    }
}
