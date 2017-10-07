import React from 'react';
import './footer.css'
import { Divider, Container, Image } from 'semantic-ui-react'

const Footer = () => (
  <div>
    <Container text textAlign={"center"} id="foot">
      <Divider/>
      Made with <a href="https://facebook.github.io/react/" target="_blank"><Image spaced src="https://cdn.worldvectorlogo.com/logos/react.svg" shape={"circular"} inline={true} size={"mini"} /></a><a href="https://react.semantic-ui.com/" target="_blank"><Image spaced src="https://react.semantic-ui.com/logo.png" inline={true} size={"mini"} /></a> and <a href="https://reacttraining.com/react-router/" target="_blank"><Image spaced src="https://seeklogo.com/images/R/react-router-logo-AB5BFB638F-seeklogo.com.png" inline={true} size={"mini"} /></a>
    </Container>
  </div>
)
export default Footer