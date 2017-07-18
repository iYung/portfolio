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
        <Link to={'/admin/home'}>
          <Menu.Item name='home' active={this.props.activeItem === 'home'} />
        </Link>
        <Link to={`/admin/eduexp`}>
          <Menu.Item name='Education and Experience' active={this.props.activeItem === 'eduexp'} />
        </Link>
        <Link to={`/admin/projects`}>
          <Menu.Item name='Projects' active={this.props.activeItem === 'projects'} />
        </Link>
        <Link to={`/admin/achievements`}>
          <Menu.Item name='Achievements' active={this.props.activeItem === 'achievements'} />
        </Link>
      </Menu>
    </Segment>
  )}
}
export default Nav