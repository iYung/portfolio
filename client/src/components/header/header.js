import React, {Component} from 'react';
import {
  Link
} from 'react-router-dom'
import { Menu, Dropdown, Icon } from 'semantic-ui-react'
import Axios from 'axios';

class Header extends Component { 
    
    constructor(props) {
    super(props);
    this.state = {
      headers: []
    };
  }
  
    componentDidMount() {
    Axios.get('/api/header')
      .then(res => {
        const headers = res.data;
        this.setState({ headers });
      });
    const height = document.getElementById('menuBar').clientHeight;
    this.props.updateheight(height);
  }
  
  render(){
  
  return (
    <Menu id="menuBar">
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
            </Dropdown.Menu>
        </Dropdown>
        {this.state.headers.map(head =>
            <Menu.Item header key={head._id}>{head.text}</Menu.Item>
        )}
    </Menu>
  )}
}
export default Header