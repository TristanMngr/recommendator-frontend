import React from 'react'
import { Menu, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class MenuVert extends React.Component {

    state = { activeItem: 'user circle'}

    handleItemClick = (e, { name }) => this.setState({ activeItem: name })

    render() {
        const { activeItem } = this.state

        return (
            <div style={{minHeight: '100vh', position: 'fixed'}}>
                    <Menu inverted vertical style={{minHeight: '100vh', paddingTop: '50px'}}>
                            <Header as='h4' color="green" icon textAlign='center'>
                                <Header.Content>THE RECOMMENDATOR</Header.Content>
                            </Header>
                            <br/>
                            <br/>
                            <Link to="/dashboard">
                            <Menu.Item name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} >
                                Dashboard
                                <Icon name='dashboard'/>
                            </Menu.Item>
                            </Link>
                            <Link to="/profil">
                            <Menu.Item name='user circle' active={activeItem === 'user circle'} onClick={this.handleItemClick}>
                                Profil
                                <Icon name='user circle'/>
                            </Menu.Item>
                            </Link>
                            <Link to="/faq">
                            <Menu.Item name='info' active={activeItem === 'info'} onClick={this.handleItemClick}>
                                FAQ
                                <Icon name='info'/>
                            </Menu.Item>
                            </Link>
                    </Menu>
            </div>
        )
    }
}
