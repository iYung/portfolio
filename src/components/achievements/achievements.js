import React, {Component} from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Container, Menu, Divider } from 'semantic-ui-react'

const Achievement = props => { return (
  <div>
    <h3>{props.name} — {props.date}</h3>
   <p>{props.txt}</p>
  </div>)
}

const Page2017 = () => (
  <div>
  <Achievement name="Best Domain Name from Domain.com @ ConUHacks" date="January" txt="This award was won by my team in a hackathon hosted at Concordia University. We won with our Raspberry Pi project called Theia against 7 other submissions. The award was given due to our punny domain name for our webpage hosted by Azure." /><Divider/>
  <Achievement name="Best .Tech Domain @ ConUHacks" date="January" txt="This award was won by my team in a hackathon hosted at Concordia University. We won with our Raspberry Pi project called Theia against 7 other submissions. The award was given due to our punny domain name for our webpage hosted by Azure." /><Divider/>
  <Achievement name="Second Place @ QHacks" date="February" txt="This award was won by my team in a hackathon hosted at Queen's University. We won with our Raspberry Pi project called Green Garbage Bin against 84 other submissions. This project was a combination of our new skills from the past few hackathon projects." /><Divider/>
  <Achievement name="Best Use of Indico's APIs @ QHacks" date="February" txt="This award was won by my team in a hackathon hosted at Queen's University. We won with our Raspberry Pi project called Green Garbage Bin against 12 other submissions. This project was a combination of our new skills from the past few hackathon projects." />
  </div>
)

const Page2016 = () => (
  <div>
  <Achievement name="Third Place @ WearHacksKW" date="March" txt="This award was won by my team in a hackathon hosted in Waterloo's Accelerator Centre. We won with our AR project called AR Watch against 14 other submissions. This project was our first experience with augmented reality." /><Divider/>
  <Achievement name="First Place @ HackWestern 3" date="October" txt="This award was won by my team in a hackathon hosted at Western University. We won with our Raspberry Pi project called Braille Printer against 91 other submissions. This project was our first real experience with Python, solenoids, and the Raspberry Pi." />
  </div>
)

const Page2015 = () => (
  <div>
  <Achievement name="Best Hardware Hack @ HackWestern 2" date="November" txt="This award was won by my team in a hackathon hosted at Western University. We won with our VR project called Just Out For a Rift against 24 other submissions. My team earned this award by combining hardware and software to provide an unique experience with a new emerging technology." />
  </div>
)

class Achievements extends Component {
  state = { activeItem: '2017' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
  return(
  <div>
  
    <Container text>

      <h2>Achievements</h2>
    
      <Menu pointing secondary>
          <Link to={`/achievements/2017`}>
            <Menu.Item name='2017' active={activeItem === '2017'} onClick={this.handleItemClick} />
          </Link>
          <Link to={`/achievements/2016`}>
            <Menu.Item name='2016' active={activeItem === '2016'} onClick={this.handleItemClick} />
          </Link>
          <Link to={`/achievements/2015`}>
            <Menu.Item name='2015' active={activeItem=== '2015'} onClick={this.handleItemClick} />
          </Link>
      </Menu>

      <Route exact path="/achievements" render={() => ( <Redirect to="/achievements/2017"/>)}/>
      <Route path="/achievements/2017" component={Page2017}/>
      <Route path="/achievements/2016" component={Page2016}/>
      <Route path="/achievements/2015" component={Page2015}/>
      
      </Container>
  </div>)
  }
}

export default Achievements