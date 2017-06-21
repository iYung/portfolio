import React from 'react';
import './eduexp.css'
import { Container, Divider } from 'semantic-ui-react'

const Entry = props => { return (
  <div>
   <h3>{props.position} — {props.date}</h3>
   <p>{props.txt}</p>
  </div>)
}

const EduExp = () => (
  <div>
    <Container text>
      <h2>Experience</h2>
      <Divider/>
      <Entry position="IT Application Associate Intern @ Celestica" date="2017 to Present" txt="things and stuff go here"/><br/>
      <Entry position="Preflight Technician @ Ricoh Canada" date="May 2015 to August 2015" txt="things and stuff go here"/>
      <h2>Education</h2>
      <Divider/>
      <Entry position="Computer Engineering @ Western University" date="May 2015 to Present" txt="things and stuff go here"/><br/>
      <Entry position="High School @ Mayfield Secondary School" date="September 2010 to July 2014" txt="things and stuff go here.things and stuff go here.things and stuff go here.things and stuff go here.things and stuff go here."/>
    </Container>
  </div>
)

export default EduExp