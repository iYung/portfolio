import React, {Component} from 'react';
import './projects.css'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Container, Menu } from 'semantic-ui-react'

const Page2017 = ({ match }) => (
  <div>
    <h3>Hey</h3>
  </div>
)

class Projects extends Component {
  state = { activeItem: '2017' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
  return(
  <div>
  
    <Container text>

      <h2>Projects</h2>
    
      <Menu pointing secondary>
          <Link to={`/projects/2017`}>
            <Menu.Item name='2017' active={activeItem === '2017'} onClick={this.handleItemClick} />
          </Link>
          <Link to={`/projects/2016`}>
            <Menu.Item name='2016' active={activeItem === '2016'} onClick={this.handleItemClick} />
          </Link>
          <Link to={`/projects/2015`}>
            <Menu.Item name='2015' active={activeItem=== '2015'} onClick={this.handleItemClick} />
          </Link>
      </Menu>

      <Route exact path="/projects" render={() => ( <Redirect to="/projects/2017"/>)}/>
       <Route path="/projects/2017" component={Page2017}/>
      
      </Container>
  </div>)
  }
}

export default Projects