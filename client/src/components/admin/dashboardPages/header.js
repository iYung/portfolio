import React, {Component} from 'react';
import { Segment, Form, Label } from 'semantic-ui-react'
import Axios from 'axios';
import Qs from 'qs';

import Nav from './nav';

class HeaderData extends Component { 
  
    update(){
        const txt = document.getElementById("headerTxt").value;
        Axios.put('/api/header', Qs.stringify({ 'text': txt, 'userPass': sessionStorage.getItem('pass') }))
            .then(res => {
            alert(res.data.message)
        });
    }
  
    del(){
        Axios({method: 'delete', url: '/api/header', data: {userPass: sessionStorage.getItem('pass')}}).then(res => {
            this.props.cb();
        });
    }
  
  render(){ return(
    <Segment>
        <Form>
            <Form.Field>
                <label>Text</label>
                <input id={"headerTxt"} defaultValue={this.props.txt}/>
            </Form.Field>
            <Label onClick={() => this.update()}>Update</Label><Label onClick={() => this.del(this.props.cb)}>Delete</Label>
        </Form>
    </Segment>
    )}}

class Header extends Component { 
    constructor(props) {
        super(props);
        this.state = {
            headers: []
        };
        this.getPosts = this.getPosts.bind(this);
    }
  
    componentDidMount() {
        this.getPosts();
    }
    
    newPost(){
        Axios.post('/api/header', Qs.stringify({ 'userPass': sessionStorage.getItem('pass') })).then(res => {
            this.getPosts();
        });
    }
    
    getPosts(){
        Axios.get('/api/header').then(res => {
            const headers = res.data;
            this.setState({ headers: headers });
        });
    }
    
    render(){
        let newPostBar = <Segment><Label onClick={() => this.newPost()}>New Entry</Label></Segment>;
        return(
            <Segment.Group>
                <Nav activeItem={'header'}/>
                {   
                    this.state.headers.map(header => {
                        newPostBar = null;
                        return <HeaderData key={header._id} txt={header.text} cb={this.getPosts}/>
                    }
                )}
                {newPostBar}
            </Segment.Group>
        )}
}
export default Header