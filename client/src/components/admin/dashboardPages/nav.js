import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class Nav extends Component {
  render(){ return (
    <Segment id="mainBar" textAlign={"center"}>
      <h2>Admin Dashboard</h2>
      <Menu pointing secondary stackable>
        <Link to={'/admin/header'}>
          <Menu.Item name='Header' active={this.props.activeItem === 'header'} />
        </Link>
        <Link to={'/admin/home'}>
          <Menu.Item name='Home' active={this.props.activeItem === 'home'} />
        </Link>
        <Link to={`/admin/edu`}>
          <Menu.Item name='Education' active={this.props.activeItem === 'edu'} />
        </Link>
        <Link to={`/admin/exp`}>
          <Menu.Item name='Experience' active={this.props.activeItem === 'exp'} />
        </Link>
        <Link to={`/admin/projects`}>
          <Menu.Item name='Projects' active={this.props.activeItem === 'projects'} />
        </Link>
        <Link to={`/admin/achievements`}>
          <Menu.Item name='Achievements' active={this.props.activeItem === 'achievements'} />
        </Link>
        <Link to={`/admin/user`}>
          <Menu.Item name='User' active={this.props.activeItem === 'user'} />
        </Link>
      </Menu>
    </Segment>
  )}
}
export default Nav