import React, {Component} from 'react';
import { Form, Segment, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Dashboard from './dashboard'

class Login extends Component {
  
  login = () => {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
    Axios.post('/api/login', Qs.stringify({ 'username': username, 'password': password }))
      .then(res => {
        if (res.data.success) {
          this.props.onclick();
        } else {
          alert("Login failed!");
        }
      });
  }
  
  render(){ 
    return(
      <div>
        <Segment.Group>
          <Segment id="mainBar" textAlign={"center"}>
            <h2>Log In</h2>
          </Segment>
          <Segment textAlign={"left"}>
          <Form>
            <Form.Field>
              <label>Username</label>
              <input id={"loginUsername"} placeholder='Username' />
            </Form.Field>
            <Form.Field>
              <label>Password</label>
              <input id={"loginPassword"} placeholder='Password' />
            </Form.Field>
            <Label onClick={this.login}>Login</Label>
          </Form>
          </Segment>
        </Segment.Group>
      </div>
    )
  }
}

class Admin extends Component { 
  constructor(){
    super();
    this.state = {loggedIn: false};
  }
  
  login = () => {
    this.setState({loggedIn: true})
  }
  
  render(){
    if (this.state.loggedIn) {
      return(<Dashboard/>)
    } else {
      return(<Login onclick={this.login}/>)
    }
  }
}
export default Admin