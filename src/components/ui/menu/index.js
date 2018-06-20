import React from 'react'
import { Menu, Icon, Header } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import LogoutButton from '../logout_button'
import style from './style.scss'
export default class MenuVert extends React.Component {

    render() {
        const path = window.location.pathname

        return (
            <div style={{minHeight: '100vh', position: 'fixed'}}>
                    <Menu inverted vertical style={{minHeight: '100vh', paddingTop: '50px'}}>
                            <Header as='h4' color="green" icon textAlign='center'>
                                <Header.Content>THE RECOMMENDATOR</Header.Content>
                            </Header>
                            <br/>
                            <br/>
                            <Link to="/dashboard">
                                <Menu.Item name='dashboard' active={path === "/dashboard"} className="menu-item" >
                                    Dashboard
                                    <Icon name='dashboard'/>
                                </Menu.Item>
                            </Link>
                            <Link to="/profil">
                                <Menu.Item name='user circle' active={path === '/profil'} className="menu-item" >
                                    Profil
                                    <Icon name='user circle'/>
                                </Menu.Item>
                            </Link>
                            <Link to="/faq">
                                <Menu.Item name='info' active={path === '/faq'} className="menu-item" >
                                    FAQ
                                    <Icon name='info'/>
                                </Menu.Item>
                            </Link>
                            <Menu.Item name="logout" className="logout-menu">
                                    <LogoutButton />
                            </Menu.Item>
                    </Menu>
            </div>
        )
    }
}
