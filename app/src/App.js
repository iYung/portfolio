import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import './App.css'

import Home from './components/home/home'
import About from './components/about/about'

class App extends Component {
  state = { visible: false }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  
  render(){
    return(
      <div>

        <Router>
          <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
          
            <Link to="/">
            <Menu.Item name='home' onClick={this.toggleVisibility}>
              <Icon name='home' />
              Home
            </Menu.Item>
            </Link>
            
            <Link to="/about">
            <Menu.Item name='about' onClick={this.toggleVisibility}>
              <Icon name='question circle' />
              About
            </Menu.Item>
            </Link>
            
            <a href="https://www.linkedin.com/in/ivan-yung-897955109/" target="_blank">
            <Menu.Item name='linkedin' onClick={this.toggleVisibility}>
              <Icon name='linkedin square' />
              LinkedIn
            </Menu.Item>
            </a>

          </Sidebar>
          <Sidebar.Pusher>

            <Segment basic>
              <Icon name="content" size="big" onClick={this.toggleVisibility}/>
              
              <p />
      
              <Route exact path="/" component={Home}/>
              <Route path="/about" component={About}/>
            </Segment>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
        
        </Router>
      </div>
    )
  }
  
}
export default App