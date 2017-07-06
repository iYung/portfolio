import React, {Component} from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Segment, Menu } from 'semantic-ui-react'

const Achievement = props => { return (
  <Segment>
    <h3>{props.name} — {props.date}</h3>
   <p>{props.txt}</p>
  </Segment>)
}

class Page2017 extends Component {

  render() {
    
  return(
  <Segment.Group>
  <Nav activeItem={'2017'}/>
  <Achievement name="Best Domain Name from Domain.com @ ConUHacks" date="January" txt="This award was won by my team in a hackathon hosted at Concordia University. We won with our Raspberry Pi project called Theia against 7 other submissions. The award was given due to our punny domain name for our webpage hosted by Azure." />
  <Achievement name="Best .Tech Domain @ ConUHacks" date="January" txt="This award was won by my team in a hackathon hosted at Concordia University. We won with our Raspberry Pi project called Theia against 7 other submissions. The award was given due to our punny domain name for our webpage hosted by Azure." />
  <Achievement name="Second Place @ QHacks" date="February" txt="This award was won by my team in a hackathon hosted at Queen's University. We won with our Raspberry Pi project called Green Garbage Bin against 84 other submissions. This project was a combination of our new skills from the past few hackathon projects." />
  <Achievement name="Best Use of Indico's APIs @ QHacks" date="February" txt="This award was won by my team in a hackathon hosted at Queen's University. We won with our Raspberry Pi project called Green Garbage Bin against 12 other submissions. This project was a combination of our new skills from the past few hackathon projects." />
  </Segment.Group>
  )
  }
}

class Page2016 extends Component {

  render() {
    
  return(
  <Segment.Group>
      <Nav activeItem='2016'/>
  <Achievement name="Third Place @ WearHacksKW" date="March" txt="This award was won by my team in a hackathon hosted in Waterloo's Accelerator Centre. We won with our AR project called AR Watch against 14 other submissions. This project was our first experience with augmented reality." />
  <Achievement name="First Place @ HackWestern 3" date="October" txt="This award was won by my team in a hackathon hosted at Western University. We won with our Raspberry Pi project called Braille Printer against 91 other submissions. This project was our first real experience with Python, solenoids, and the Raspberry Pi." />
  </Segment.Group>
  )
  }
}

class Page2015 extends Component {

  render() {
    
  return(
  <Segment.Group>
      <Nav activeItem='2015' />
  <Achievement name="Best Hardware Hack @ HackWestern 2" date="November" txt="This award was won by my team in a hackathon hosted at Western University. We won with our VR project called Just Out For a Rift against 24 other submissions. My team earned this award by combining hardware and software to provide an unique experience with a new emerging technology." />
  </Segment.Group>
  )
  }
}

class Nav extends Component {

  render() {
    
  return(
    <Segment id="mainBar" textAlign={"center"}>
      <h2>Achievements</h2>
      <Menu pointing secondary>
          <Link to={`/achievements/2017`}>
            <Menu.Item name='2017' active={this.props.activeItem === '2017'} />
          </Link>
          <Link to={`/achievements/2016`}>
            <Menu.Item name='2016' active={this.props.activeItem === '2016'} />
          </Link>
          <Link to={`/achievements/2015`}>
            <Menu.Item name='2015' active={this.props.activeItem=== '2015'} />
          </Link>
      </Menu>
    </Segment>
  )
  }
}

class Achievements extends Component {
  render() {

  return(
  
    <div>

      <Route exact path="/achievements" render={() => ( <Redirect to="/achievements/2017"/>)}/>
      <Route path="/achievements/2017" render={(props) => (
        <Page2017/>
      )}/>
      <Route path="/achievements/2016" component={Page2016}/>
      <Route path="/achievements/2015" render={(props) => (
        <Page2015/>
      )}/>
      
    </div>
  )
  }
}


export default Achievements