import React, {Component} from 'react';
import './projects.css'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Container, Menu, Image, Divider } from 'semantic-ui-react'

class Project extends Component { 
  
  render(){
  
  let github = null;  
  if (this.props.github != null) {
    github = <a href={this.props.github} target="_blank"><Image avatar id="project-link-logo" src="https://image.flaticon.com/icons/png/512/25/25231.png" shape={"circular"} inline={true} size={"mini"} /></a>;
  }
  
  return (
  <div>
    <Image shape={"rounded"} bordered={true} centered={true} size={"large"} src={this.props.pic} alt={this.props.altTxt}></Image>
   <h3>{this.props.name}</h3>
   <p>{this.props.txt}</p>
   {github}
  </div>)
  }
}

const Page2017 = () => (
  <div>
  <Project name="This Website" txt="Text goes here about the project." altTxt="My website's frontpage" pic="http://i.imgur.com/sJtdXO0.png" github="https://github.com/iYung/portfolio" /><Divider/>
  <Project name="Green Waste Bin" txt="Blah blah blah" altTxt="My team posing behind the project" pic="http://i.imgur.com/IjdrER0.png" github="https://github.com/pwnedpixel/GreenGarbage"/><Divider/>
  <Project name="Theia" txt="Text goes here about the project." altTxt="Me wearing the project" pic="http://i.imgur.com/J1zmOZ3.png" />
  </div>
)

const Page2016 = () => (
  <div>
  <Project name="Braille Printer" txt="Text goes here about the project." altTxt="A close up of the printer" pic="http://i.imgur.com/LFbglpi.png" /><Divider/>
  <Project name="AR Watch" txt="Text goes here about the project." altTxt="A view of AR Watch's output" pic="http://i.imgur.com/ZZbcwyf.png" /><Divider/>
  <Project name="Shake N Quake" txt="Text goes here about the project." altTxt="A close up on the final project" pic="http://i.imgur.com/CzQJBAS.png" />
  </div>
)

const Page2015 = () => (
  <div>
    
    <Project name="Just Out For a Rift" txt="Text goes right here" altTxt="Me on JOFaR" pic="http://i.imgur.com/rhyhVPD.png" />
  </div>
)

class Projects extends Component {
  state = { activeItem: '2017' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    
  return(
  <div>
  
    <Container text>

      <h2>Projects</h2>
    
      <Menu pointing secondary>
          <Link to={`/projects/2017`}>
            <Menu.Item name='2017' active={activeItem === '2017'} onClick={this.handleItemClick} />
          </Link>
          <Link to={`/projects/2016`}>
            <Menu.Item name='2016' active={activeItem === '2016'} onClick={this.handleItemClick} />
          </Link>
          <Link to={`/projects/2015`}>
            <Menu.Item name='2015' active={activeItem=== '2015'} onClick={this.handleItemClick} />
          </Link>
      </Menu>

      <Route exact path="/projects" render={() => ( <Redirect to="/projects/2017"/>)}/>
      <Route path="/projects/2017" component={Page2017}/>
      <Route path="/projects/2016" component={Page2016}/>
      <Route path="/projects/2015" component={Page2015}/>
      
      </Container>
  </div>)
  }
}

export default Projects