import React, {Component} from 'react';
import {
  Route,
  Link,
  Redirect
} from 'react-router-dom'
import { Container, Menu, Divider } from 'semantic-ui-react'

const Achievement = props => { return (
  <div>
    <h3>{props.name}</h3>
   {props.txt}
  </div>)
}

const Page2017 = () => (
  <div>
  <Achievement name="Good Stuff" txt="We won I think" /><Divider/>
  <Achievement name="Good Stuff" txt="We won I think" />
  </div>
)

const Page2016 = () => (
  <div>
  <Achievement name="Good Stuff" txt="We won I think" />
  </div>
)

const Page2015 = () => (
  <div>
  <Achievement name="Good Stuff" txt="We won I think" />
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

      <h2>Projects</h2>
    
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