import React, {Component} from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom'
import Achievements from './dashboardPages/achievements';
import Home from './dashboardPages/home';
import Projects from './dashboardPages/projects'
import Edu from './dashboardPages/education'
import Exp from './dashboardPages/experience'

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