import React from 'react';
import './header.css'
import { Menu } from 'semantic-ui-react'

const Header = () => (
  <header>
    <Menu inverted>
      <Menu.Item header name='menuHead'>
        Ivan Yung
      </Menu.Item>

      <Menu.Item>
        About
      </Menu.Item>

      <Menu.Item>
        Projects
      </Menu.Item>
    </Menu>
  </header>
)

export default Header