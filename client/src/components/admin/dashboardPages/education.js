import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class Post extends Component { 
  
  update(){
    const name = document.getElementById(this.props.identifier + 'name').value;
    const date = document.getElementById(this.props.identifier + 'date').value;
    const txt = document.getElementById(this.props.identifier + 'txt').value;
    Axios.put('https://portfolio-iyung.c9users.io/api/education/' + this.props.identifier, Qs.stringify({ 'name': name, 'date': date, 'text': txt }))
      .then(res => {
        alert("Updated!")
      });
  }
  
  del(){
        Axios.delete('https://portfolio-iyung.c9users.io/api/education/' + this.props.identifier).then(res => {
            alert("Deleted!");
            this.props.cb();
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
                <label>Time Period</label>
                <input id={this.props.identifier + "date"} defaultValue={this.props.date}/>
            </Form.Field>
            <Form.Field>
                <label>Text</label>
                <textarea id={this.props.identifier + "txt"} defaultValue={this.props.txt}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Education extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            educations: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('https://portfolio-iyung.c9users.io/api/education/').then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('https://portfolio-iyung.c9users.io/api/education/').then(res => {
            const educations = res.data;
            this.setState({ educations: educations });
        });
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name }, this.getPosts)}
    
    render(){ return(
        <Segment.Group>
            <Nav activeItem={'edu'}/>
            {this.state.educations.map(education =>
                <Post key={education._id} identifier={education._id} name={education.name} date={education.date} txt={education.text} cb={this.getPosts}/>
            )}
            <Segment>
                <Label onClick={() => this.newPost()}>New Entry</Label>
            </Segment>
        </Segment.Group>
    )}
}
export default Education