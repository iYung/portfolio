import React, {Component} from 'react';
import { Segment, Form, Label, Menu } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class Project extends Component { 
  
  update(){
    const name = document.getElementById(this.props.identifier + 'name').value;
    const date = document.getElementById(this.props.identifier + 'date').value;
    const txt = document.getElementById(this.props.identifier + 'txt').value;
    const img = document.getElementById(this.props.identifier + 'img').value;
    const devpost = document.getElementById(this.props.identifier + 'devpost').value;
    const github = document.getElementById(this.props.identifier + 'github').value;
    Axios.put('https://portfolio-iyung.c9users.io/api/project/' + this.props.identifier, Qs.stringify({ 'name': name, 'date': date, 'text': txt, 'img': img, 'devpost': devpost, 'github': github }))
      .then(res => {
        alert("Updated!")
      });
  }
  
  del(){
        Axios.delete('https://portfolio-iyung.c9users.io/api/project/' + this.props.identifier).then(res => {
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
                <label>Month</label>
                <input id={this.props.identifier + "date"} defaultValue={this.props.date}/>
            </Form.Field>
            <Form.Field>
                <label>Image</label>
                <input id={this.props.identifier + "img"} defaultValue={this.props.img}/>
            </Form.Field>
            <Form.Field>
                <label>Text</label>
                <textarea id={this.props.identifier + "txt"} defaultValue={this.props.txt}/>
            </Form.Field>
            <Form.Field>
                <label>Devpost Link</label>
                <input id={this.props.identifier + "devpost"} defaultValue={this.props.devpost}/>
            </Form.Field>
            <Form.Field>
                <label>Github Link</label>
                <input id={this.props.identifier + "github"} defaultValue={this.props.github}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Projects extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            projects: [],
            activeItem: "2017"
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('https://portfolio-iyung.c9users.io/api/project/new/'+ this.state.activeItem).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('https://portfolio-iyung.c9users.io/api/projects/' + this.state.activeItem).then(res => {
            const projects = res.data;
            this.setState({ projects: projects });
        });
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name }, this.getPosts)}
    
    render(){ return(
        <Segment.Group>
            <Nav activeItem={'projects'}/>
            <Segment id="mainBar">
                <Menu pointing secondary stackable >
                  <Menu.Item name='2017' active={this.state.activeItem === '2017'} onClick={this.handleItemClick}/>
                  <Menu.Item name='2016' active={this.state.activeItem === '2016'} onClick={this.handleItemClick}/>
                  <Menu.Item name='2015' active={this.state.activeItem === '2015'} onClick={this.handleItemClick}/>
                </Menu>
            </Segment>
            {this.state.projects.map(project =>
                <Project key={project._id} identifier={project._id} name={project.name} date={project.date} txt={project.text} img={project.img} devpost={project.devpost} github={project.github} cb={this.getPosts}/>
            )}
            <Segment>
                <Label onClick={() => this.newPost()}>New Entry</Label>
            </Segment>
        </Segment.Group>
    )}
}
export default Projects