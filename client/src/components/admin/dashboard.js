import React, {Component} from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Menu, Segment } from 'semantic-ui-react'

class Home extends Component { 
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'home'}/>
    <Segment />
  </Segment.Group>
)}}

class EduExp extends Component { 
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'eduexp'}/>
    <Segment />
  </Segment.Group>
)}}

class Projects extends Component { 
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'projects'}/>
    <Segment />
  </Segment.Group>
)}}

class Achievements extends Component { 
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'achievements'}/>
    <Segment />
  </Segment.Group>
)}}

class Nav extends Component {
  render(){ return (
    <Segment id="mainBar" textAlign={"center"}>
      <h2>Admin Dashboard</h2>
      <Menu pointing secondary>
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

class Dashboard extends Component { 
   render(){ return(
      <div>
          <Route exact path="/admin" render={() => ( <Redirect to="/admin/home"/>)}/>
          <Route path="/admin/home" component={Home}/>
          <Route path="/admin/eduexp" component={EduExp}/>
          <Route path="/admin/projects" component={Projects}/>
          <Route path="/admin/achievements" component={Achievements}/>
      </div>
)}}
export default Dashboard