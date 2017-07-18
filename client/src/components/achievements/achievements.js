import React, {Component} from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Segment, Menu } from 'semantic-ui-react'
import Axios from 'axios';

const Achievement = props => { return (
  <Segment>
    <h3>{props.name} — {props.date}</h3>
    <p>{props.txt}</p>
  </Segment>)
}

class Page2017 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      achievements: []
    };
  }
  
  componentDidMount() {
    Axios.get('https://portfolio-iyung.c9users.io/api/achievements/2017')
      .then(res => {
        const achievements = res.data;
        this.setState({ achievements });
      });
  }
  
  render(){ return (
    <Segment.Group>
      <Nav activeItem='2017'/>
      {this.state.achievements.map((achievement, i) =>
        <Achievement key={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text}/>
      )}
    </Segment.Group>
  )}
}

class Page2016 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      achievements: []
    };
  }
  
  componentDidMount() {
    Axios.get('https://portfolio-iyung.c9users.io/api/achievements/2016')
      .then(res => {
        const achievements = res.data;
        this.setState({ achievements });
      });
  }
  
  render(){ return (
  <Segment.Group>
    <Nav activeItem='2016'/>
    {this.state.achievements.map(achievement =>
            <Achievement key={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text}/>
    )}
    </Segment.Group>
  )}
}

class Page2015 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      achievements: []
    };
  }
  
  componentDidMount() {
    Axios.get('https://portfolio-iyung.c9users.io/api/achievements/2015')
      .then(res => {
        const achievements = res.data;
        this.setState({ achievements });
      });
  }
  
  render(){ return (
  <Segment.Group>
    <Nav activeItem='2015'/>
    {this.state.achievements.map(achievement =>
            <Achievement key={achievement._id} name={achievement.name} date={achievement.date} txt={achievement.text}/>
    )}
    </Segment.Group>
  )}
}

class Nav extends Component {
  render(){ return (
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
  )}
}

const Achievements = () => (
  <div>
    <Route exact path="/achievements" render={() => ( <Redirect to="/achievements/2017"/>)}/>
    <Route path="/achievements/2017" component={Page2017}/>
    <Route path="/achievements/2016" component={Page2016}/>
    <Route path="/achievements/2015" component={Page2015}/>
  </div>
)
export default Achievements