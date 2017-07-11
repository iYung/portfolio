import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import { Container } from 'semantic-ui-react'
import './App.css'

import Home from './components/home/home'
import EduExp from './components/eduexp/eduexp'
import Projects from './components/projects/projects'
import Achievements from './components/achievements/achievements'
import Footer from './components/footer/footer'
import Admin from './components/admin/admin'
import Header from './components/header/header'

class App extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      height: 0
    }
  }
  
  updateHeight = (height) => {
    this.setState({ height: height });
  }
  
  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })
  offVisibility = () => {if (this.state.visible) { this.setState({ visible: false}); }}
  
  render(){
    
    return(
      <div>
        <Router>
          <div>
            <Header updateheight={this.updateHeight}/>
            <div style={{height: this.state.height}}></div>
            <Container text id="contentBox">
              <Route exact path="/" component={Home}/>
              <Route path="/eduexp" component={EduExp}/>
              <Route path="/projects" component={Projects}/>
              <Route path="/achievements" component={Achievements}/>
              <Route path="/admin" component={Admin}/>
            </Container>
            <Footer />
          </div>
        </Router>
      </div>
    )
  }
}
export default App