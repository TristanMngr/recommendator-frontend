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
                            <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} >
                                <Link to="/dashboard">Dashboard</Link>
                                <Icon name='dashboard'/>
                            </Menu.Item>
                            <Menu.Item name='user circle' active={activeItem === 'user circle'} onClick={this.handleItemClick}>
                                <Link to="/profil">Profil</Link>
                                <Icon name='user circle'/>
                            </Menu.Item>
                            <Menu.Item name='info' active={activeItem === 'info'} onClick={this.handleItemClick}>
                                <Link to="/FAQ">FAQ</Link>
                                <Icon name='info'/>
                            </Menu.Item>
                        </div>

                    </Menu>
                </Grid.Column>
            </Grid>
        )
    }
}

