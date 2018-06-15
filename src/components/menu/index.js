import React from 'react'
import { Grid, Menu, Icon } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import style from './style.scss'

export default class MenuVert extends React.Component {

    state = { activeItem: 'user circle' }

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <Grid>
                <Grid.Column width={3}>
                    <Menu inverted vertical>
                        <div className="color">
                            <Link to="/dashboard">
                            <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} >
                                Dashboard
                                <Icon name='dropdown'/>
                            </Menu.Item>
                            </Link>
                            <Link to="/profil">
                            <Menu.Item name='user circle' active={activeItem === 'user circle'} onClick={this.handleItemClick}>
                                Profil
                                <Icon name='user circle'/>
                            </Menu.Item>
                            </Link>
                            <Link to="/FAQ">
                            <Menu.Item name='info' active={activeItem === 'info'} onClick={this.handleItemClick}>
                                FAQ
                                <Icon name='info'/>
                            </Menu.Item>
                            </Link>
                        </div>

                    </Menu>
                </Grid.Column>
            </Grid>
        )
    }
}


