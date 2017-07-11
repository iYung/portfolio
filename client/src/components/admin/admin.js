import React, {Component} from 'react';
import { Button, Form, Segment } from 'semantic-ui-react'

import Dashboard from './dashboard'

class Login extends Component { 
   render(){ return(
  <div>
    <Segment.Group>
      <Segment id="mainBar" textAlign={"center"}>
        <h2>Log In</h2>
      </Segment>
      <Segment textAlign={"left"}>
      <Form>
        <Form.Field>
          <label>Username</label>
          <input placeholder='Username' />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder='Password' />
        </Form.Field>
        <Button onClick={this.props.onclick}>Login</Button>
      </Form>
      </Segment>
    </Segment.Group>
  </div>
)}}

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