import React, { Component } from 'react';
import { Image, Segment } from 'semantic-ui-react'
import Axios from 'axios';

class Home extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      homes: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/home')
      .then(res => {
        const homes = res.data;
        this.setState({ homes });
      });
  }
  
  render(){ return (
    <div>
      {this.state.homes.map(home =>
      <Segment.Group key={home._id}>
        <Segment id="mainBar" textAlign={"center"}>
          <Image bordered shape={"circular"} centered={true} size={"small"} src={home.image} alt="me"></Image>
          <h2>{home.title}</h2>
        </Segment>
        <Segment textAlign={"left"}>
          <p id="textSegment">{home.text}</p>
        </Segment>
      </Segment.Group>
      )}
    </div>
  )}
}
export default Home