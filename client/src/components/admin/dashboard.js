import React, {Component} from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'
import { Segment } from 'semantic-ui-react'
import Achievements from './dashboardPages/achievements';
import Nav from './dashboardPages/nav';
import Home from './dashboardPages/home';

class Edu extends Component { 
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'edu'}/>
    <Segment />
  </Segment.Group>
)}}

class Exp extends Component { 
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'exp'}/>
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

class Dashboard extends Component { 
  render(){ return(
    <div>
      <Route exact path="/admin" render={() => ( <Redirect to="/admin/home"/>)}/>
      <Route path="/admin/home" component={Home}/>
      <Route path="/admin/edu" component={Edu}/>
      <Route path="/admin/exp" component={Exp}/>
      <Route path="/admin/projects" component={Projects}/>
      <Route path="/admin/achievements" component={Achievements}/>
    </div>
)}}
export default Dashboard