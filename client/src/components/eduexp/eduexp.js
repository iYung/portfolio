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

const EduExp = () => (
  <div>
    <Segment.Group>
      <Segment id="mainBar" textAlign={"center"}>
        <h2>Experience</h2>
      </Segment>
      <Entry position="IT Application Associate Intern @ Celestica" date="2017 to Present" txt="things and stuff go here"/>
      <Entry position="Preflight Technician @ Ricoh Canada" date="May 2015 to August 2015" txt="In this position, I installed hardware modules and firmware onto office printers before they were shipped to the customer. I also had to troubleshoot printers and diagnose issues if they arised. The position taught me quite a bit on Excel and how printers operate."/>
    </Segment.Group>  
    <Education /> 
  </div>
)
export default EduExp