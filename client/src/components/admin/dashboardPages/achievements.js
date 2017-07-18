import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

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

class Achievements extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            achievements: []
        };
    }
  
    componentDidMount() {
        Axios.get('https://portfolio-iyung.c9users.io/api/achievements/2017').then(res => {
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
    )}
}
export default Achievements