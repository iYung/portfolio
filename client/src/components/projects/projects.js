import React, {Component} from 'react';
import './projects.css'
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Menu, Image, Segment } from 'semantic-ui-react'
import Axios from 'axios';

class Project extends Component { 
  
  render(){
    let linksLabel = null;
    let github = null;  
    if (this.props.github !== "") {
      linksLabel = <b>Links:</b>;
      github = <a href={this.props.github} target="_blank"><Image spaced id="project-link-logo" src="https://image.flaticon.com/icons/svg/37/37819.svg" inline={true} size={"mini"} /></a>;
    }
    let devpost = null;  
    if (this.props.devpost !== "") {
      linksLabel = <b>Links:</b>;
      devpost = <a href={this.props.devpost} target="_blank"><Image spaced id="project-link-logo" src="https://nealrs.github.io/devpost-follow-button/icon/devpost.svg" inline={true} size={"mini"} /></a>;
    }
    let image = null;
    if (this.props.img !== "") {
      image = <Image shape={"rounded"} bordered={true} centered={true} size={"large"} src={this.props.img} alt={this.props.altTxt}/>;
    }
  
    return (
      <Segment>
        {image}
        <h3>{this.props.name}</h3>
        <p>{this.props.txt}</p>
        {linksLabel} {devpost}{github}
      </Segment>
    )
  }
}

class Page2017 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/projects/2017')
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      });
  }
  
  render(){ return (
    <Segment.Group>
      <Nav activeItem='2017'/>
      {this.state.projects.map(project =>
        <Project key={project._id} name={project.name} date={project.date} txt={project.text} img={project.img} devpost={project.devpost} github={project.github}/>
      )}
    </Segment.Group>
  )}
}

class Page2016 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/projects/2016')
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      });
  }
  
  render(){ return (
    <Segment.Group>
      <Nav activeItem='2016'/>
      {this.state.projects.map(project =>
        <Project key={project._id} name={project.name} date={project.date} txt={project.text} img={project.img} devpost={project.devpost} github={project.github}/>
      )}
    </Segment.Group>
  )}
}

class Page2015 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      projects: []
    };
  }
  
  componentDidMount() {
    Axios.get('/api/projects/2015')
      .then(res => {
        const projects = res.data;
        this.setState({ projects });
      });
  }
  
  render(){ return (
    <Segment.Group>
      <Nav activeItem='2015'/>
      {this.state.projects.map(project =>
        <Project key={project._id} name={project.name} date={project.date} txt={project.text} img={project.img} devpost={project.devpost} github={project.github}/>
      )}
    </Segment.Group>
  )}
}

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