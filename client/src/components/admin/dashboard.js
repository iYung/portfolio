import React, {Component} from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Menu, Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

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
  
  constructor(props) {
    super(props);
    this.state = {
      achievements: []
    };
  }
  
  componentDidMount() {
    Axios.get('https://portfolio-iyung.c9users.io/api/achievements/2017')
      .then(res => {
        const achievements = res.data;
        this.setState({ achievements });
      });
  }
  
   render(){ return(
  <Segment.Group>
    <Nav activeItem={'achievements'}/>
    {this.state.achievements.map(achievement =>
            <Achievement key={achievement._id} identifier={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text}/>
    )}
    <Segment>
      <Label>New Entry</Label>
    </Segment>
  </Segment.Group>
)}}

class Achievement extends Component { 
  
  update(key){
    const name = document.getElementById(key + 'name').value;
    const date = document.getElementById(key + 'date').value;
    const txt = document.getElementById(key + 'txt').value;
    Axios.put('https://portfolio-iyung.c9users.io/api/achievement/' + this.props.identifier, Qs.stringify({ 'name': name, 'date': date, 'text': txt }))
      .then(res => {
        alert("Updated!")
      });
  }
  
   render(){ return(
  <Segment>
    <Form>
      <Form.Field>
        <label>Name</label>
        <input id={this.props.identifier + "name"} defaultValue={this.props.name}/>
      </Form.Field>
      <Form.Field>
        <label>Date</label>
        <input id={this.props.identifier + "date"} defaultValue={this.props.date}/>
      </Form.Field>
      <Form.Field>
        <label>Text</label>
        <textarea id={this.props.identifier + "txt"} defaultValue={this.props.txt}/>
      </Form.Field>
      <Label onClick={() => this.update(this.props.identifier)}>Update</Label><Label disabled>Delete</Label>
    </Form>
  </Segment>
)}}

class Nav extends Component {
  render(){ return (
    <Segment id="mainBar" textAlign={"center"}>
      <h2>Admin Dashboard</h2>
      <Menu pointing secondary stackable>
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