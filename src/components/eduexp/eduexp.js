import React from 'react';
import './eduexp.css'
import { Container, Divider } from 'semantic-ui-react'

const Entry = props => { return (
  <div>
   <h3>{props.position}</h3>
   <p>{props.txt}</p>
   <br/>
  </div>)
}

const EduExp = () => (
  <div>
    <Container text>
      <h2>Experience</h2>
      <Divider/>
      <Entry position="IT Application Associate Intern @ Celestica — May 2017 to Present" txt="things and stuff go here"/>
      <Entry position="Preflight Technician @ Ricoh Canada — May 2015 to August 2015" txt="things and stuff go here"/>
      <h2>Education</h2>
      <Divider/>
      <Entry position="Computer Engineering @ Western University — May 2015 to Present" txt="things and stuff go here"/>
      <Entry position="High School @ Mayfield Secondary School — September 2010 to July 2014" txt="things and stuff go here"/>
    </Container>
  </div>
)

export default EduExp