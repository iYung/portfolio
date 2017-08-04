import React, { Component } from 'react';
import { Segment } from 'semantic-ui-react'
import Axios from 'axios';

const Entry = props => { return (
  <Segment>
    <h3>{props.position} — {props.date}</h3>
    <p>{props.txt}</p>
  </Segment>
)}

class Education extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      educations: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/education')
      .then(res => {
        const educations = res.data;
        this.setState({ educations });
      });
  }
  
  render(){ return (
    <Segment.Group>
    <Segment id="mainBar" textAlign={"center"}>
        <h2>Education</h2>
    </Segment>
      {this.state.educations.map(education =>
        <Entry key={education._id} position={education.name} date={education.date} txt={education.text}/>
      )}
    </Segment.Group>
  )}
}

class Experience extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      experiences: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/experience')
      .then(res => {
        const experiences = res.data;
        this.setState({ experiences });
      });
  }
  
  render(){ return (
    <Segment.Group>
    <Segment id="mainBar" textAlign={"center"}>
        <h2>Experience</h2>
    </Segment>
      {this.state.experiences.map(experience =>
        <Entry key={experience._id} position={experience.name} date={experience.date} txt={experience.text}/>
      )}
    </Segment.Group>
  )}
}

const EduExp = () => (
  <div>
    <Experience /> 
    <Education /> 
  </div>
)
export default EduExp