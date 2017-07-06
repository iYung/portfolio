import React from 'react';
import { Button, Form, Container } from 'semantic-ui-react'

const Admin = () => (
  <div>
  <Container text>
    <Form>
        <Form.Field>
      <label>Username</label>
      <input placeholder='Username' />
    </Form.Field>
    <Form.Field>
      <label>Password</label>
      <input placeholder='Password' />
    </Form.Field>
    <Button>Login</Button>
    </Form>
    </Container>
  </div>
)

export default Admin