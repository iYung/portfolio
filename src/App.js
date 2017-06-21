import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Sidebar, Segment, Menu, Icon } from 'semantic-ui-react'
import './App.css'

import Home from './components/home/home'
import EduExp from './components/eduexp/eduexp'
import Projects from './components/projects/projects'
import Achievements from './components/achievements/achievements'
import Footer from './components/footer/footer'

class App extends Component {
  state = { visible: false }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  offVisibility = () => {if (this.state.visible) { this.setState({ visible: false}); }}
  
  render(){
    return(
      <div>

        <Router>

          <Sidebar.Pushable as={Segment} id="pushable">
          <Sidebar as={Menu} animation='push' width='thin' visible={this.state.visible} icon='labeled' vertical inverted>
          
            <Link to="/">
            <Menu.Item name='home' onClick={this.toggleVisibility}>
              <Icon name='home' />
              Home
            </Menu.Item>
            </Link>
            
            <Link to="/eduexp">
            <Menu.Item name='eduxp' onClick={this.toggleVisibility}>
              <Icon name='university' />
              Education & Experience
            </Menu.Item>
            </Link>
            
            <Link to="/projects">
            <Menu.Item name='projects' onClick={this.toggleVisibility}>
              <Icon name='computer' />
              Projects
            </Menu.Item>
            </Link>
            
            <Link to="/achievements">
            <Menu.Item name='achievements' onClick={this.toggleVisibility}>
              <Icon name='trophy' />
              Achievements
            </Menu.Item>
            </Link>
            
            <a href="https://www.linkedin.com/in/ivan-yung-897955109/" target="_blank">
            <Menu.Item name='linkedin' onClick={this.toggleVisibility}>
              <Icon name='linkedin square' />
              LinkedIn
            </Menu.Item>
            </a>

          </Sidebar>
          <Sidebar.Pusher id="pusher" onClick={this.offVisibility}>

            <Segment basic id="content">
              <Icon name="content" size="big" onClick={this.toggleVisibility}/>

              <p/>
      
              <Route exact path="/" component={Home}/>
              <Route path="/eduexp" component={EduExp}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/achievements" component={Achievements}/>
              
              <p/>
              
              <Footer />
              
            </Segment>

          </Sidebar.Pusher>
        </Sidebar.Pushable>
        
        </Router>
      </div>
    )
  }
  
}
export default App