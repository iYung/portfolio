import React, {Component} from 'react';
import { Segment, Form, Label, Menu, Icon } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class Achievement extends Component { 
  
  update(){
    const name = document.getElementById(this.props.identifier + 'name').value;
    const date = document.getElementById(this.props.identifier + 'date').value;
    const txt = document.getElementById(this.props.identifier + 'txt').value;
    Axios.put('/api/achievement/' + this.props.identifier, Qs.stringify({ 'name': name, 'date': date, 'text': txt, 'userPass': sessionStorage.getItem('pass') }))
      .then(res => {
        alert(res.data.message)
      });
  }
  
  del(){
        Axios({method: 'delete', url: '/api/achievement/' + this.props.identifier, data: {userPass: sessionStorage.getItem('pass')}}).then(res => {
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
                <label>Text</label>
                <textarea id={this.props.identifier + "txt"} defaultValue={this.props.txt}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Achievements extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            achievements: [],
            activeItem: "2017"
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('/api/achievement/new/'+ this.state.activeItem,  Qs.stringify( {'userPass': sessionStorage.getItem('pass')})).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('/api/achievements/' + this.state.activeItem).then(res => {
            const achievements = res.data;
            this.setState({ achievements: achievements });
        });
    }
    
    handleItemClick = (e, { name }) => {this.setState({ activeItem: name }, this.getPosts)}
    
    render(){ return(
        <Segment.Group>
            <Nav activeItem={'achievements'}/>
            <Segment id="mainBar">
                <Menu pointing secondary stackable>
                    <Menu.Item name='add'><Icon name='plus'/></Menu.Item>
                    <Menu.Item name='2017' active={this.state.activeItem === '2017'} onClick={this.handleItemClick}/>
                    <Menu.Item name='2016' active={this.state.activeItem === '2016'} onClick={this.handleItemClick}/>
                    <Menu.Item name='2015' active={this.state.activeItem === '2015'} onClick={this.handleItemClick}/>
                </Menu>
            </Segment>
            {this.state.achievements.map(achievement =>
                <Achievement key={achievement._id} identifier={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text} cb={this.getPosts}/>
            )}
            <Segment>
                <Label onClick={() => this.newPost()}>New Entry</Label>
            </Segment>
        </Segment.Group>
    )}
}
export default Achievements