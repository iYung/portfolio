import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'

class Header extends Component { 
    
    componentDidMount() {
    const height = document.getElementById('menuBar').clientHeight;
    this.props.updateheight(height);
  }
  
  render(){
  
  return (
    <Menu stackable id="menuBar">
        <Dropdown item labeled id="menuButton" icon={<Icon name="content" size="big" />}>
            <Dropdown.Menu>
                <Link to="/">
                     <Dropdown.Item icon="home" text="Home"/>
                </Link>
                <Link to="/eduexp">
                     <Dropdown.Item icon="university" text="Education and Experience"/>
                </Link>
                <Link to="/projects">
                    <Dropdown.Item icon="computer" text="Projects"/>
                </Link>
                <Link to="/achievements">
                    <Dropdown.Item icon="trophy" text="Achievements"/>
                </Link>
                <Dropdown.Divider/>
                <a href="https://www.linkedin.com/in/ivan-yung-897955109/" target="_blank">
                    <Dropdown.Item icon="linkedin square" text="LinkedIn"/>
                </a>
                <a href="https://github.com/iYung" target="_blank">
                    <Dropdown.Item icon="github alternate" text="GitHub"/>
                </a>
            </Dropdown.Menu>
        </Dropdown>
    </Menu>
  )}
}
export default Header