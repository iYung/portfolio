import React, { Component } from 'react'
import {
  HashRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import { Dropdown, Segment, Menu, Icon } from 'semantic-ui-react'
import './App.css'

import Home from './components/home/home'
import EduExp from './components/eduexp/eduexp'
import Projects from './components/projects/projects'
import Achievements from './components/achievements/achievements'
import Footer from './components/footer/footer'

class App extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      height: 0
    }
  }
  
  componentDidMount() {
    const height = this.headerElement.clientHeight;
    this.setState({ height });
  }
  
  state = { visible: false }
  
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  offVisibility = () => {if (this.state.visible) { this.setState({ visible: false}); }}
  
  render(){
    
    return(
      <div>
      
        <Router>
          <div>
      
            <header ref={ (headerElement) => this.headerElement = headerElement}>
              <Menu secondary>
                <Dropdown item labeled icon={<Icon name="content" size="big" />}>
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
            </header>
        
            <Segment basic id="content">

              <div style={{height: this.state.height}}></div>
      
                <Route exact path="/" component={Home}/>
                <Route path="/eduexp" component={EduExp}/>
                <Route path="/projects" component={Projects}/>
                <Route path="/achievements" component={Achievements}/>
              
                <Footer />
              
            </Segment>
        
          </div>
          
        </Router>
      </div>
    )
  }
  
}
export default App