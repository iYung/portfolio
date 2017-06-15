import React, {Component} from 'react';
import './projects.css'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Container, Menu, Image } from 'semantic-ui-react'

const Project = props => { return (
  <div>
    <Image shape={"rounded"} bordered={true} centered={true} size={"large"} src={props.pic} alt={props.altTxt}></Image>
   <h3>{props.name}</h3>
   {props.txt}
  </div>)
}

const Page2017 = () => (
  <div>
  <Project name="This Website" txt="Text goes here about the project." altTxt="My website's frontpage" pic="http://i.imgur.com/sJtdXO0.png" />
  <Project name="This Website" txt="Text goes here about the project." altTxt="My website's frontpage" pic="http://i.imgur.com/sJtdXO0.png" />
  </div>
)

const Page2015 = () => (
  <div>
    <Image shape={"rounded"} height={"210px"}  bordered={true} centered={true} size={"large"} src="http://i.imgur.com/nWYgrHT.jpg" alt="Me using JOFAR"></Image>
    <h3>Just Out For a Rift</h3>
    Text text text
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
      <Route path="/projects/2015" component={Page2015}/>
      
      </Container>
  </div>)
  }
}

export default Projects