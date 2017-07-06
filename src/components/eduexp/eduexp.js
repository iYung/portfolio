import React from 'react';
import { Segment } from 'semantic-ui-react'

const Entry = props => { return (
    <Segment>
   <h3>{props.position} — {props.date}</h3>
   <p>{props.txt}</p>
   </Segment>
  )
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
      
    <Segment.Group>
    <Segment id="mainBar" textAlign={"center"}>
    <h2>Education</h2>
      </Segment>
      <Entry position="Computer Engineering @ Western University" date="May 2015 to Present" txt="things and stuff go here"/>
      <Entry position="High School @ Mayfield Secondary School" date="September 2010 to July 2014" txt="things and stuff go here.things and stuff go here.things and stuff go here.things and stuff go here.things and stuff go here."/>
    </Segment.Group> 
  </div>
)

export default EduExp