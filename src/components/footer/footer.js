import React from 'react';
import './footer.css'
import { Divider, Container, Image } from 'semantic-ui-react'

const Footer = () => (
  <div>
    <p>
    <Container text textAlign={"center"} id="foot">
    <Divider/>
      Made with  <a href="https://facebook.github.io/react/" target="_blank"><Image src="https://facebook.github.io/react/img/logo.svg" shape={"circular"} inline={true} size={"mini"} /></a> and <a href="https://facebook.github.io/react/" target="_blank"><Image src="https://react.semantic-ui.com" inline={true} size={"mini"} /></a>
    </Container>
    </p>
  </div>
)

export default Footer