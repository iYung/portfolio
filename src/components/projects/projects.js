import React, {Component} from 'react';
import './projects.css'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Menu, Image, Segment } from 'semantic-ui-react'

class Project extends Component { 
  
  render(){
  
  let github = null;  
  if (this.props.github != null) {
    github = <a href={this.props.github} target="_blank"><Image spaced id="project-link-logo" src="https://image.flaticon.com/icons/svg/37/37819.svg" inline={true} size={"mini"} /></a>;
  }
  let devpost = null;  
  if (this.props.devpost != null) {
    devpost = <a href={this.props.devpost} target="_blank"><Image spaced id="project-link-logo" src="https://nealrs.github.io/devpost-follow-button/icon/devpost.svg" inline={true} size={"mini"} /></a>;
  }
  
  return (
    <Segment>
      <Image shape={"rounded"} bordered={true} centered={true} size={"large"} src={this.props.pic} alt={this.props.altTxt}></Image>
      <h3>{this.props.name}</h3>
      <p>{this.props.txt}</p>
      <p><b>Links:</b> {devpost}{github}</p>
    </Segment>
  )}
}

const Page2017 = () => (
  <Segment.Group>
    <Nav activeItem={'2017'}/>
    <Project name="This Website" txt="Text goes here about the project." altTxt="My website's frontpage" pic="http://i.imgur.com/sJtdXO0.png" github="https://github.com/iYung/portfolio" />
    <Project name="Green Waste Bin" txt="Blah blah blah" altTxt="My team posing behind the project" pic="http://i.imgur.com/IjdrER0.png" github="https://github.com/pwnedpixel/GreenGarbage" devpost="https://devpost.com/software/green-waste-bin"/>
    <Project name="Theia" txt="Text goes here about the project." altTxt="Me wearing the project" pic="http://i.imgur.com/J1zmOZ3.png" />
  </Segment.Group>
)

const Page2016 = () => (
  <Segment.Group>
    <Nav activeItem={'2016'}/>
    <Project name="Braille Printer" txt="Text goes here about the project." altTxt="A close up of the printer" pic="http://i.imgur.com/LFbglpi.png" />
    <Project name="AR Watch" txt="Text goes here about the project." altTxt="A view of AR Watch's output" pic="http://i.imgur.com/ZZbcwyf.png" />
    <Project name="Shake N Quake" txt="Text goes here about the project." altTxt="A close up on the final project" pic="http://i.imgur.com/CzQJBAS.png" />
  </Segment.Group>
)

const Page2015 = () => (
  <Segment.Group>
    <Nav activeItem={'2015'}/>
    <Project name="Just Out For a Rift" txt="Text goes right here" altTxt="Me on JOFaR" pic="http://i.imgur.com/rhyhVPD.png" />
  </Segment.Group>
)

class Nav extends Component {
  render(){ return (
    <Segment id="mainBar" textAlign={"center"}>
      <h2>Projects</h2>
      <Menu pointing secondary>
        <Link to={`/projects/2017`}>
          <Menu.Item name='2017' active={this.props.activeItem === '2017'} />
        </Link>
        <Link to={`/projects/2016`}>
          <Menu.Item name='2016' active={this.props.activeItem === '2016'} />
        </Link>
        <Link to={`/projects/2015`}>
          <Menu.Item name='2015' active={this.props.activeItem=== '2015'} />
        </Link>
      </Menu>
    </Segment>
  )}
}

class Projects extends Component {
  render() {
    return(
      <div>
          <Route exact path="/projects" render={() => ( <Redirect to="/projects/2017"/>)}/>
          <Route path="/projects/2017" component={Page2017}/>
          <Route path="/projects/2016" component={Page2016}/>
          <Route path="/projects/2015" component={Page2015}/>
      </div>
    )
  }
}
export default Projects